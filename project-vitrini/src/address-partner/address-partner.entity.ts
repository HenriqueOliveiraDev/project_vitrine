import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Partner } from '../partner/partner.entity'

@Entity()
export class AddressPartner {
    @PrimaryGeneratedColumn()
    id_address: number;

    @Column()
    vCep: String;

    @Column()
    street: String;

    @Column({ default: true })
    state: String;

    @Column({ default: true })
    city: String;

    @Column({ default: true })
    vNumber: String;

    @Column({ default: true })
    complement: String;

    @Column({ default: true })
    vReference: String;

    @ManyToOne(type => Partner, partner => partner.id_partner)
    id_partner: Partner
}