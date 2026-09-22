type Row = Record<string, string>;

const GUIDEHEADERSTATIC_LIST: Row[] = [
  {
    "d0": "M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
  },
  {
    "d0": "M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
  },
  {
    "d0": "M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z"
  }
];

const GUIDEHEADERSTATIC_LIST1: Row[] = [
  {
    "cls": "fs-6 text-decoration-none nav-link text-white active-link",
    "href0": "/bd/en",
    "t0": "About Us"
  },
  {
    "cls": "fs-6 text-decoration-none nav-link text-white",
    "href0": "/bd/en/privacy-policy",
    "t0": "Privacy Policy"
  },
  {
    "cls": "fs-6 text-decoration-none nav-link text-white",
    "href0": "/bd/en/terms-and-conditions",
    "t0": "Terms and Conditions"
  },
  {
    "cls": "fs-6 text-decoration-none nav-link text-white",
    "href0": "/bd/en/security",
    "t0": "Security"
  },
  {
    "cls": "fs-6 text-decoration-none nav-link text-white",
    "href0": "/bd/en/responsible-gaming",
    "t0": "Resposible Gaming"
  },
  {
    "cls": "fs-6 text-decoration-none nav-link text-white",
    "href0": "/bd/en/for-age-18-and-above-only",
    "t0": "For age 18 and above only"
  },
  {
    "cls": "fs-6 text-decoration-none nav-link text-white",
    "href0": "/bd/en/kyc-policy-of-mcw-mega-casino-world",
    "t0": "KYC Policy"
  },
  {
    "cls": "fs-6 text-decoration-none nav-link text-white",
    "href0": "/bd/en/anti-money-laundering-policy",
    "t0": "Anti Money Laundering Policy"
  },
  {
    "cls": "fs-6 text-decoration-none nav-link text-white",
    "href0": "/bd/en/faq",
    "t0": "FAQ"
  }
];

export default function GuideHeaderStatic() {
  return (
    <header className="bg__secondary sticky-top">
      <div className="d-flex justify-content-center align-items-center header__wrapper">
        <button className="menu-toggle yellow__color sticky-top" aria-label="Open Menu">
          <svg fill="none" height="24" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            {GUIDEHEADERSTATIC_LIST.map((it, i) => (
              <path key={i} d={it.d0} fill="currentColor" />
            ))}
          </svg>
        </button>
        <aside className="sidenav">
          <button className="close-btn" aria-label="Close Menu">
            <svg fill="currentColor" height="20" stroke="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" width="20" xmlns="http://www.w3.org/2000/svg">
              <g />
              <path d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z" />
            </svg>
          </button>
          <div className="sidenav__greeting">
            <p className="fs-4">
              Hello there!
            </p>
            <div className="fs-4">
              {"How may we "}
              <span className="text-typography">
                help
              </span>
              {" you?"}
            </div>
          </div>
          <nav>
            <ul className="list-unstyled py-4 nav__list">
              {GUIDEHEADERSTATIC_LIST1.map((it, i) => (
                <li key={i} className="lh-lg py-0">
                  <a className={it.cls} href={it.href0}>
                    {it.t0}
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
        <div className="main-overlay"></div>
        <div className="flex-grow-1 d-flex justify-content-center align-items-center logo__wrapper">
          <a className="pe-5 pe-md-5" href="https://mcwlink.net/mcwguidebd" target="_blank">
            <img className="w-[120px] md:w-[217px]" style={{"color":"transparent"}} alt="MCW Logo" data-nimg="1" decoding="async" height="53" loading="lazy" src="/guide-assets/508ffb9d_image.webp" srcSet="/guide-assets/508ffb9d_image.webp" title="MCW Logo" width="124" />
          </a>
        </div>
        <div className="langContainer">
          <div className="d-flex justify-content-center align-items-center">
            <div className="position-relative language__switcher">
              <div className="d-flex justify-content-center align-items-center gap-2 rounded-3 p-2 cursor-pointer border border-secondary text-light">
                <img className="rounded-circle" style={{"color":"transparent"}} alt="bd" data-nimg="1" decoding="async" height="24" loading="lazy" src="/guide-assets/508ffb9d_image.webp" srcSet="/guide-assets/508ffb9d_image.webp" width="24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
