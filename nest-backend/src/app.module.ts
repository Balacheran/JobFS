import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [// Environment configuration
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env.local', '.env']
  }),

  // Database Configuration
  TypeOrmModule.forRoot({
    ...databaseConfig,
    autoLoadEntities: true,
  }),

  // Application Modules
  JobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
