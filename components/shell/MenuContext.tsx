'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type Ctx = { open: boolean; toggle: () => void; close: () => void };
const MenuCtx = createContext<Ctx | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <MenuCtx.Provider value={{ open, toggle: () => setOpen(v => !v), close: () => setOpen(false) }}>{children}</MenuCtx.Provider>;
}

export function useMenu() {
  const ctx = useContext(MenuCtx);
  if (!ctx) throw new Error('useMenu must be used within MenuProvider');
  return ctx;
}
