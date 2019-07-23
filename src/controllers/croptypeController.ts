import {Request, Response, NextFunction} from 'express';
import {CropType} from '../models/croptype';
import {findAll} from '../persistence/croptypeRepository';

export async function getCropTypes(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const croptypes = await findAll();
        res.json(croptypes);
    } catch (error) {
        next(error);
    }
}