import {Reading} from '../models/reading';
import mongoose from 'mongoose';

interface ReadingDocument extends Reading, mongoose.Document {}

const ReadingSchema = new mongoose.Schema({
    sensor: { type: mongoose.SchemaTypes.ObjectId, ref:'SensorModel', required: true},
    humidity: { type: Number, required: true},
    creationDateTime: { type: Date, required: true}
});

export const ReadingModel = mongoose.model<ReadingDocument>('ReadingModel', ReadingSchema, 'readings');