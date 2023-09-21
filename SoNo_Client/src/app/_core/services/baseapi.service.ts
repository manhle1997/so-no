import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://localhost:7215/', // Thay đổi URL theo API của bạn
      timeout: 5000, // Thời gian timeout cho mỗi yêu cầu
    });
   }
  public async get<T>(url: string, config?: AxiosRequestConfig) : Promise<T> {
    try {
      const res = await this.axiosInstance.get<T>(url, config);
      return res.data;
    } catch (error) {
      throw error;
    }   
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig) : AxiosPromise<T> {
    return this.axiosInstance.post<T>(url, data, config);
  }
}
 