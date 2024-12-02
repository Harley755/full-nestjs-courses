import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDo {
  @IsString()
  @Length(2, 10)
  name: string;

  @IsString()
  description: string;

  @IsInt()
  @IsPositive()
  price: number;
}
