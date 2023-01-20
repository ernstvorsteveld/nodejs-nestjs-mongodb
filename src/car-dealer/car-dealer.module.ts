import { Module } from '@nestjs/common';
import { CarDealerService } from './car-dealer.service';
import { CarDealerController } from './car-dealer.controller';

@Module({
  providers: [CarDealerService],
  controllers: [CarDealerController]
})
export class CarDealerModule {}
