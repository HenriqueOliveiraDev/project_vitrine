import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Partner } from '../partner/partner.entity'

@Entity()
export class SocialNetworking {
    @PrimaryGeneratedColumn()
    id_social_networking: number;

    @Column()
    vName: String;

    @Column()
    link: String;

    @ManyToOne(type => Partner, partner => partner.id_partner)
    id_partner: Partner
}