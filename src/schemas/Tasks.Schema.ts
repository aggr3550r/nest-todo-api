import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { SchemaTypes, Document } from 'mongoose'
import {User } from './Users.Schemas';

export type TodoDocument = Task & Document;


@Schema({timestamps: true})
export class Task{
    @Prop({required:true})
    title: string;

    @Prop()
    detail?: string;

    @Prop()
    priority?: string

    @Prop({required: true, default:false})
    isCompleted: boolean;

    @Prop({type: SchemaTypes.ObjectId, ref:"User"})
    assignedTo?: User

    @Prop({type: SchemaTypes.ObjectId, ref:"User", required: true})
    createdBy: User


}


export const TaskSchema = SchemaFactory.createForClass(Task)