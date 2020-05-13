import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm'
import { Partner } from './partner.entity'
import { PartnerCreateDTO } from 'src/partner/DTO/partner-createDTO';
import { CriptographyService } from '../auth/criptography/criptography.service'
import { PartnerSignInDTO } from './DTO/partner-signinDTO';

@Injectable()
export class PartnerService {
    constructor(
        @Inject('PARTNER_REPOSITORY')
        @Inject(forwardRef(() => PartnerService))
        private readonly partner: Repository<Partner>,
        private criptography: CriptographyService) { }
    getHelloWord(): String {
        return 'Partner On'
    }

    async create(partnerDTO: PartnerCreateDTO): Promise<Partner> {

        const partner = new Partner();
        const password = this.criptography.genPassword(partnerDTO.password);

        partner.vName = partnerDTO.name;
        partner.vType = partnerDTO.type;
        partner.vDescription = partnerDTO.description;
        partner.cpf = partnerDTO.cpf;
        partner.cnpj = partnerDTO.cnpj;
        partner.company_name = partnerDTO.company_name;
        partner.email = partnerDTO.email;
        partner.vPassword = await password;
        partner.delivery = partnerDTO.delivery;
        partner.site = partnerDTO.site;
        partner.key_connection = partnerDTO.key;

        return await this.partner.save(partner);
    }

    async findOneID(id_partner: number): Promise<Partner> {
        return this.partner.findOne(id_partner);
    }

    async findOneEmail(email: string): Promise<Partner>{
        return this.partner.findOne({email:email});
    }

}
