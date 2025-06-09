'use client';

import { signIn } from '@/entities/auth';
import { LoginForm } from '@/features/auth';

export default function SignInPage() {
  return <LoginForm mode="signin" callback={signIn} />;
}
