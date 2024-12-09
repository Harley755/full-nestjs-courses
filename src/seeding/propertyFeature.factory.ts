import { PropertyFeature } from '../entities/propertyFeature.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFeactureFactory = setSeederFactory(
  PropertyFeature,
  (faker) => {
    const feature = new PropertyFeature();

    feature.area = faker.number.int({ min: 20, max: 1400 });
    feature.bathrooms = faker.number.int({ min: 1, max: 3 });
    feature.bedrooms = faker.number.int({ min: 1, max: 3 });
    feature.parkingSpots = faker.number.int({ min: 1, max: 3 });
    feature.hasBalcony = faker.datatype.boolean();
    feature.hasGardenPool = faker.datatype.boolean();
    feature.hasSwimmingPool = faker.datatype.boolean();

    return feature;
  },
);
