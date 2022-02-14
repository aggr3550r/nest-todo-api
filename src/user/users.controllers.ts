import { Get, Post, Param, Controller, Body } from "@nestjs/common";



@Controller('api/auth')
export class UserController{
    

    @Get()
    getUsers(){
        return `returns all the users`
    }

    @Get(':username')
    getuser(@Param('username') username:string){


        return `This is the return page for the user with username ${JSON.stringify(username)}`
    }


    @Post()
    createUser(@Body() body){
        return `A new user with details ${JSON.stringify(body)}`
    }
}