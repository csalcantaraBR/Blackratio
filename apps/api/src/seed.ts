import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminPassword = await argon2.hash('admin');
  const admin = await prisma.user.upsert({
    where: { email: 'admin@blackratio.dev' },
    update: {},
    create: {
      email: 'admin@blackratio.dev',
      username: 'admin',
      passwordHash: adminPassword,
      passkey: 'admin123456789012345678901234567890',
      role: 'ADMIN',
      uploaded: BigInt(1024 * 1024 * 1024 * 100), // 100 GB
      downloaded: BigInt(1024 * 1024 * 1024 * 50), // 50 GB
    },
  });

  // Create regular users
  const user1Password = await argon2.hash('user1');
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@example.com' },
    update: {},
    create: {
      email: 'user1@example.com',
      username: 'user1',
      passwordHash: user1Password,
      passkey: 'user1123456789012345678901234567890',
      role: 'USER',
      uploaded: BigInt(1024 * 1024 * 1024 * 20), // 20 GB
      downloaded: BigInt(1024 * 1024 * 1024 * 15), // 15 GB
    },
  });

  const user2Password = await argon2.hash('user2');
  const user2 = await prisma.user.upsert({
    where: { email: 'user2@example.com' },
    update: {},
    create: {
      email: 'user2@example.com',
      username: 'user2',
      passwordHash: user2Password,
      passkey: 'user2123456789012345678901234567890',
      role: 'UPLOADER',
      uploaded: BigInt(1024 * 1024 * 1024 * 80), // 80 GB
      downloaded: BigInt(1024 * 1024 * 1024 * 30), // 30 GB
    },
  });

  // Create invite codes
  await prisma.invite.upsert({
    where: { code: 'WELCOME2024' },
    update: {},
    create: {
      code: 'WELCOME2024',
      inviterId: admin.id,
    },
  });

  await prisma.invite.upsert({
    where: { code: 'DEMO123' },
    update: {},
    create: {
      code: 'DEMO123',
      inviterId: admin.id,
    },
  });

  // Create sample torrents
  const torrents = [
    {
      name: 'The Matrix (1999) 4K HDR BluRay x265 10bit',
      size: BigInt(1024 * 1024 * 1024 * 25), // 25 GB
      isFreeleech: true,
      isVip: false,
      is4k: true,
      tags: 'Movies,Action,Sci-Fi',
      uploaderId: user2.id,
      infoHashV1: '1234567890123456789012345678901234567890',
    },
    {
      name: 'Breaking Bad S01 Complete 1080p BluRay x264',
      size: BigInt(1024 * 1024 * 1024 * 15), // 15 GB
      isFreeleech: false,
      isVip: true,
      is4k: false,
      tags: 'TV,Drama,Crime',
      uploaderId: user2.id,
      infoHashV1: '2345678901234567890123456789012345678901',
    },
    {
      name: 'Pink Floyd - The Dark Side of the Moon (1973) FLAC',
      size: BigInt(1024 * 1024 * 1024 * 2), // 2 GB
      isFreeleech: false,
      isVip: false,
      is4k: false,
      tags: 'Music,Rock,Progressive',
      uploaderId: user1.id,
      infoHashV1: '3456789012345678901234567890123456789012',
    },
    {
      name: 'Cyberpunk 2077 v2.0 Complete Edition',
      size: BigInt(1024 * 1024 * 1024 * 80), // 80 GB
      isFreeleech: true,
      isVip: false,
      is4k: false,
      tags: 'Games,RPG,Action',
      uploaderId: admin.id,
      infoHashV1: '4567890123456789012345678901234567890123',
    },
    {
      name: 'Inception (2010) 4K HDR BluRay x265 10bit',
      size: BigInt(1024 * 1024 * 1024 * 30), // 30 GB
      isFreeleech: false,
      isVip: true,
      is4k: true,
      tags: 'Movies,Thriller,Sci-Fi',
      uploaderId: user2.id,
      infoHashV1: '5678901234567890123456789012345678901234',
    },
    {
      name: 'Game of Thrones S08 Complete 1080p BluRay x264',
      size: BigInt(1024 * 1024 * 1024 * 45), // 45 GB
      isFreeleech: true,
      isVip: false,
      is4k: false,
      tags: 'TV,Drama,Fantasy',
      uploaderId: user2.id,
      infoHashV1: '6789012345678901234567890123456789012345',
    },
    {
      name: 'The Beatles - Abbey Road (1969) 24bit FLAC',
      size: BigInt(1024 * 1024 * 1024 * 1), // 1 GB
      isFreeleech: false,
      isVip: false,
      is4k: false,
      tags: 'Music,Rock,Classic',
      uploaderId: user1.id,
      infoHashV1: '7890123456789012345678901234567890123456',
    },
    {
      name: 'Red Dead Redemption 2 Complete Edition',
      size: BigInt(1024 * 1024 * 1024 * 120), // 120 GB
      isFreeleech: true,
      isVip: false,
      is4k: false,
      tags: 'Games,Action,Adventure',
      uploaderId: admin.id,
      infoHashV1: '8901234567890123456789012345678901234567',
    },
    {
      name: 'Interstellar (2014) 4K HDR BluRay x265 10bit',
      size: BigInt(1024 * 1024 * 1024 * 35), // 35 GB
      isFreeleech: false,
      isVip: true,
      is4k: true,
      tags: 'Movies,Drama,Sci-Fi',
      uploaderId: user2.id,
      infoHashV1: '9012345678901234567890123456789012345678',
    },
    {
      name: 'Stranger Things S04 Complete 1080p BluRay x264',
      size: BigInt(1024 * 1024 * 1024 * 25), // 25 GB
      isFreeleech: false,
      isVip: false,
      is4k: false,
      tags: 'TV,Drama,Horror',
      uploaderId: user1.id,
      infoHashV1: '0123456789012345678901234567890123456789',
    },
    {
      name: 'Daft Punk - Random Access Memories (2013) FLAC',
      size: BigInt(1024 * 1024 * 1024 * 3), // 3 GB
      isFreeleech: false,
      isVip: false,
      is4k: false,
      tags: 'Music,Electronic,Pop',
      uploaderId: user2.id,
      infoHashV1: '1234567890123456789012345678901234567890',
    },
    {
      name: 'Elden Ring Complete Edition',
      size: BigInt(1024 * 1024 * 1024 * 60), // 60 GB
      isFreeleech: true,
      isVip: false,
      is4k: false,
      tags: 'Games,Action,RPG',
      uploaderId: admin.id,
      infoHashV1: '2345678901234567890123456789012345678901',
    },
  ];

  for (const torrentData of torrents) {
    await prisma.torrent.upsert({
      where: { infoHashV1: torrentData.infoHashV1 },
      update: {},
      create: torrentData,
    });
  }

  // Create sample snatches
  const snatches = [
    {
      userId: user1.id,
      torrentId: (await prisma.torrent.findFirst({ where: { name: { contains: 'Matrix' } } }))!.id,
      uploaded: BigInt(1024 * 1024 * 1024 * 30), // 30 GB
      downloaded: BigInt(1024 * 1024 * 1024 * 25), // 25 GB
      completed: true,
      seedtimeSeconds: 86400, // 24 hours
    },
    {
      userId: user2.id,
      torrentId: (await prisma.torrent.findFirst({ where: { name: { contains: 'Breaking Bad' } } }))!.id,
      uploaded: BigInt(1024 * 1024 * 1024 * 20), // 20 GB
      downloaded: BigInt(1024 * 1024 * 1024 * 15), // 15 GB
      completed: true,
      seedtimeSeconds: 172800, // 48 hours
    },
  ];

  for (const snatchData of snatches) {
    await prisma.snatch.upsert({
      where: { userId_torrentId: { userId: snatchData.userId, torrentId: snatchData.torrentId } },
      update: {},
      create: snatchData,
    });
  }

  console.log('✅ Database seeded successfully!');
  console.log('\n📋 Demo Credentials:');
  console.log('Admin: admin@blackratio.dev / admin');
  console.log('User 1: user1@example.com / user1');
  console.log('User 2: user2@example.com / user2');
  console.log('\n🎫 Invite Codes:');
  console.log('WELCOME2024');
  console.log('DEMO123');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
