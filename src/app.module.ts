import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [TypeOrmModule.forRoot(pgConfig), PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
