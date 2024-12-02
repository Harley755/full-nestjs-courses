import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyDto } from './CreateProperty.dto';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {}
