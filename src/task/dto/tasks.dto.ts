import {ApiProperty } from '@nestjs/swagger';



export class FindTaskResponseDto{
    @ApiProperty({
    })
    id: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    detail: string;
    @ApiProperty()
    priority: string;
    @ApiProperty()
    isCompleted: boolean;
    @ApiProperty()
    assignedTo: string;
    @ApiProperty()
    createdBy: string
    

}



export class CreateTaskDto{


    @ApiProperty({
        description: 'Title of the task to be done',
        required:true,

    })
    title: string;
    @ApiProperty({
        description: 'Details of the Task',
        required:false
    })
    detail?: string;
    @ApiProperty({
        description: 'Priority of the task to be done',
        required:false
    })
    priority?: string;
    @ApiProperty(
        {
            required:true,
            default:false,
            enum: ['Low', 'Medium', 'High', 'Urgent']
        }
    )
    isCompleted: boolean;
    @ApiProperty({
        description: "Assigned to someone in the DB that can perform the task",
        required:false
    })
    assignedTo?: string;
    @ApiProperty({
        description: "whoever addes the task to the task board",
         required: true
    })
    createdBy: string
    

}

export class UpdateTaskDto{
    

    @ApiProperty({
        description: 'Title of the task to be done',
        required:true,

    })
    title: string;
    @ApiProperty({
        description: 'Details of the Task',
        required:false
    })
    detail?: string;
    @ApiProperty({
        description: 'Priority of the task to be done',
        required:false
    })
    priority?: string;
    @ApiProperty(
        {
            required:true,
            default:false,
            enum: ['Low', 'Medium', 'High', 'Urgent']
        }
    )
    isCompleted: boolean;
    @ApiProperty({
        description: "Assigned to someone in the DB that can perform the task",
        required:false
    })
    assignedTo?: string;
    @ApiProperty({
        description: "whoever addes the task to the task board",
         required: true
    })
    createdBy: string
    

}