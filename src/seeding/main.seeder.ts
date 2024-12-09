import { PropertyType } from '../entities/propertyType.entity';
import { User } from '../entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Property } from '../entities/property.entity';
import { faker } from '@faker-js/faker/.';
import { PropertyFeature } from '../entities/propertyFeature.entity';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const typeRepo = dataSource.getRepository(PropertyType);

    console.log('Seeding PropertyTypes...');

    const properyTypes = await typeRepo.save([
      { value: 'Condo' },
      { value: 'Appartment' },
    ]);

    const userFactory = factoryManager.get(User);

    console.log('Seeding Users...');
    const users = await userFactory.saveMany(10);

    console.log('Properties...');
    const propertyFactory = factoryManager.get(Property);
    const propertyFeactureFactory = factoryManager.get(PropertyFeature);
    const properties = await Promise.all(
      Array(50)
        .fill('')
        .map(async () => {
          const property = await propertyFactory.make({
            user: faker.helpers.arrayElement(users),
            type: faker.helpers.arrayElement(properyTypes),
            propertyFeacture: await propertyFeactureFactory.save(),
          });

          return property;
        }),
    );
    const propertyRepo = dataSource.getRepository(Property);
    await propertyRepo.save(properties);
  }
}
