'use client';

import { CircleIcon, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

import { Input, Label } from '@/shared/ui';
import { Button } from '@/styles/components/ui/button';

export type LoginFormInputs = {
  nickname?: string;
  email?: string;
  password?: string;
  error?: string;
  redirectTo?: string;
};

type FormAction = (props: LoginFormInputs) => Promise<LoginFormInputs>;

interface LoginFormProps {
  mode: 'signin' | 'signup';
  callback: FormAction;
}

export function LoginForm({ mode, callback }: LoginFormProps) {
  const router = useRouter();
  const isSignUpMode = mode === 'signup';
  const signText = isSignUpMode ? '가입하기' : '로그인하기';

  const [state, formAction, pending] = useActionState<LoginFormInputs>(callback, {});

  useEffect(() => {
    if (!state.redirectTo) {
      return;
    }

    router.replace(state.redirectTo);
  }, [router, state.redirectTo]);

  return (
    <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <CircleIcon className="h-12 w-12 text-orange-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{signText}</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" action={formAction}>
          {/* <input type="hidden" name="redirect" value={redirect || ''} />
          <input type="hidden" name="priceId" value={priceId || ''} />
          <input type="hidden" name="inviteId" value={inviteId || ''} /> */}
          {isSignUpMode && (
            <div>
              <Label htmlFor="nickname" className="block text-sm font-medium text-gray-700">
                Nickname
              </Label>
              <div className="mt-1">
                <Input
                  id="nickname"
                  name="nickname"
                  type="nickname"
                  autoComplete="nickname"
                  defaultValue={state.nickname}
                  required
                  maxLength={50}
                  className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your nickname"
                />
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={state.email}
                required
                maxLength={50}
                className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={'new-password'}
                defaultValue={state.password}
                required
                minLength={8}
                maxLength={100}
                className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {state?.error && <div className="text-red-500 text-sm">{state.error}</div>}

          <div>
            <Button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Loading...
                </>
              ) : (
                signText
              )}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <Link
                href={`${isSignUpMode ? '/sign-in' : '/sign-up'}`}
                // ${redirect ? `?redirect=${redirect}` : ''
                // }${priceId ? `&priceId=${priceId}` : ''}`}
                className="px-2 bg-gray-50 text-gray-500"
              >
                {isSignUpMode ? 'Already have an account?' : 'Create an account'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
