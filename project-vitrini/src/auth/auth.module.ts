import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CriptographyService } from './criptography/criptography.service';
import { AuthService } from './auth.service';
import { PartnerModule } from 'src/partner/partner.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  exports: [CriptographyService, AuthService],
  providers: [
    AuthService,
    CriptographyService,
    LocalStrategy,
    JwtStrategy,

  ],
  imports: [
    forwardRef(() => PartnerModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],

})
export class AuthModule { }
