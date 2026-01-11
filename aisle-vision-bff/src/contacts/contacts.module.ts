import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContactsController } from './contacts.controller';

@Module({
  imports: [PrismaModule],
  providers: [ContactsService],
  exports: [ContactsService],
  controllers: [ContactsController],
})
export class ContactsModule {}
