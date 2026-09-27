'use client'

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  children: string,
  path: string,
  className?: string;
}

export default function NavLink({ children, path, className }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={cn(
        'transition duration-200 hover:text-primary',
        pathname === path && 'text-primary font-semibold',
        className
      )}
    >
      {children}
    </Link>
  );
}