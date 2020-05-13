import { Controller, Get, Post, Body, Res, Req, HttpStatus, ValidationPipe, Param } from '@nestjs/common';
import { PartnerService } from './partner.service'
import { AddressPartnerService } from 'src/partner/address-partner/address-partner.service';
import { SocialNetworkingService } from 'src/partner/social-networking/social-networking.service';
import { PartnerCreateDTO } from 'src/partner/DTO/partner-createDTO';
import { Response, json } from 'express';
import { Partner } from './partner.entity';
import { PartnerSignInDTO } from './DTO/partner-signinDTO';

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
    async create(@Body(new ValidationPipe({ transform: true })) partnerDTO: PartnerCreateDTO, @Res() res: Response) {

        try {
            const partner = this.partnerService.create(partnerDTO);
            this.socialNetService.create(partnerDTO, (await partner).id_partner);
            this.addressService.create(partnerDTO, (await partner).id_partner);

            res.status(200).json({ "message": "Created success" });

        } catch (err) {
            res.status(400).json({ "message": "Error create" })
        }
    }

    @Get(':id')
    async getPartnerId(@Param('id') id, @Res() res: Response) {
        try {
            let partner = new Partner();
            partner = await this.partnerService.getPartnerID(id)
            if (partner) {
                res.status(200).json(partner);
            } else {
                res.status(400).json({ "message": "Partner not found" });
            }
        } catch (err) {
            console.log(err);
        }
    }

    @Get('exists/:email')
    async getPartnerEmail(@Param('email') email, @Res() res: Response) {
        try {
            let partner = new Partner();
            partner = await this.partnerService.getPartnerEmail(email);
            if (partner) {
                res.status(200).json(partner);
            } else {
                res.status(400).json({ "message": "Partner not found" });
            }
        } catch (err) {
            console.log(err);
        }
    }
    @Post('sign-in')
    async signIn(@Body(new ValidationPipe({ transform: true })) partnerSignInDTO: PartnerSignInDTO, @Res() res: Response) {
        try{
            const result  = await this.partnerService.signIn(partnerSignInDTO);
            if(result){
                res.status(200).json({"message": result});
            }else{
                res.status(200).json({"message": "erro"});
            }

        }catch(err){
            console.log(err);
            
        }
    }
}
