import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocialNetworking } from './social-networking.entity';
import { PartnerCreateDTO } from 'src/partner/DTO/partner-createDTO';

@Injectable()
export class SocialNetworkingService {
    constructor(
        @Inject('SOCIAL_NETWORKING_REPOSITORY')
        private readonly social_networking: Repository<SocialNetworking>
    ) { }

    getHelloWord(): String {
        return 'SocialNetworking on'
    }

    async create(partnerDTO: PartnerCreateDTO, id_partner): Promise<SocialNetworking> {

        const partner = new SocialNetworking;

        partner.vName = partnerDTO.name_networking;
        partner.link = partnerDTO.link;
        partner.id_partner = id_partner;

        return await this.social_networking.save(partner);
    }
}
