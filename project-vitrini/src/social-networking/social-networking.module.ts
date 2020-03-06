import { Module } from '@nestjs/common';
import { SocialNetworkingService } from './social-networking.service';
import { socialNetworkingProvider } from './social-networking.provider';
import { SocialNetworkingController } from './social-networking.controller';
import { ConnectionModule } from 'src/connection/connection.module';

@Module({
    providers: [
        SocialNetworkingService,
        ...socialNetworkingProvider
    ],
    controllers: [SocialNetworkingController],
    exports: [SocialNetworkingService],
    imports: [ConnectionModule],
})
export class SocialNetworkingModule { }
