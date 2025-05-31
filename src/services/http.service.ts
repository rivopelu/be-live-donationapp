import axios, { type AxiosRequestConfig } from 'axios';

export class HttpService {
  private baseUrl: string;
  private authorization: string;

  constructor(baseUrl: string, authorization: string) {
    this.baseUrl = baseUrl;
    this.authorization = authorization;
  }

  private HeaderSetting(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: this.authorization,
      },
    };
  }

  public GET(url: string) {
    return axios.get(this.baseUrl + url, this.HeaderSetting());
  }

  public POST<T>(URL: string, data: T) {
    return axios.post(this.baseUrl + URL, data, this.HeaderSetting());
  }

  public PUT<T>(URL: string, data: T) {
    return axios.put(this.baseUrl + URL, data, this.HeaderSetting());
  }

  public PATCH(URL: string) {
    return axios.patch(this.baseUrl + URL, undefined, this.HeaderSetting());
  }

  public DELETE(URL: string) {
    return axios.delete(this.baseUrl + URL, this.HeaderSetting());
  }
}
