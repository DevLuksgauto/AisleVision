import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Contact } from '@prisma/client';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { FilterContactsDto } from './dto/filter-contacts.dto';
import { PaginationDto } from 'src/common/dto/paginaton.dto';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateContactDto): Promise<Contact> {
    const { collectionIds, ...contactData } = data;
    return this.prisma.contact.create({
      data: {
        ...contactData,
        collections: collectionIds?.length
          ? {
              connect: collectionIds.map((id) => ({ id })),
            }
          : undefined,
      },
    });
  }

  async findAll(query: FilterContactsDto & PaginationDto) {
    const { page = 1, limit = 10, ...filters } = query;
    const skip = (page - 1) * limit;

    return this.prisma.contact.findMany({
      where: {
        city: filters.city,
        state: filters.state,
        neighborhood: filters.neighborhood,
        code: filters.code,
        negotiation: filters.negotiation,
        name: filters.name
          ? { contains: filters.name, mode: 'insensitive' }
          : undefined,
        collections: filters.collectionId
          ? { some: { id: filters.collectionId } }
          : undefined,
      },
      skip,
      take: limit,
      orderBy: [{ city: 'asc' }, { neighborhood: 'asc' }, { name: 'asc' }],
    });
  }

  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });

    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    await this.findOne(id);

    const { collectionIds, ...contactData } = data;

    return this.prisma.contact.update({
      where: { id },
      data: {
        ...contactData,
        collections: collectionIds
          ? { set: collectionIds.map((id) => ({ id })) }
          : undefined,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const contact = await this.prisma.contact.findUnique({ where: { id } });

    if (!contact) {
      throw new NotFoundException('Contact not found');
    }

    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
