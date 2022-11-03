import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { join } from "path";




@Injectable()
export class MysqlConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}
    
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        console.log(join(__dirname + "/../../entities/*.entity.(ts,js)"));
        
        return {
            type: "mysql",
            host: this.configService.get<string>("DB_HOST"),
            port: +this.configService.get<number>("DB_PORT"),
            username: this.configService.get<string>("DB_USER"),
            password: this.configService.get<string>("DB_PASSWORD"),
            database: this.configService.get<string>("DB_SCHEMA"),
            // entities: [join(__dirname + `/../../entities/*.entity.*`)],
            // entities: [join(__dirname + `/../../entities/*.entity.*`)],
            entities: [join(__dirname + `/../../movies/entites/*.entity.*`)],
            synchronize: false,
        }
    }
}