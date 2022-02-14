import {Module} from '@nestjs/common'
import {UserController} from './users.controllers'
import { UserSchema, User } from 'src/schemas/Users.Schemas'
import { MongooseModule } from '@nestjs/mongoose'


@Module({
    imports:[MongooseModule.forFeature([{name:User.name, schema: UserSchema}])],
    controllers: [UserController]
})
export class UserModule{}