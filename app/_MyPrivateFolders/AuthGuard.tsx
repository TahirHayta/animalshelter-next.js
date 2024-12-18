'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn]  = useState(false);
  const router = useRouter();

  if (!loggedIn) {
    router.push('/open-account'); // also delete this.
    return null; //TODO a text that says you should open your account first, and a link to open account page.
  }

  return <>{children}</>;
}
