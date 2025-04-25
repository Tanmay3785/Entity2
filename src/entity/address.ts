// src/entities/Address.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Zaka } from "./zaka";

@Entity()
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @ManyToOne(() => Zaka, (zaka) => zaka.addresses, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: Zaka;
}
