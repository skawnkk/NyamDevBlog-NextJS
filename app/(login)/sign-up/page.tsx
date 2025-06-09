'use client';

import { signUp } from '@/entities/auth';
import { LoginForm } from '@/features/auth';

export default function SignUpPage() {
  return <LoginForm mode="signup" callback={signUp} />;
}
