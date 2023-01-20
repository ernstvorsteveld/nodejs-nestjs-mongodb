import { Test, TestingModule } from '@nestjs/testing';
import { CarDealerController } from './car-dealer.controller';

describe('CarDealerController', () => {
  let controller: CarDealerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarDealerController],
    }).compile();

    controller = module.get<CarDealerController>(CarDealerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
