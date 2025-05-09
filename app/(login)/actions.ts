'use server';

import { validatedAction } from '@/lib/utils/middleware';
import { z } from 'zod';

const signInType = {
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(20),
};

const signInSchema = z.object(signInType);

const signUpSchema = z.object({
  nickname: z.string().min(2).max(20),
  ...signInType,
});

export const signIn = validatedAction(
  signInSchema,
  async (_prevState: any, formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const basicAuth = btoa(`${email}:${password}`); // base64 인코딩
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login/email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${basicAuth}`,
          },
          body: JSON.stringify({ email, password }),
          cache: 'no-store',
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        return { error: errorData.message || '로그인 실패', email };
      }

      return { redirectTo: '/' };
    } catch (e) {
      return { error: '서버 에러가 발생했습니다.', email };
    }
  }
);

export const signUp = validatedAction(
  signUpSchema,
  async (_prevState: any, formData: FormData) => {
    const nickname = formData.get('nickname');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register/email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nickname, email, password }),
          cache: 'no-store',
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        return { error: errorData.message || '회원가입 실패', nickname, email };
      }

      return { redirectTo: '/' };
    } catch (e) {
      return { error: '서버 에러가 발생했습니다.', nickname, email };
    }
  }
);
