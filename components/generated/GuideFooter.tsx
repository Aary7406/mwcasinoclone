type Row = Record<string, string>;

const GUIDEFOOTER_LIST: Row[] = [
  {
    "href0": "/bd/en",
    "t0": "About Us"
  },
  {
    "href0": "/bd/en/privacy-policy",
    "t0": "Privacy Policy"
  },
  {
    "href0": "/bd/en/terms-and-conditions",
    "t0": "Terms and Conditions"
  },
  {
    "href0": "/bd/en/security",
    "t0": "Security"
  },
  {
    "href0": "/bd/en/responsible-gaming",
    "t0": "Responsible Gaming"
  },
  {
    "href0": "/bd/en/for-age-18-and-above-only",
    "t0": "For Age 18 and Above Only"
  },
  {
    "href0": "/bd/en/kyc-policy-of-mcw-mega-casino-world",
    "t0": "KYC Policy"
  },
  {
    "href0": "/bd/en/anti-money-laundering-policy",
    "t0": "Anti Money Laundering Policy"
  },
  {
    "href0": "/bd/en/faq",
    "t0": "FAQ"
  }
];

export default function GuideFooter() {
  return (
    <footer className="text-light pt-5 pb-3 mt-5 border-top border-secondary">
      <div className="container pt-5">
        <ul className="list-unstyled small text-center mb-4 mb-md-5">
          {GUIDEFOOTER_LIST.map((it, i) => (
            <li key={i}>
              <a className="text-decoration-none" href={it.href0}>
                {it.t0}
              </a>
            </li>
          ))}
        </ul>
        <p className="small text-muted fw-bold text-center mb-2">
          Official Brand Partner
        </p>
        <div className="text-center mb-3">
          <a className="text-decoration-none text-light" href="/bd/en">
            <img style={{"color":"transparent"}} alt="Logo" data-nimg="1" decoding="async" height="40" loading="lazy" src="/guide-assets/508ffb9d_image.webp" srcSet="/guide-assets/508ffb9d_image.webp" width="122" />
          </a>
        </div>
        <div className="border-top border-secondary pt-3 text-center small text-muted">
          {"© "}
          2026
          {" Mega Casino World. "}
          All rights reserved.
        </div>
      </div>
      <div className="toast-container bottom-0 end-0 p-3 position-fixed bottom-0 start-50 translate-middle-x">
        <div className="fade toast text-white border-secondary shadow-lg bg-dark show" aria-atomic="true" aria-live="assertive" role="alert">
          <div className="toast-header">
            <strong className="me-auto text-center w-100">
              Welcome to our Info Centre
            </strong>
            <button className="btn-close" aria-label="Close" data-dismiss="toast" type="button"></button>
          </div>
          <div className="text-center toast-body">
            Thanks for visiting our site!
          </div>
        </div>
      </div>
    </footer>
  );
}
