'use client';

import { Suspense } from 'react';

import { LoginForm, LoginFormInputs } from '../login-form';

export default function SignUpPage() {
  const handleSignUp = async ({ nickname, email, password }: LoginFormInputs) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname, email, password }),
        cache: 'no-store',
      });

      const result = await res.json();

      if (!res.ok) {
        return { error: result.message || '회원가입 실패', nickname, email };
      }

      localStorage.setItem('accessToken', result.accessToken);
      return { redirectedTo: '/' };
    } catch (e) {
      return { error: '서버 에러가 발생했습니다.', nickname, email };
    }
  };
  return (
    <Suspense>
      <LoginForm mode="signup" callback={handleSignUp} />
    </Suspense>
  );
}
