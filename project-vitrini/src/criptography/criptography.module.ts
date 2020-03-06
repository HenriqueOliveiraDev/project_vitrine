import { Module } from '@nestjs/common';
import { CriptographyService } from './criptography.service';

@Module({
    exports:[CriptographyService],
    providers:[CriptographyService]
})
export class CriptographyModule {}
