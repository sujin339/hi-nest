import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigModule } from './database/config/config.module';
import { MysqlConfigService } from './database/config/config.service';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [`.${process.env.NODE_ENV}.env`],
  }),
  TypeOrmModule.forRootAsync({
    imports: [MysqlConfigModule],
    useClass: MysqlConfigService,
    inject: [MysqlConfigService]
  }),
  MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
