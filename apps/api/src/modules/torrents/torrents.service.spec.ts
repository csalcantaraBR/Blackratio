import { Test, TestingModule } from '@nestjs/testing';
import { TorrentsService } from './torrents.service';
import { PrismaService } from '../../lib/prisma.service';

describe('TorrentsService', () => {
  let service: TorrentsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TorrentsService,
        {
          provide: PrismaService,
          useValue: {
            torrent: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
              count: jest.fn(),
            },
            user: {
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<TorrentsService>(TorrentsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return paginated torrents', async () => {
      const mockTorrents = [
        {
          id: '1',
          name: 'Test Torrent 1',
          infoHashV1: 'hash1',
          infoHashV2: null,
          size: BigInt(1024),
          isPrivate: true,
          isFreeleech: false,
          isVip: false,
          is4k: false,
          tags: 'movie,hd',
          uploaderId: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          name: 'Test Torrent 2',
          infoHashV1: 'hash2',
          infoHashV2: null,
          size: BigInt(2048),
          isPrivate: true,
          isFreeleech: false,
          isVip: false,
          is4k: false,
          tags: 'tv,4k',
          uploaderId: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      const mockCount = 2;

      jest.spyOn(prisma.torrent, 'findMany').mockResolvedValue(mockTorrents);
      jest.spyOn(prisma.torrent, 'count').mockResolvedValue(mockCount);

      const result = await service.findAll({ page: 1, limit: 10 });

      expect(result).toEqual({
        torrents: mockTorrents,
        total: mockCount,
        page: 1,
        limit: 10,
      });
    });

    it('should filter torrents by query', async () => {
      const mockTorrents = [
        {
          id: '1',
          name: 'Matrix Movie',
          infoHashV1: 'hash1',
          infoHashV2: null,
          size: BigInt(1024),
          isPrivate: true,
          isFreeleech: false,
          isVip: false,
          is4k: false,
          tags: 'movie,hd',
          uploaderId: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(prisma.torrent, 'findMany').mockResolvedValue(mockTorrents);
      jest.spyOn(prisma.torrent, 'count').mockResolvedValue(1);

      const result = await service.findAll({ page: 1, limit: 10, query: 'Matrix' });

      expect(prisma.torrent.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            name: { contains: 'Matrix', mode: 'insensitive' },
          }),
          include: expect.objectContaining({
            uploader: expect.any(Object),
          }),
        })
      );
    });
  });

  describe('findOne', () => {
    it('should return a single torrent', async () => {
      const mockTorrent = {
        id: '1',
        name: 'Test Torrent',
        infoHashV1: 'hash1',
        infoHashV2: null,
        size: BigInt(1024),
        isPrivate: true,
        isFreeleech: false,
        isVip: false,
        is4k: false,
        tags: 'movie,hd',
        uploaderId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prisma.torrent, 'findUnique').mockResolvedValue(mockTorrent);

      const result = await service.findOne('1');

      expect(result).toEqual(mockTorrent);
      expect(prisma.torrent.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        include: expect.objectContaining({
          uploader: expect.any(Object),
        }),
      });
    });

    it('should throw error for non-existent torrent', async () => {
      jest.spyOn(prisma.torrent, 'findUnique').mockResolvedValue(null);

      await expect(service.findOne('999')).rejects.toThrow('Torrent not found');
    });
  });

  describe('service methods', () => {
    it('should have required methods', () => {
      expect(typeof service.findAll).toBe('function');
      expect(typeof service.findOne).toBe('function');
    });
  });
});
