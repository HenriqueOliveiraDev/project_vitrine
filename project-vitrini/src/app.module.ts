import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartnerModule } from './partner/partner.module';
import { AddressPartnerModule } from './address-partner/address-partner.module';
import { SocialNetworkingModule } from './social-networking/social-networking.module';
import { CriptographyService } from './criptography/criptography.service';
import { CriptographyModule } from './criptography/criptography.module';

@Module({
  imports: [PartnerModule, AddressPartnerModule, SocialNetworkingModule, CriptographyModule],
  controllers: [AppController],
  providers: [AppService, CriptographyService],
})
export class AppModule {}
