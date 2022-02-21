import { Controller, Get, Body, Post, Put, Param, HttpException, HttpStatus } from "@nestjs/common";
import { CreateTaskDto, UpdateTaskDto } from "../dto/tasks.dto";
import { TaskService } from "./tasks.service";



@Controller('api/tasks')
export class TaskController{
    constructor(private taskService: TaskService){}



    @Get()
    getAll(){
        return this.taskService.findAll()
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId:string){
        console.log(taskId)
        const Task = this.taskService.findTask(taskId)


        return Task
    }

    @Post()
    createTask(@Body() body:CreateTaskDto){
        const newTask = this.taskService.createTask(body)
        return newTask
    }

    @Put(':taskId')
    updateTask(@Param('taskId') taskId, @Body() body:UpdateTaskDto){
        const updateTask = this.taskService.updateTask(taskId, body)
        return updateTask
    }













}