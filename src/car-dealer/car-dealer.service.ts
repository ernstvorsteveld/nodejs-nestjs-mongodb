import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CarModel } from './car/car.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarDealerService {

    private cars: Array<CarModel> = [];

    public findAll(): Array<CarModel> {
        return this.cars;
    }

    public findById(id: string): CarModel {
        const car: CarModel = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException('Car not found.');
        }
        return car;
    }

    public create(car: CarModel): CarModel {
        // if the title is already in use by another post
        const brandModelExists: boolean = this.cars.some(
            (item) => { item.brand === car.brand && item.model === car.model }
        );

        if (brandModelExists) {
            throw new UnprocessableEntityException('Brand and model already exists.');
        }

        const carModel: CarModel = {
            ...car,
            id: uuidv4(),
        };

        this.cars.push(carModel);

        return carModel;
    }

    public delete(id: string): void {
        const index: number = this.cars.findIndex(car => car.id === id);
        if (index === -1) {
            throw new NotFoundException('Car not found.');
        }
        this.cars.splice(index, 1);
    }

}
