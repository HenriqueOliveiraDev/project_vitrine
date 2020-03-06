import { validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsEnum, IsNotEmpty, MinLength, IsNumber, MaxLength, IsUrl, IsString } from "class-validator";
export class PartnerCreateDTO {

    @IsNotEmpty()
    name: String;

    @IsNotEmpty()
    @IsEnum(['A', 'B', 'C'],
        { message: 'Type data error  select A || B || C' })
    type: String;

    @MaxLength(2048)
    description: String;

    @MinLength(11)
    @MaxLength(11)
    @IsNotEmpty()
    cpf: String;

    @MinLength(14)
    @MaxLength(14)
    cnpj: String;

    @IsNotEmpty()
    company_name: String;

    @IsNotEmpty()
    @IsEmail()
    email: String;

    @IsNotEmpty()
    @MinLength(6)
    password: String;

    @IsUrl()
    site: String;

    @IsNotEmpty()
    @IsEnum(['OWN', 'NOT OWN'],
        { message: 'Type data error select OWN || NOT OWN' })
    delivery: String;

    @IsString()
    key: String;

    @IsNotEmpty()
    cep: String;

    @IsNotEmpty()
    street: String;

    @IsNotEmpty()
    state: String;

    @IsNotEmpty()
    city: String;

    @IsNumber()
    @IsNotEmpty()
    number: String;

    @MaxLength(64)
    complement: String;

    @MaxLength(64)
    reference: String;

    @IsEnum(['Facebook', 'Instagram', 'Twitter'],
        { message: 'Type data error select Facebook || Instagram || Twitter ' })
    name_networking: String;

    @IsUrl()
    link: String;
}