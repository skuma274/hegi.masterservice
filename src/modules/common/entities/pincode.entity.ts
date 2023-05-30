import { Table, Column, DataType } from 'sequelize-typescript';
import { BaseModel } from './base.entity';

@Table
export class PinCode extends BaseModel<PinCode> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  code: string;
}
