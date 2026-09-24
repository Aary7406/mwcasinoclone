'use client';

import HeaderNavOrion from '../generated/HeaderNavOrion';
import Language from '../generated/Language';
import { useAuthModal } from '@/components/shell/AuthModalContext';
import { useMenu } from '@/components/shell/MenuContext';

export default function HeaderOrion() {
  const { toggle } = useMenu();
  const { openLogin, openSignup } = useAuthModal();
  return (
    <mcd-header-orion class="ng-c-693957431 ng-h-4285536054 layout-desktop__header-inner">
      <div className="ng-c-4285536054 header currency-bdt" id="header-desktop-1">
        <div className="ng-c-4285536054 header__main">
          <div className="ng-c-4285536054 header__brand">
            <ul className="ng-c-4285536054 header__menu-btn" onClick={toggle} role="button" aria-label="Open menu">
              {Array.from({ length: 3 }, (_, i) => (
                <li key={i} className="ng-c-4285536054"></li>
              ))}
            </ul>
            <div className="ng-c-4285536054 header__logo" style={{ backgroundImage: 'url(/assets/images/logo.webp)' }} tabIndex={0}></div>
          </div>
          <div className="ng-c-4285536054 header__right">
            <div className="ng-c-4285536054 auth-container">
              <button className="ng-c-4285536054 header__btn header__btn--secondary" tabIndex={0} onClick={openSignup}>
                Sign up
              </button>
              <button className="ng-c-4285536054 header__btn header__btn--primary" tabIndex={0} onClick={openLogin}>
                Login
              </button>
            </div>
            <div className="ng-c-4285536054 header__switch-lang">
              <img className="ng-c-4285536054" alt="BD" loading="lazy" src="/assets/images/flag/BD.webp" />
            </div>
          </div>
        </div>
        <HeaderNavOrion />
      </div>
      <Language />
    </mcd-header-orion>
  );
}
