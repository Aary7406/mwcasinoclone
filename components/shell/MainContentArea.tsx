'use client';

import type { MouseEvent, ReactNode } from 'react';
import { useMenu } from './MenuContext';

/** `.layout-desktop__main`: while the left menu is open this area is the dimmed/blurred
 * backdrop (via its own `:after`), so clicking anywhere on it closes the menu. */
export default function MainContentArea({ children }: { children: ReactNode }) {
  const { open, close } = useMenu();
  const onClick = (e: MouseEvent) => {
    if (open) { e.preventDefault(); e.stopPropagation(); close(); }
  };
  return (
    <div className="ng-c-693957431 layout-desktop__main" onClickCapture={open ? onClick : undefined}>
      {children}
    </div>
  );
}
