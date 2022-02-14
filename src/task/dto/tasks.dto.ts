


export class FindTaskResponseDto{
    id: string;
    title: string;
    detail: string;
    priority: string;
    isCompleted: boolean;
    assignedTo: string;
    createdBy: string
    

}



export class CreateTaskDto{

    title: string;
    detail?: string;
    priority?: string;
    isCompleted: boolean;
    assignedTo?: string;
    createdBy: string
    

}

export class UpdateTaskResponseDto{
    
    title: string;
    detail?: string;
    priority?: string;
    isCompleted: boolean;
    assignedTo?: string;
    createdBy: string
    

}