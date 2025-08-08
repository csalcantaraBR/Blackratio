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
          id: 1,
          name: 'Test Torrent 1',
          size: 1024,
          seeders: 10,
          leechers: 5,
          tags: 'movie,hd',
          uploaderId: 1,
          createdAt: new Date(),
        },
        {
          id: 2,
          name: 'Test Torrent 2',
          size: 2048,
          seeders: 15,
          leechers: 3,
          tags: 'tv,4k',
          uploaderId: 1,
          createdAt: new Date(),
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
        totalPages: 1,
      });
    });

    it('should filter torrents by query', async () => {
      const mockTorrents = [
        {
          id: 1,
          name: 'Matrix Movie',
          size: 1024,
          seeders: 10,
          leechers: 5,
          tags: 'movie,hd',
          uploaderId: 1,
          createdAt: new Date(),
        },
      ];

      jest.spyOn(prisma.torrent, 'findMany').mockResolvedValue(mockTorrents);
      jest.spyOn(prisma.torrent, 'count').mockResolvedValue(1);

      const result = await service.findAll({ page: 1, limit: 10, query: 'Matrix' });

      expect(prisma.torrent.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            OR: [
              { name: { contains: 'Matrix', mode: 'insensitive' } },
              { tags: { contains: 'Matrix', mode: 'insensitive' } },
            ],
          }),
        })
      );
    });
  });

  describe('findOne', () => {
    it('should return a single torrent', async () => {
      const mockTorrent = {
        id: 1,
        name: 'Test Torrent',
        size: 1024,
        seeders: 10,
        leechers: 5,
        tags: 'movie,hd',
        uploaderId: 1,
        createdAt: new Date(),
      };

      jest.spyOn(prisma.torrent, 'findUnique').mockResolvedValue(mockTorrent);

      const result = await service.findOne(1);

      expect(result).toEqual(mockTorrent);
      expect(prisma.torrent.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw error for non-existent torrent', async () => {
      jest.spyOn(prisma.torrent, 'findUnique').mockResolvedValue(null);

      await expect(service.findOne(999)).rejects.toThrow('Torrent not found');
    });
  });

  describe('create', () => {
    it('should create a new torrent', async () => {
      const createTorrentDto = {
        name: 'New Torrent',
        size: 1024,
        tags: 'movie,hd',
        uploaderId: 1,
      };

      const mockTorrent = {
        id: 1,
        ...createTorrentDto,
        seeders: 0,
        leechers: 0,
        createdAt: new Date(),
      };

      jest.spyOn(prisma.torrent, 'create').mockResolvedValue(mockTorrent);

      const result = await service.create(createTorrentDto);

      expect(result).toEqual(mockTorrent);
      expect(prisma.torrent.create).toHaveBeenCalledWith({
        data: createTorrentDto,
      });
    });
  });
});
