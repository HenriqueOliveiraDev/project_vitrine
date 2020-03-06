import { Controller, Get, Post, Body, Res, Req } from '@nestjs/common';
import { PartnerService } from './partner.service'
import { AddressPartnerService } from 'src/address-partner/address-partner.service';
import { SocialNetworkingService } from 'src/social-networking/social-networking.service';
import { PartnerCreateDTO } from 'src/DTO/partner-createDTO';
import { Response } from 'express';

@Controller('partner')
export class PartnerController {
    constructor(
        private partnerService: PartnerService,
        private addressService: AddressPartnerService,
        private socialNetService: SocialNetworkingService,
    ) { }
    @Get()
    get(): String {
        return this.partnerService.getHelloWord();
    }

    @Post()
    async create(@Body() partnerDTO: PartnerCreateDTO, @Res() res: Response) {
        console.log('Partner');
        console.log(partnerDTO);
     
        try{
            const partner = this.partnerService.create(partnerDTO);            
            this.socialNetService.create(partnerDTO,(await partner).id_partner);
            this.addressService.create(partnerDTO, (await partner).id_partner); 

            res.send('Criado com sucesso');
        }catch(err){
            res.send('erro ao criar'); 
        }
    }

    @Get('get_partner:id')
    getPartnerId(){
        return 
    }
}
