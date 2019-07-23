import {Sensor} from '../models/sensor';
import mongoose from 'mongoose';

interface SensorDocument extends Sensor, mongoose.Document {}

const SensorSchema = new mongoose.Schema({
    name: { type: String, required: true},
    crop: { type: mongoose.SchemaTypes.ObjectId, ref:'CropTypeModel', required: true},
    normal: { type: Boolean, required: true}
});

export const SensorModel = mongoose.model<SensorDocument>('SensorModel', SensorSchema, 'sensors');