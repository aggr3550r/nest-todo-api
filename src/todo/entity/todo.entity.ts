import { TaskEntity} from '../entity/task.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import {UserEntity } from '../../user/entity/user.entity';



@Entity('task')
export class TodoEntity{
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column({ type: 'varchar', nullable: false }) name: string;
    @Column({ type: 'text', nullable: true }) description?: string;
    @Column({type: 'boolean', nullable: false}) completed: boolean;
    @CreateDateColumn() createdOn?: Date;
    @CreateDateColumn() updatedOn?: Date;
  
    @ManyToOne(type => UserEntity)
    createdBy?: UserEntity;

    @OneToMany(tyoe => TaskEntity, task => task.todo)
    tasks?: TaskEntity[];

}
