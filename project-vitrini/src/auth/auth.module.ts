import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CriptographyService } from './criptography/criptography.service';
import { AuthService } from './auth.service';
import { PartnerModule } from 'src/partner/partner.module';

@Module({
  controllers: [AuthController],
  exports: [CriptographyService ,AuthService],
  providers:[
    AuthService,
    CriptographyService,
  ],
  imports: [
    forwardRef(() => PartnerModule)
  ]

})
export class AuthModule { }
