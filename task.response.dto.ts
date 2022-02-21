import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class FindTaskResponseDto{
    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    public description: string;
    @IsBoolean()
    public completed: boolean;

    public constructor(opts?: Partial<FindTaskResponseDto>) {
        Object.assign(this, opts);
      }
}