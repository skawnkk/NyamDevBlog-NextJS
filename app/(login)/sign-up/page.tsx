'use client';

import { Suspense } from 'react';

import { LoginForm } from '../login-form';

export default function SignUpPage() {
  return (
    <Suspense>
      <LoginForm mode="signup" />
    </Suspense>
  );
}
