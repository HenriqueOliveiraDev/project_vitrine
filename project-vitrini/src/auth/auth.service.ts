import { Injectable, Inject, forwardRef, UnauthorizedException } from '@nestjs/common';
import { PartnerSignInDTO } from 'src/partner/DTO/partner-signinDTO';
import { Partner } from 'src/partner/partner.entity';
import { CriptographyService } from './criptography/criptography.service';
import { PartnerService } from 'src/partner/partner.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => PartnerService))
        private partnerService: PartnerService,
        private criptography: CriptographyService,
        private jwtService: JwtService
    ){}

    async signIn(partnerSignIn: PartnerSignInDTO): Promise<string>{
        let partner = new Partner();
        let result;

        partner = await this.partnerService.findOneEmail(partnerSignIn.email);
         if(partner){
             const validPassword = await this.criptography.compare(partnerSignIn.password,partner.vPassword);
            if(validPassword){
                const payload = { email: partner.email, sub: partner.id_partner};
        result = {
            access_token: this.jwtService.sign(payload),
        };
                
            }else{
                result = 'invalid password';
            }
         }else{
             result = 'invalid email';
         }
         return result;
    }

    async validateUser(email: string, password: string): Promise<any>{
        const user = await this.partnerService.findOneEmail(email);
        if(user && user.vPassword === password) {
            const { vPassword, ...result} = user;
            return user;
        }
        return null;
    }
}
