import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controllers";
import { TaskSchema, Task } from "src/schemas/Tasks.Schema";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskService } from "./tasks.service";

@Module({
    imports:[MongooseModule.forFeature([{name: Task.name, schema:TaskSchema}])],
    controllers: [TaskController],
    providers: [TaskService]
})


export class TaskModule{}