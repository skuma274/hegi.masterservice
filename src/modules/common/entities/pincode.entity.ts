import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class PinCode extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({length:50})
  name: string;

  @Column({length:10,unique:true})
  code: string;

}
