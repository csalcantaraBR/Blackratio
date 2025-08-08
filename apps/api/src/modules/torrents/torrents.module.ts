import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TorrentsController } from './torrents.controller';
import { TorrentsService } from './torrents.service';
import { PrismaService } from '../../lib/prisma.service';

@Module({
  imports: [JwtModule],
  controllers: [TorrentsController],
  providers: [TorrentsService, PrismaService],
  exports: [TorrentsService],
})
export class TorrentsModule {}
