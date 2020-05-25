import axios, { AxiosRequestConfig } from 'axios';

export async function HttpProvider<T>({
    base = 'https://jsonplaceholder.typicode.com',
    url,
    data,
    params,
    method = 'GET',
}: {
    base?: string;
    url: string;
    data?: any;
    params?: any;
    method?: HttpMethod;
}): Promise<T> {
    const fullUrl = url.startsWith('/') ? `${base}${url}` : `${base}/${url}`;
    const config: AxiosRequestConfig = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${getAccessToken()}`,
            // ClientType: "Web",
        },
    };
    if (params) {
        config.params = params;
    }
    if (data) {
        config.data = data;
    }
    try {
        return (await axios(fullUrl, config)).data;
    } catch (error) {
        console.log(`Failed response for ${url}: ${error}`);
        throw error;
    }
}

export const FetchResultType = {
    ServerError: 'server_error',
    FetchError: 'fetch_error',
    Success: 'success',
};

export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';
