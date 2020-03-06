import { Controller, Get } from '@nestjs/common';
import { AddressPartnerService } from './address-partner.service';

@Controller('address-partner')
export class AddressPartnerController {
    constructor(private addressPartner: AddressPartnerService){}

    @Get()
    getHelloWord():String{
        return this.addressPartner.getHelloWord();
    }
}
