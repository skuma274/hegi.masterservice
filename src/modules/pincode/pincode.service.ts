import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PinCode } from '../common/entities/pincode.entity';

@Injectable()
export class PinCodeService {
  constructor(@Inject('PINCODE_REPOSITORY') private pincodeRepository:Repository<PinCode>){}

  async list(): Promise<PinCode[]> {
    return await this.pincodeRepository.find();
  }

  async findByCode(code: string): Promise<PinCode> {
    return await this.pincodeRepository.findOneBy({code});
  }

}
