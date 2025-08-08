import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TorrentsModule } from './torrents/torrents.module';
import { PrismaService } from '../lib/prisma.service';

@Module({
  imports: [AuthModule, UsersModule, TorrentsModule],
  providers: [PrismaService],
})
export class AppModule {}
