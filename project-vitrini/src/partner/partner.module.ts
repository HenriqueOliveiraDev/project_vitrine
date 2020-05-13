import { Module, forwardRef } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { ConnectionModule } from '../connection/connection.module';
import { partnerProvider } from './partner.provider';
import { SocialNetworkingService } from 'src/partner/social-networking/social-networking.service';
import { AddressPartnerService } from './address-partner/address-partner.service';
import { addressPartnerProvider } from './address-partner/addres-partner.provider';
import { socialNetworkingProvider } from './social-networking/social-networking.provider';
import { AuthModule } from 'src/auth/auth.module';
import { CriptographyService } from 'src/auth/criptography/criptography.service';

@Module({
  providers: [
    PartnerService,
    ...partnerProvider,
    AddressPartnerService,
    ...addressPartnerProvider,
    SocialNetworkingService,
    ...socialNetworkingProvider,

  ],
  controllers: [PartnerController],
  exports: [PartnerService],
  imports: [ConnectionModule, forwardRef(() => AuthModule)],

})
export class PartnerModule { }
