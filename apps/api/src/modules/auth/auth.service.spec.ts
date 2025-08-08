import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PrismaService } from '../../lib/prisma.service';
import { LoginDto, RegisterDto } from './dto';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn(),
              create: jest.fn(),
            },
            invite: {
              findUnique: jest.fn(),
              update: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('should reject login with invalid email', async () => {
      const loginDto: LoginDto = {
        email: 'nonexistent@example.com',
        password: 'password123',
      };

      jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow('Invalid credentials');
    });

    it('should validate service methods exist', () => {
      expect(typeof service.login).toBe('function');
      expect(typeof service.register).toBe('function');
    });
  });

  describe('register', () => {
    it('should create new user with valid invite code', async () => {
      const registerDto: RegisterDto = {
        email: 'newuser@example.com',
        password: 'password123',
        inviteCode: 'VALID123',
      };

      const mockInvite = {
        id: '1',
        code: 'VALID123',
        inviterId: '1',
        usedBy: null,
        usedAt: null,
        expiresAt: new Date(Date.now() + 86400000),
        createdAt: new Date(),
      };

      const mockUser = {
        id: '2',
        email: 'newuser@example.com',
        username: 'newuser',
        passwordHash: '$2b$10$hashedpassword',
        passkey: 'new-passkey',
        role: 'USER',
        uploaded: BigInt(0),
        downloaded: BigInt(0),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const mockToken = 'mock-jwt-token';

      jest.spyOn(prisma.invite, 'findUnique').mockResolvedValue(mockInvite);
      jest.spyOn(prisma.user, 'create').mockResolvedValue(mockUser);
      jest.spyOn(prisma.invite, 'update').mockResolvedValue(mockInvite);
      jest.spyOn(jwtService, 'sign').mockReturnValue(mockToken);

      const result = await service.register(registerDto);

      expect(result).toHaveProperty('access_token', mockToken);
      expect(result).toHaveProperty('user');
      expect(prisma.invite.findUnique).toHaveBeenCalledWith({
        where: { code: registerDto.inviteCode },
      });
      expect(prisma.user.create).toHaveBeenCalled();
    });

    it('should throw error for invalid invite code', async () => {
      const registerDto: RegisterDto = {
        email: 'newuser@example.com',
        password: 'password123',
        inviteCode: 'INVALID123',
      };

      jest.spyOn(prisma.invite, 'findUnique').mockResolvedValue(null);

      await expect(service.register(registerDto)).rejects.toThrow('Invalid or expired invite code');
    });
  });
});
