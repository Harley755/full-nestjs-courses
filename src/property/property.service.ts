import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDo } from './dto/CreateProperty.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}

  async findOne(id: number) {
    return await this.propertyRepo.findOne({
      where: { id: id },
    });
  }
  async findAll() {}
  async create(dto: CreatePropertyDo) {
    return await this.propertyRepo.save(dto);
  }
  async update() {}
  async delete() {}
}
