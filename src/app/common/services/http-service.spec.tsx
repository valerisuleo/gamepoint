import { HttpService } from './http-service';
import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { NotFoundError } from '../errors/not-found-error';
import { AppError } from '../errors/app-error';

describe('HttpService', () => {
    const url = 'https://api.example.com/data';
    const mockHttp = axios.create();
    const mock = new MockAdapter(mockHttp);
    const httpService = new HttpService(url, mockHttp);

    afterEach(() => {
        mock.reset();
    });

    it('should make a GET request and return data', async () => {
        const endpoint = 'testEndpoint'; // Specify the endpoint you wish to test
        const responseData = { data: 'test data' };
        mock.onGet(`${url}/${endpoint}`).reply(200, responseData);

        const response = await httpService.get(endpoint);
        expect(response.data).toEqual(responseData);
    });


    it('should make a GET request with query params and return data', async () => {
        const endpoint = 'testEndpoint';
        const queryParams = { name: 'test' };  // Query parameters as an object
        const responseData = { data: 'test data' };
        mock.onGet(`${url}/${endpoint}`, { params: queryParams }).reply(200, responseData);

        const response = await httpService.get(endpoint, queryParams);
        expect(response.data).toEqual(responseData);
    });
    it('should make a PUT request and return data', async () => {
        const resource = { id: 1, key: 'value' };
        const responseData = { data: 'updated data' };
        mock.onPut(`${url}/${resource.id}`).reply(200, responseData);

        const response: AxiosResponse = await httpService.put(resource, 'id');
        expect(response.data).toEqual(responseData);
    });

    it('should make a DELETE request and return data', async () => {
        const resource = { id: 1, key: 'value' };
        const responseData = { data: 'deleted data' };
        mock.onDelete(`${url}/${resource.id}`).reply(200, responseData);

        const response: AxiosResponse = await httpService.delete(
            resource,
            'id'
        );
        expect(response.data).toEqual(responseData);
    });

    it('should throw a NotFoundError for a 404 error', async () => {
        mock.onGet(url).reply(404);

        try {
            await httpService.get();
        } catch (error) {
            expect(error).toBeInstanceOf(NotFoundError);
        }
    });

    it('should throw an AppError for other errors', async () => {
        mock.onGet(url).reply(500);

        try {
            await httpService.get();
        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
        }
    });
});
