import { Room } from "./Room";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("videos")
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  url: string;

  @ManyToMany(() => Room, (room) => room.videos)
  @JoinColumn({ name: "room_id" })
  room: Room;
}
