import request from 'supertest';
import app from '../app';
import * as db from '../util/inmemorybd';
import { CropType } from '../models/croptype';
import { CropTypeModel } from '../persistence/croptypeModel';

describe('Teste integração CropType route', () => {
    beforeAll(async () => {
        db.startDB();
    });
    afterAll(async () => {
        db.stopDB();
    });
    describe('GET /croptypes', () => {
        test('deve retornar status 200 OK, JSON, corpo array vazio', () => {
            return request(app).get('/croptypes')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect([]);
        });
        test('deve retornar status 200 OK, JSON, corpo objeto croptype', async () => {
            let croptype: CropType = {uid:'1', name:'teste', lower:50, upper:60};
            await CropTypeModel.create(croptype);
            let response = await request(app).get('/croptypes').expect(200).expect('Content-Type', /json/);
            expect(response.body.length).toBe(1);
            expect(response.body[0].name).toBe('teste');
            expect(response.body[0].lower).toBe(50);
            expect(response.body[0].upper).toBe(60);
        });
    });
});