'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

const MENU_PATHS = [
  { d: 'M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z' },
  { d: 'M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z' },
  { d: 'M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z' },
];
const LINKS = [
  { href: '/bd/en/about-us', label: 'About Us' },
  { href: '/bd/en/privacy-policy', label: 'Privacy Policy' },
  { href: '/bd/en/terms-and-conditions', label: 'Terms and Conditions' },
  { href: '/bd/en/security', label: 'Security' },
  { href: '/bd/en/responsible-gaming', label: 'Resposible Gaming' },
  { href: '/bd/en/for-age-18-and-above-only', label: 'For age 18 and above only' },
  { href: '/bd/en/kyc-policy-of-mcw-mega-casino-world', label: 'KYC Policy' },
  { href: '/bd/en/anti-money-laundering-policy', label: 'Anti Money Laundering Policy' },
  { href: '/bd/en/faq', label: 'FAQ' },
];

/** Guide-site header: hamburger opens the sidenav, current route is highlighted. */
export default function GuideHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg__secondary sticky-top">
      <div className="d-flex justify-content-center align-items-center header__wrapper">
        <button className="menu-toggle yellow__color sticky-top" aria-label="Open Menu" onClick={() => setOpen(true)}>
          <svg fill="none" height="24" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            {MENU_PATHS.map((p, i) => (
              <path key={i} d={p.d} fill="currentColor" />
            ))}
          </svg>
        </button>
        <aside className={`sidenav${open ? ' open' : ''}`}>
          <button className="close-btn" aria-label="Close Menu" onClick={() => setOpen(false)}>
            <svg fill="currentColor" height="20" stroke="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" width="20" xmlns="http://www.w3.org/2000/svg">
              <g />
              <path d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z" />
            </svg>
          </button>
          <div className="sidenav__greeting">
            <p className="fs-4">Hello there!</p>
            <div className="fs-4">
              {'How may we '}
              <span className="text-typography">help</span>
              {' you?'}
            </div>
          </div>
          <nav>
            <ul className="list-unstyled py-4 nav__list">
              {LINKS.map(l => (
                <li key={l.href} className="lh-lg py-0">
                  <a
                    className={`fs-6 text-decoration-none nav-link text-white${pathname === l.href ? ' active-link' : ''}`}
                    href={l.href}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="sideButton">
            <a className="bg__login text-decoration-none text-white mb-2" href="https://mcwlink.co/mcwguidebd" rel="noopener noreferrer" target="_blank">
              Login
            </a>
            <a className="bg__login bg__signup text-decoration-none text-white mb-2" href="https://mcwlink.co/mcwguidebd_signup" rel="noopener noreferrer" target="_blank">
              Sign Up
            </a>
          </div>
        </aside>
        <div className={`main-overlay${open ? ' shifted' : ''}`} onClick={() => setOpen(false)}></div>
        <div className="flex-grow-1 d-flex justify-content-center align-items-center logo__wrapper">
          <a className="pe-5 pe-md-5" href="/bd/en">
            <img className="w-[120px] md:w-[217px]" style={{ color: 'transparent' }} alt="MCW Logo" height="53" loading="lazy" src="/guide-assets/7914a104_image.webp" title="MCW Logo" width="124" />
          </a>
        </div>
        <div className="langContainer">
          <div className="d-flex justify-content-center align-items-center">
            <div className="position-relative language__switcher">
              <div className="d-flex justify-content-center align-items-center gap-2 rounded-3 p-2 cursor-pointer border border-secondary text-light">
                <img className="rounded-circle" alt="bd" height="24" loading="lazy" src="/assets/images/flag/BD.webp" width="24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
