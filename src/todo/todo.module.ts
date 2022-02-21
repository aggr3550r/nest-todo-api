import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controllers";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskService } from "./tasks.service";
import { Task } from "../entity/task.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Task])],
    controllers: [TaskController],
    providers: [TaskService]
})


export class TaskModule{}