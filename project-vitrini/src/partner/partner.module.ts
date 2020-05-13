import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { ConnectionModule } from '../connection/connection.module';
import { partnerProvider } from './partner.provider';
import { SocialNetworkingService } from 'src/partner/social-networking/social-networking.service';
import { CriptographyModule } from 'src/criptography/criptography.module';
import { AddressPartnerService } from './address-partner/address-partner.service';
import { addressPartnerProvider } from './address-partner/addres-partner.provider';
import { socialNetworkingProvider } from './social-networking/social-networking.provider';

@Module({
  providers: [
    PartnerService,
    ...partnerProvider,
    AddressPartnerService,
    ...addressPartnerProvider,
    SocialNetworkingService,
    ...socialNetworkingProvider
  ],
  controllers: [PartnerController],
  exports: [PartnerService],
  imports: [ConnectionModule, CriptographyModule],

})
export class PartnerModule { }
