import { Connection, Repository } from 'typeorm';
import { SocialNetworking } from './social-networking.entity';

export const socialNetworkingProvider = [
  {
    provide: 'SOCIAL_NETWORKING_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(SocialNetworking),
    inject: ['DATABASE_CONNECTION'],
  },
];