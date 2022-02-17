import { HttpStatus, Injectable,NotFoundException } from "@nestjs/common";
import { CreateTaskDto,
     UpdateTaskDto, 
    FindTaskResponseDto
 } from "./dto/tasks.dto";
import { InjectModel } from "@nestjs/mongoose";
import { TodoDocument, Task } from "src/schemas/Tasks.Schema";
import { Model } from "mongoose";

@Injectable()
export class TaskService{
    constructor(@InjectModel(Task.name) private taskModel: Model<TodoDocument>){}

    async findAll(): Promise<Task[]>{
     return await this.taskModel.find().exec()
    }
    
    async findTask(taskId:string){
        const Task = await this.taskModel.findById({_id: taskId}).exec();
        console.log(Task)
        if (! Task){
        
            throw new NotFoundException(` Task with id ${taskId} not found`)
        }
        return Task
    }

    async createTask(payload:CreateTaskDto):Promise<Task>{
        const createTask = new this.taskModel(payload);
        createTask.save()
        return createTask

    }

    async updateTask(taskId:string, payload:UpdateTaskDto){
        const updateTask = await this.taskModel.findOneAndUpdate(
            {_id: taskId}, {payload}, {new:true}
        )
        if (!updateTask){
            throw new NotFoundException(` update Task failed: Task with ${taskId}  Not Found `)
        }
        return updateTask

    }

}