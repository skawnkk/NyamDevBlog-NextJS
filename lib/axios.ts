import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class Axios {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      paramsSerializer: (paramObj) => {
        const params = new URLSearchParams();
        for (const key in paramObj) {
          if (paramObj[key]) params.append(key, paramObj[key]);
        }
        return params.toString();
      },
    });
  }

  getInstance() {
    return this.axiosInstance;
  }

  getAuthorization() {
    return this.axiosInstance.defaults.headers.common.Authorization;
  }

  setAuthorization(jwt: string) {
    this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  }

  deleteAuthorization() {
    delete this.axiosInstance.defaults.headers.common.Authorization;
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get<T>(url, config);
  }

  post<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.axiosInstance.post<T>(url, data, config);
  }

  put<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.axiosInstance.put<T>(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.delete<T>(url, config);
  }

  patch<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return this.axiosInstance.patch<T>(url, data, config);
  }
}
console.log(process.env.API_URL);
const MainAxios = new Axios(process.env.NEXT_PUBLIC_API_URL!);

export default MainAxios;
