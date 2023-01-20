import { Test, TestingModule } from '@nestjs/testing';
import { CarDealerService } from './car-dealer.service';

describe('CarDealerService', () => {
  let service: CarDealerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarDealerService],
    }).compile();

    service = module.get<CarDealerService>(CarDealerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
