import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  withCredentials: true,
});

instance.interceptors.request.use(
  config => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 3. 응답(Response) 인터셉터: 401 오류 자동 처리
instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      console.error('401 에러 - 인증 만료 또는 로그인 필요');

      try {
        //✅ 리프레시 요청 (쿠키로 refreshToken 전송됨)
        const response = await instance.post('/auth/token/accessToken');
        const { data } = response;
        const newAccessToken = data.accessToken;

        instance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        const originalRequest = error.config;

        return instance(originalRequest);
      } catch (refreshError) {
        console.error('리프레시 토큰 실패', refreshError);
        // 예: 로그아웃 처리
        window.location.href = '/sign-in';
        return Promise.reject(refreshError);
      }
    }
  },
);

export async function axiosInstance<TData = any>(config: AxiosRequestConfig) {
  const response = await instance(config);
  return response.data as TData;
}
