import * as repository from '../persistence/croptypeRepository';
import * as db from '../util/inmemorybd';
import { CropTypeModel } from '../persistence/croptypeModel';
import { CropType } from '../models/croptype';

describe('Teste integração CropType repository', () => {
    beforeAll(async () => {
        db.startDB();
    });
    afterAll(async () => {
        db.stopDB();
    });
    test('findAll() deve retornar array vazio em BD vazio', async () => {
        const croptypes = await repository.findAll();
        expect(croptypes.length).toBe(0);
    });
    test('findAll() deve retornar um croptype em BD com um croptype', async () => {
        let croptype: CropType = {uid:'1', name:'teste', lower:50, upper:60};
        await CropTypeModel.create(croptype);
        const croptypes = await repository.findAll();
        expect(croptypes.length).toBe(1);
        expect(croptypes[0].name).toBe('teste');
        expect(croptypes[0].lower).toBe(50);
        expect(croptypes[0].upper).toBe(60);
    });
});