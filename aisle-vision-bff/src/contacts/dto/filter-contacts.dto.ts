import { IsEnum, IsOptional, IsString } from 'class-validator';
import { NegotiationType } from '@prisma/client';

export class FilterContactsDto {
  // Região
  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  neighborhood?: string;

  // Identificação
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  code?: string;

  // Negociação
  @IsOptional()
  @IsEnum(NegotiationType)
  negotiation?: NegotiationType;

  // Relações
  @IsOptional()
  @IsString()
  collectionId?: string;
}
