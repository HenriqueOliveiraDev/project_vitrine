import { Connection, Repository } from 'typeorm';
import { AddressPartner } from './address-partner.entity';

export const addressPartnerProvider = [
  {
    provide: 'ADDRESS_PARTNER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(AddressPartner),
    inject: ['DATABASE_CONNECTION'],
  },
];