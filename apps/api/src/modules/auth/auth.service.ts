import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { PrismaService } from '../../lib/prisma.service';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await argon2.verify(user.passwordHash, dto.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    const access_token = this.jwtService.sign(payload);

    const { passwordHash, ...userWithoutPassword } = user;
    return {
      access_token,
      user: userWithoutPassword,
    };
  }

  async register(dto: RegisterDto) {
    // Check if invite code is valid
    const invite = await this.prisma.invite.findUnique({
      where: { code: dto.inviteCode },
    });

    if (!invite || invite.usedBy || (invite.expiresAt && invite.expiresAt < new Date())) {
      throw new BadRequestException('Invalid or expired invite code');
    }

    // Check if email already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    // Generate username from email
    const username = dto.email.split('@')[0];

    // Hash password
    const passwordHash = await argon2.hash(dto.password);

    // Generate passkey
    const passkey = this.generatePasskey();

    // Create user
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        username,
        passwordHash,
        passkey,
      },
    });

    // Mark invite as used
    await this.prisma.invite.update({
      where: { id: invite.id },
      data: {
        usedBy: user.id,
        usedAt: new Date(),
      },
    });

    const payload = { sub: user.id, email: user.email, role: user.role };
    const access_token = this.jwtService.sign(payload);

    const { passwordHash: _, ...userWithoutPassword } = user;
    return {
      access_token,
      user: userWithoutPassword,
    };
  }

  private generatePasskey(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
