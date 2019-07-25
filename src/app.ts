import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import {router as croptypeRouter} from './routes/croptypeRoute';

const app = express();
app.set('port', process.env.PORT);
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production") {
    app.use(errorhandler());
}
app.use(croptypeRouter);

export default app;