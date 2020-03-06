import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartnerModule } from './partner/partner.module';
import { AddressPartnerModule } from './address-partner/address-partner.module';
import { SocialNetworkingModule } from './social-networking/social-networking.module';

@Module({
  imports: [PartnerModule, AddressPartnerModule, SocialNetworkingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
