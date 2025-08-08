import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('torrents')
export class Torrent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  infohashV1: string;

  @Column({ nullable: true })
  infohashV2?: string;

  @Column()
  name: string;

  @Column({ type: 'bigint' })
  size: string;

  @Column({ default: true })
  isPrivate: boolean;

  @Column({ default: false })
  freeleech: boolean;

  @ManyToOne(() => User, { nullable: true })
  uploader?: User;

  @CreateDateColumn()
  createdAt: Date;
}
