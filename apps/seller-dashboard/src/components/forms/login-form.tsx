'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // fake auth
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');

      router.push('/dashboard');
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-4"
    >
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        type="submit"
        className="w-full"
      >
        Login
      </Button>
    </form>
  );
}