import 'dotenv/config';
import { DataSource } from 'typeorm';
import { ormConfig } from '../apps/api/src/orm.config';
import { User } from '../apps/api/src/modules/users/user.entity';
import { Torrent } from '../apps/api/src/modules/torrents/torrent.entity';

async function run() {
  const ds = new DataSource(ormConfig as any);
  await ds.initialize();
  const users = ds.getRepository(User);
  const torrents = ds.getRepository(Torrent);

  // admin
  const admin = users.create({
    email: 'admin@blackratio.dev',
    passwordHash: 'admin', // demo only
    passkey: 'PASSKEYADMIN123',
    role: 'admin',
  });
  await users.save(admin);

  const demoUser = users.create({
    email: 'user@blackratio.dev',
    passwordHash: 'user',
    passkey: 'PASSKEYUSER456',
    role: 'member',
  });
  await users.save(demoUser);

  // torrents demo
  for (let i = 1; i <= 5; i++) {
    const t = torrents.create({
      infohashV1: ('demo_infohash_' + i).padEnd(40, '0').slice(0,40),
      name: `Example.Torrent.${i}`,
      size: String(1024 * 1024 * i),
      freeleech: i % 2 === 0,
      isPrivate: true,
    });
    await torrents.save(t);
  }

  console.log('Seed completed.');
  await ds.destroy();
}
run().catch((e) => { console.error(e); process.exit(1); });
