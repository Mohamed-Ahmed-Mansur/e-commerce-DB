/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './customer/roles.gurd';

@Module({
  imports: [
    CustomersModule, 
    ProductsModule, 
    OrdersModule, 
    MongooseModule.forRoot("mongodb://localhost:27017/Amazon"),
    JwtModule.register({secret:'secret', signOptions:{expiresIn:"7"}})
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide:APP_GUARD,
      useClass:RolesGuard
    }],
})
export class AppModule {}
