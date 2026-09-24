'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type Mode = 'login' | 'signup' | null;
type Ctx = { mode: Mode; openLogin: () => void; openSignup: () => void; close: () => void };
const AuthCtx = createContext<Ctx | null>(null);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(null);
  return (
    <AuthCtx.Provider value={{ mode, openLogin: () => setMode('login'), openSignup: () => setMode('signup'), close: () => setMode(null) }}>
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuthModal() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error('useAuthModal must be used within AuthModalProvider');
  return ctx;
}
