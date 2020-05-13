import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { PartnerSignInDTO } from 'src/partner/DTO/partner-signinDTO';
import { Partner } from 'src/partner/partner.entity';
import { CriptographyService } from './criptography/criptography.service';
import { PartnerService } from 'src/partner/partner.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => PartnerService))
        private partnerService: PartnerService,
        private criptography: CriptographyService
    ){}

    async signIn(partnerSignIn: PartnerSignInDTO): Promise<string>{
        let partner = new Partner();
        let result;

        partner = await this.partnerService.findOneEmail(partnerSignIn.email);
         if(partner){
             const validPassword = await this.criptography.compare(partnerSignIn.password,partner.vPassword);
            if(validPassword){
                result = 'Logou';
            }else{
                result = 'invalid password';
            }
         }else{
             result = 'invalid email';
         }
         return result;
    }
}
