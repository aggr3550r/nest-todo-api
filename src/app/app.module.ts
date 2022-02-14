import { Module } from '@nestjs/common';
import { TaskModule } from 'src/task/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config'
import { UserModule } from 'src/user/users.module';



@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env._UserName}:${process.env.Password}@cluster0.yxflz.mongodb.net/TaskDB?retryWrites=true&w=majority`),
  TaskModule, UserModule],
  

})
export class AppModule {}
// console.log(`mongodb+srv://${process.env._UserName}:${process.env.Password}@cluster0.yxflz.mongodb.net/TaskDB?retryWrites=true&w=majority`)
