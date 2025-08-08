import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../lib/prisma.service';

@Injectable()
export class TorrentsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: {
    query?: string;
    tags?: string[];
    sort?: string;
    page?: number;
    limit?: number;
  }) {
    const { query, tags, sort = 'newest', page = 1, limit = 20 } = params;
    const skip = (page - 1) * limit;

    const where: any = {};

    if (query) {
      where.name = {
        contains: query,
        mode: 'insensitive',
      };
    }

    if (tags && tags.length > 0) {
      where.tags = {
        hasSome: tags,
      };
    }

    const orderBy: any = {};
    switch (sort) {
      case 'newest':
        orderBy.createdAt = 'desc';
        break;
      case 'seeders':
        orderBy.seeders = 'desc';
        break;
      case 'size':
        orderBy.size = 'desc';
        break;
      default:
        orderBy.createdAt = 'desc';
    }

    const [torrents, total] = await Promise.all([
      this.prisma.torrent.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          uploader: {
            select: {
              id: true,
              username: true,
              email: true,
            },
          },
        },
      }),
      this.prisma.torrent.count({ where }),
    ]);

    return {
      torrents,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string) {
    const torrent = await this.prisma.torrent.findUnique({
      where: { id },
      include: {
        uploader: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    if (!torrent) {
      throw new NotFoundException('Torrent not found');
    }

    return torrent;
  }

  async getUserSnatches(userId: string) {
    return this.prisma.snatch.findMany({
      where: { userId },
      include: {
        torrent: {
          include: {
            uploader: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
      orderBy: { lastAnnounceAt: 'desc' },
    });
  }

  async getUserStats(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        snatches: {
          include: {
            torrent: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const ratio = user.downloaded > 0 ? Number(user.uploaded) / Number(user.downloaded) : 0;
    const seeding = user.snatches.filter(s => s.completed).length;
    const snatched = user.snatches.length;

    return {
      ratio,
      uploaded: Number(user.uploaded),
      downloaded: Number(user.downloaded),
      seeding,
      snatched,
    };
  }
}
