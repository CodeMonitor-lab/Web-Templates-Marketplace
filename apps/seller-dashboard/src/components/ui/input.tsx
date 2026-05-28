import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full rounded-xl border px-4 py-3 outline-none focus:ring-2',
        className
      )}
      {...props}
    />
  );
}