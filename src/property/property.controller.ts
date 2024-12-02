import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDo } from './dto/CreateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id);
  }

  @Post()
  create(@Body() body: CreatePropertyDo) {
    return this.propertyService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id, @Body() body) {
    return this.propertyService.update();
  }
}
