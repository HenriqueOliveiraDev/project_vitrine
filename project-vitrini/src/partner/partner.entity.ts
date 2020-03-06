import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Partner {
    @PrimaryGeneratedColumn()
    id_partner: number;

    @Column()
    vName: String;

    @Column()
    vType: String;

    @Column({ default: true })
    vDescription: String;

    @Column({ default: true })
    cpf: String;

    @Column({ default: true })
    cnpj: String;

    @Column({ default: true })
    company_name: String;

    @Column({ default: true })
    email: String;

    @Column({ default: true })
    vPassword: String;

    @Column({ default: true })
    site: String;

    @Column({ default: true })
    delivery: String;

    @Column({ default: true })
    key_connection: String;
}