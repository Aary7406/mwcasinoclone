'use client';

import { useEffect } from 'react';
import { useAuthModal } from './AuthModalContext';

const GAME_SELECTOR = '[web-category-type="GAME"], .games-box, mcd-game-box';

/**
 * Reproduces the site's real logged-out behavior: clicking any game entry point (nav-dropdown
 * tile, left-menu vendor strip, or a game grid card anywhere) redirects an anonymous visitor to
 * the login prompt — confirmed directly against the live site. Since this clone has no backend
 * and is always "logged out", every such click opens the same modal here.
 */
export default function GameGateInterceptor() {
  const { openLogin } = useAuthModal();
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(GAME_SELECTOR);
      if (!target) return;
      e.preventDefault();
      openLogin();
    };
    // Bubble phase, no stopPropagation: lets the nav dropdown's own open/close handling and
    // the left-menu backdrop-click-to-close still run for the same click.
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [openLogin]);
  return null;
}
