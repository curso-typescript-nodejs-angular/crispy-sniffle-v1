import {Sensor} from '../models/sensor';
import {SensorModel} from './sensorModel';

export async function findAll(): Promise<Sensor[]> {
    return SensorModel.find().exec();
}

export async function findById(uid: string): Promise<Sensor|null> {
    return SensorModel.findById(uid).exec();
}
