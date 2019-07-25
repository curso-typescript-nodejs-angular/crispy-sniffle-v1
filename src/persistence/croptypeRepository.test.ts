import * as repository from './croptypeRepository';
import { CropTypeModel } from './croptypeModel';
import mockingoose from 'mockingoose';

describe('Teste unitário CropType repository', () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks();
    });
    test('findAll() deve retornar array vazio em BD vazio', async () => {
        mockingoose(CropTypeModel).toReturn([], 'find');
        const croptypes = await repository.findAll();
        expect(croptypes.length).toBe(0);
    });
    test('findAll() deve retornar um croptype em BD com um croptype', async () => {
        const croptype = {_id:'507f191e810c19729de860ea', name:'teste', lower:50, upper:60};
        mockingoose(CropTypeModel).toReturn([croptype], 'find');
        const croptypes = await repository.findAll();
        expect(croptypes.length).toBe(1);
        expect(croptypes[0].name).toBe('teste');
        expect(croptypes[0].lower).toBe(50);
        expect(croptypes[0].upper).toBe(60);
    });
});