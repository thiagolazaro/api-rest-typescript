import { Video } from "./Video";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("rooms")
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @OneToMany(() => Video, (video) => video.room)
  videos: Video[];
}
