import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

export default function Button({
  className,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-xl px-4 py-2 text-sm font-medium transition',
        {
          'bg-black text-white hover:opacity-90': variant === 'default',
          'border bg-white hover:bg-muted': variant === 'outline',
          'hover:bg-muted': variant === 'ghost',
        },
        className
      )}
      {...props}
    />
  );
}