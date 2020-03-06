import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AddressPartner } from './address-partner.entity'
import { PartnerCreateDTO } from 'src/DTO/partner-createDTO';

@Injectable()
export class AddressPartnerService {
    constructor(
        @Inject('ADDRESS_PARTNER_REPOSITORY')
        private readonly address_partner: Repository<AddressPartner>) { }

    getHelloWord(): String {
        return 'Address-on';
    }

    async create(partnerDTO: PartnerCreateDTO, id_partner): Promise<AddressPartner> {
        const address = new AddressPartner;

        address.vCep = partnerDTO.cep;
        address.street = partnerDTO.street;
        address.state = partnerDTO.state;
        address.city = partnerDTO.city;
        address.vNumber = partnerDTO.number;
        address.complement = partnerDTO.complement;
        address.vReference = partnerDTO.reference;
        address.id_partner = id_partner;

        return await this.address_partner.save(address);
   }
}
