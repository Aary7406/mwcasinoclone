'use client';

import type { ReactNode } from 'react';
import { useMenu } from './MenuContext';

/**
 * `.layout-desktop` wrapper: adds the `--menu-open` modifier the original toggles via JS,
 * which drives the dimmed/blurred backdrop behind the main content, and closes the
 * left-menu when that backdrop (i.e. anywhere in the main content) is clicked.
 */
export default function LayoutDesktop({ children }: { children: ReactNode }) {
  const { open, close } = useMenu();
  return (
    <div className={`ng-c-693957431 layout-desktop${open ? ' layout-desktop--menu-open' : ''}`}>
      {children}
    </div>
  );
}
