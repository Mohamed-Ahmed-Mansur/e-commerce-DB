/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { customerSchema } from './customers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name:"cutomers", schema: customerSchema}])
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
