import * as repository from '../persistence/croptypeRepository';
import * as controller from './croptypeController';
import * as httpmocks from 'node-mocks-http';
import { CropType } from '../models/croptype';

describe('Teste unitário CropType controller', () => {
    describe('getCropTypes()', () => {
        test('deve retornar status 200 OK, JSON, corpo array vazio', async () => {
            const req = httpmocks.createRequest({
                method: 'GET',
                url: '/croptypes'
            });
            const res = httpmocks.createResponse();
            const findAllMock = jest.spyOn(repository, 'findAll');
            findAllMock.mockImplementationOnce(async () => []);
            await controller.getCropTypes(req,res,{} as any);
            expect(findAllMock).toHaveBeenCalled();
            expect(res._isJSON()).toBe(true);
            expect(res.statusCode).toBe(200);
            expect(res._getJSONData().length).toBe(0);
        });
        test('deve retornar status 200 OK, JSON, corpo objeto croptype', async () => {
            const req = httpmocks.createRequest({
                method: 'GET',
                url: '/croptypes'
            });
            const res = httpmocks.createResponse();
            let croptype: CropType = {uid:'1', name:'teste', lower:50, upper:60};
            const findAllMock = jest.spyOn(repository, 'findAll');
            findAllMock.mockImplementationOnce(async () => [croptype]);
            await controller.getCropTypes(req,res,{} as any);
            expect(findAllMock).toHaveBeenCalled();
            expect(res._isJSON()).toBe(true);
            expect(res.statusCode).toBe(200);
            expect(res._getJSONData().length).toBe(1);
            expect(res._getJSONData()[0].name).toBe('teste');
            expect(res._getJSONData()[0].lower).toBe(50);
            expect(res._getJSONData()[0].upper).toBe(60);
        });
    });
});