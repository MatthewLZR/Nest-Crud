import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

 
  @Column()
  title: string;

 
  @Column()
  genre: string;

  @Column('text')
  description: string;


  @Column()
  image_url: string;

 
 /* @Column()
  date: Date;*/



}
