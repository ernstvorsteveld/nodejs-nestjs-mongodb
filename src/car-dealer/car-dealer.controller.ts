import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarDealerService } from './car-dealer.service';
import { CarModel } from './car/car.interface';

@Controller('car-dealer')
export class CarDealerController {
    constructor(private readonly carDealerService: CarDealerService) {
    }

    @Get()
    public findAll(): Array<CarModel> {
        return this.carDealerService.findAll();
    }

    @Get(':id')
    public find(@Param('id') id: string): CarModel {
        return this.carDealerService.findById(id);
    }

    @Post()
    public create(@Body() car: CarModel): CarModel {
        return this.carDealerService.create(car);
    }

    @Delete(':id')
    public delete(@Param('id') id: string): void {
        this.carDealerService.delete(id);
    }
}
