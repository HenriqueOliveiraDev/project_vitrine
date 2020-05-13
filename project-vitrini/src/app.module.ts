import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartnerModule } from './partner/partner.module';
import { CriptographyService } from './criptography/criptography.service';
import { CriptographyModule } from './criptography/criptography.module';

@Module({
  imports: [PartnerModule, CriptographyModule],
  controllers: [AppController],
  providers: [AppService, CriptographyService],
})
export class AppModule {}
