import { Module } from '@nestjs/common';
import { PinCodeController } from './pincode.controller';
import { PinCodeService } from './pincode.service';
import { DatabaseModule } from '../common/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PinCode } from '../common/entities/pincode.entity';
import { DataSource } from 'typeorm';
import { TYPEORM } from 'src/constants';

@Module({
  imports: [DatabaseModule],
  controllers: [PinCodeController],
  providers: [PinCodeService, {
    provide: 'PINCODE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PinCode),
    inject: [TYPEORM],
  }],
  exports: [PinCodeService],
})
export class PinCodeModule {}
