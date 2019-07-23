import {CropType} from '../models/croptype';
import mongoose from 'mongoose';

interface CropTypeDocument extends CropType, mongoose.Document {}

const CropTypeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    lower: { type: Number, required: true, min: 0, max: 100},
    upper: { type: Number, required: true, min: 0, max: 100}
});

export const CropTypeModel = mongoose.model<CropTypeDocument>('CropTypeModel', CropTypeSchema, 'croptypes');