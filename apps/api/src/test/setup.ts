import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaService } from '../lib/prisma.service';

export async function createTestingApp(): Promise<INestApplication> {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [],
  }).compile();

  const app = moduleFixture.createNestApplication();
  await app.init();
  return app;
}

export async function createTestingModule(imports: any[] = []): Promise<TestingModule> {
  return await Test.createTestingModule({
    imports,
  }).compile();
}

export async function cleanupDatabase(prisma: PrismaService): Promise<void> {
  await prisma.snatch.deleteMany();
  await prisma.torrent.deleteMany();
  await prisma.user.deleteMany();
  await prisma.invite.deleteMany();
}
