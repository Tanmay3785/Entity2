// src/entities/Zaka.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Address } from "./address";

@Entity()
export class Zaka {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Address, (address) => address.user, {})
  addresses: Address[];
}
