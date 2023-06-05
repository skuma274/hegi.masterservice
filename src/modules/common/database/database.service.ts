import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { PinCode } from '../entities/pincode.entity';

@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}
  get typeOrmConfig(): DataSourceOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('db.postgres.host'),
      port: this.configService.get<number>('db.postgres.port'),
      username: this.configService.get<string>('db.postgres.username'),
      password: this.configService.get<string>('db.postgres.password'),
      database: this.configService.get<string>('db.postgres.name'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // entities:[PinCode],
      synchronize: true,
    };
  }
}
