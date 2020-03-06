import { Connection, Repository } from 'typeorm';
import { Partner } from './partner.entity';

export const partnerProvider = [
  {
    provide: 'PARTNER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Partner),
    inject: ['DATABASE_CONNECTION'],
  },
];