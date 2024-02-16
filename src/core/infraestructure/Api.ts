import axios, {
  AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig
} from 'axios'
import { API_URL } from '../../toolbox/constants/Environments'

class Api {

  protected api: AxiosInstance

  public constructor(config?: AxiosRequestConfig) {
    this.api = axios.create(config)
  }

  protected get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.get(url, config)
  }

  protected post<T, P = unknown, R = AxiosResponse<T>>(
    url: string,
    params?: P,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.post(url, params, config)
  }

  protected patch<T, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.patch<T, R>(url, data, config)
  }
  protected put<T, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.api.put<T, R>(url, data, config)
  }

  protected delete<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.delete<T, R>(url, config)
  }

  protected success<T>(response: AxiosResponse<T>): T {
    return response.data
  }
}

export class PublicApi extends Api {
  private static instance: PublicApi

  public constructor(config?: AxiosRequestConfig) {
    super({
      ...config,
      baseURL: API_URL
    })

    this.api.interceptors.request.use(async (param: InternalAxiosRequestConfig) => {
      return {
        ...param,
        url: param.url
      }
    })
  }
}

