import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  withCredentials: true,
});

// instance.interceptors.request.use(
//   (config) => {
//     const token =
//       typeof window !== 'undefined'
//         ? localStorage.getItem('accessToken')
//         : null;

//     if (token) {
//       config.headers = config.headers || {};
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // 3. 응답(Response) 인터셉터: 401 오류 자동 처리
// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       console.error('401 에러 - 인증 만료 또는 로그인 필요');
//       // 👉 여기서 토큰 리프레시 로직을 넣거나
//       // 👉 아니면 바로 로그아웃 처리를 해도 됩니다.
//       // 예: window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

export async function axiosInstance<TData = any>(config: AxiosRequestConfig) {
  const response = await instance(config);
  return response.data as TData;
}
