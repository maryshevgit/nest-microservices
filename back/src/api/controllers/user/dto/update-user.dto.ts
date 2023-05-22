import { UpdateUserDto as IUpdateUserDto } from '@lib/user/application-services/commands/dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto implements IUpdateUserDto {
  @ApiPropertyOptional({ description: 'Username пользователя', type: 'string' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  username?: string;

  @ApiPropertyOptional({ description: 'Имя пользователя', type: 'string' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstname?: string;

  @ApiPropertyOptional({ description: 'Email пользователя', type: 'string' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  email?: string;
}
