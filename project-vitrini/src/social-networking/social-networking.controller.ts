import { Controller, Get } from '@nestjs/common';
import { SocialNetworkingService } from './social-networking.service';
import { SocialNetworking } from './social-networking.entity';

@Controller('social-networking')
export class SocialNetworkingController {
    constructor(private socialNetworking: SocialNetworkingService){}

    @Get()
    getHelloWord():String{
        return this.socialNetworking.getHelloWord();
    }
}
