import {
  Body,
  Controller,
  Post,
  Query,
  Get,
  Param,
  Patch,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { FilterContactsDto } from './dto/filter-contacts.dto';
import { PaginationDto } from 'src/common/dto/paginaton.dto';
import { Contact } from '@prisma/client';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // CREATE
  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.contactsService.create(dto);
  }

  // READ (list)
  @Get()
  findAll(
    @Query() query: FilterContactsDto & PaginationDto,
  ): Promise<Contact[]> {
    return this.contactsService.findAll(query);
  }

  // READ (by id)
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Contact> {
    return this.contactsService.findOne(id);
  }

  // UPDATE
  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateContactDto,
  ): Promise<Contact> {
    return this.contactsService.update(id, dto);
  }

  //DELETE
  @Delete(':id')
  async remove(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<{ message: string }> {
    await this.contactsService.remove(id);
    return { message: 'Contact removed Successfully' };
  }
}
