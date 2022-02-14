import { Controller, Get, Body, Post, Put, Param } from "@nestjs/common";




@Controller('task/api')
export class TaskController{

    @Get()
    getAll(){
        return "All the Tasks"
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId:string){
        console.log(taskId)
        return `This is the task for ${taskId}`
    }

    @Post()
    createTask(@Body() body){
        return `This is the body of a new tasks ${JSON.stringify(body)}`
    }

    @Put(':taskId')
    updateTask(@Param('taskId') taskId, @Body() body){
        return `This is the Updated task ${JSON.stringify(body)} for task id ${JSON.stringify(taskId)}`
    }













}