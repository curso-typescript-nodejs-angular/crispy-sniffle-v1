import {Reading} from '../models/reading';
import {ReadingModel} from './readingModel';

export async function findAll(): Promise<Reading[]> {
    return ReadingModel.find().exec();
}

export async function findBySensor(sensor_uid: string): Promise<Reading[]> {
    const query = ReadingModel.where('sensor.id').equals(sensor_uid);
    return query.exec();
}

export async function save(reading: Reading): Promise<Reading> {
    return ReadingModel.create(reading);
}