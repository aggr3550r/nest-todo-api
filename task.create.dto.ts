import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    public readonly name: string; 

    @IsBoolean()
    public completed: boolean;

    public constructor(opts?: Partial<CreateTaskDto>) {
        Object.assign(this, opts);
      }
}