import {CropType} from '../models/croptype';
import {CropTypeModel} from './croptypeModel';

export async function findAll(): Promise<CropType[]> {
    return CropTypeModel.find().exec();
}