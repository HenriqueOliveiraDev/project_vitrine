import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartnerModule } from './partner/partner.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PartnerModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
