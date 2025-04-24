import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Zaka {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
}
