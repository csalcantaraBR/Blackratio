import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Torrent } from './torrent.entity';

@Entity('snatches')
export class Snatch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Torrent)
  torrent: Torrent;

  @Column({ type: 'bigint', default: 0 })
  up: string;

  @Column({ type: 'bigint', default: 0 })
  down: string;

  @Column({ default: false })
  completed: boolean;

  @Column({ type: 'int', default: 0 })
  seedtimeSeconds: number;

  @UpdateDateColumn()
  lastAnnounceAt: Date;
}
