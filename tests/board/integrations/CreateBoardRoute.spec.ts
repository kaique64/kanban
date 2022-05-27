import supertest from 'supertest';

describe('Create Board Route - POST - /v1/board/create', () => {

    it('should be able to create a board', async () => {
        const response = await supertest('http://localhost:5000').post('/v1/board/create').send({
            name: 'To do',
        });

        expect(response.body.body).toHaveProperty('name', 'To do');
    });

    it('should be not able to create a board with non-existing name', async () => {
        const response = await supertest('http://localhost:5000').post('/v1/board/create').send({
            name: '',
        });

        expect(response.body).toHaveProperty('message', 'Validation failed');
        expect(response.body.validation.body).toHaveProperty('message', "\"name\" is not allowed to be empty");
    });

});