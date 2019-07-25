import {Router} from 'express';
import * as controller from '../controllers/croptypeController';

export const router = Router();
export const path = '/croptypes';

router.get(`${path}`, controller.getCropTypes);