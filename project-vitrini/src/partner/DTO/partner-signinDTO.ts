import { IsNotEmpty } from "class-validator";

export class PartnerSignInDTO{
    @IsNotEmpty()
    email:string;
    
    @IsNotEmpty()
    password: string;
}