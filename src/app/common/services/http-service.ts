/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosResponse, Axios } from 'axios';
import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';
import { toast } from 'react-toastify';

export class HttpService {
    constructor(private url: string, private http: Axios) {
        this.errorsIntereptor();
    }

    // _________________________________CRUD_____________________________

    public get(
        endpoint: string,
        params?: Record<string, any>
    ): Promise<AxiosResponse> {
        // The params object is directly passed to Axios.
        return this.http.get(`${this.url}/${endpoint}`, {
            params,
        });
    }

    public post(payload: any): Promise<AxiosResponse> {
        return this.http.post(this.url, payload);
    }

    public put(resource: any, key: string): Promise<AxiosResponse> {
        return this.http.put(`${this.url}/${resource[key]}`, resource);
    }

    public delete(resource: any, key: string): Promise<AxiosResponse> {
        return this.http.delete(`${this.url}/${resource[key]}`);
    }

    // __________________________HANDLING ERRORS__________________________
    private errorsIntereptor(): void {
        this.http.interceptors.response.use(null, (error: AxiosError) => {
            if (!error.response) {
                toast.error(error.message, {
                    toastId: 'network-error',
                });
                return Promise.reject(new AppError(error));
            }

            const { status } = error.response;

            const expectedError = status >= 400 && status < 500;
            if (!expectedError) {
                toast.error('Oops...unexpected server error!');
                return Promise.reject(new AppError(error));
            } else {
                toast.error(error.message);
                throw this.handleError(error);
            }
        });
    }

    private handleError(error: AxiosError): AppError {
        if (error.response?.status === 404) {
            return new NotFoundError(error);
        } else {
            return new AppError(error);
        }
    }
}
