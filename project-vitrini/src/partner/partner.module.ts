import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { ConnectionModule } from '../connection/connection.module';
import { partnerProvider } from './partner.provider';
import { SocialNetworkingService } from 'src/social-networking/social-networking.service';
import { SocialNetworkingController } from 'src/social-networking/social-networking.controller';
import { SocialNetworkingModule } from 'src/social-networking/social-networking.module';
import { AddressPartnerModule } from 'src/address-partner/address-partner.module';
import { CriptographyModule } from 'src/criptography/criptography.module';

@Module({
  providers: [
    PartnerService,
    ...partnerProvider,
  ],
  controllers: [PartnerController],
  exports: [PartnerService],
  imports: [ConnectionModule, SocialNetworkingModule, AddressPartnerModule, CriptographyModule],

})
export class PartnerModule { }
