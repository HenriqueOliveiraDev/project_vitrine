import { Module } from '@nestjs/common';
import { AddressPartnerController } from './address-partner.controller';
import { AddressPartnerService } from './address-partner.service';
import { addressPartnerProvider } from './addres-partner.provider';
import { ConnectionModule } from '../connection/connection.module'

@Module({
  providers: [
    AddressPartnerService,
    ...addressPartnerProvider
  ],
  controllers: [AddressPartnerController],
  exports: [AddressPartnerService],
  imports: [ConnectionModule],
})
export class AddressPartnerModule { }
