import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsArray,
  IsUUID,
} from 'class-validator';
import { NegotiationType } from '@prisma/client';

export class CreateContactDto {
  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  neighborhood: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  cep: string;

  @IsEnum(NegotiationType)
  negotiation: NegotiationType;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  collectionIds?: string[];
}
