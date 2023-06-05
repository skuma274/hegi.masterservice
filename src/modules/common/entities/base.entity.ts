import { Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


export abstract class BaseEntity {

    @Column({length:50, nullable: true })
    created_by: string;

    @Column({ nullable: true })
    created_datetime: Date;

    @Column({ length:50, nullable: true })
    updated_by: string;

    @Column({ nullable: true })
    updated_datetime: Date;

    @Column({ nullable: true })
    effective_date: Date;

    @Column({ nullable: true })
    expired_date: Date;

    @Column({ nullable: false, default:true })
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}