'use client';

import { Suspense } from 'react';

import { LoginForm } from '../login-form';

export default function SignInPage() {
  const handleLogin = async ({ email, password }) => {
    const basicAuth = btoa(`${email}:${password}`); // base64 인코딩
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/email`, {
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
        return { error: result.message || '로그인 실패', email };
      }

      localStorage.setItem('accessToken', result.accessToken);
      return { redirectTo: '/' };
    } catch (e) {
      return { error: '서버 에러가 발생했습니다.', email };
    }
  };

  return (
    <Suspense>
      <LoginForm mode="signin" callback={handleLogin} />
    </Suspense>
  );
}
