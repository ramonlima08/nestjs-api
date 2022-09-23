import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: false,  //primeira vez rodar com TRUE, depois colocar false
      models: [Order],
    }),
    OrdersModule,
  ], //registrar outros módulos
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
