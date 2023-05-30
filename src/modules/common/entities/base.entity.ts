import { Column, DataType, Model } from 'sequelize-typescript';

export class BaseModel<M> extends Model<M> {
  @Column({ type: DataType.STRING(50), allowNull: true })
  created_by: string;

  @Column({ type: DataType.DATE(6), allowNull: true })
  created_datetime: Date;

  @Column({ type: DataType.STRING(50), allowNull: true })
  updated_by: string;

  @Column({ type: DataType.DATE(6), allowNull: true })
  updated_datetime: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  effective_date: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  expired_date: Date;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  is_active: boolean;
}
