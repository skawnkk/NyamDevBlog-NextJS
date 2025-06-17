'use server';

import { cookies } from 'next/headers';

import { instance } from '../../orval.axios';
import { AuthResponse, LoginFormInputs } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const handleAuthError = (
  result: AuthResponse,
  defaultMessage: string,
  data: Partial<LoginFormInputs>,
) => {
  return { error: result.message || defaultMessage, ...data };
};

const handleAuthSuccess = async (result: AuthResponse) => {
  const cookieStore = await cookies();

  cookieStore.set('accessToken', result.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });

  cookieStore.set('refreshToken', result.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });

  return { redirectTo: '/' };
};

export const signIn = async (_, formData: FormData) => {
  const email = String(formData.get('email') || '');
  const password = String(formData.get('password') || '');
  const basicAuth = btoa(`${email}:${password}`);

  try {
    const res = await fetch(`${API_URL}/auth/login/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${basicAuth}`,
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
      cache: 'no-store',
    });

    const result = await res.json();

    if (!res.ok) {
      return handleAuthError(result, '로그인 실패', { email });
    }

    return handleAuthSuccess(result);
  } catch (e) {
    console.error(e);
    return { error: '서버 에러가 발생했습니다.', email };
  }
};

export const signUp = async (_, formData: FormData) => {
  const nickname = String(formData.get('nickname') || '');
  const email = String(formData.get('email') || '');
  const password = String(formData.get('password') || '');

  try {
    const res = await fetch(`${API_URL}/auth/register/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname, email, password }),
      cache: 'no-store',
    });

    const result = await res.json();

    if (!res.ok) {
      return handleAuthError(result, '회원가입 실패', { nickname, email });
    }

    return handleAuthSuccess(result);
  } catch (e) {
    return { error: '서버 에러가 발생했습니다.', nickname, email };
  }
};
