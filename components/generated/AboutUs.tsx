type Row = Record<string, string>;

const ABOUTUS_LIST: Row[] = [
  {
    "href0": "https://mcwlink.co/bd/en/responsible-gaming",
    "t0": " Responsible Gaming "
  },
  {
    "href0": "https://mcwlink.co/bd/en/about-us",
    "t0": " About Us "
  },
  {
    "href0": "https://mcwlink.co/bd/en/security",
    "t0": " Security "
  },
  {
    "href0": "https://mcwlink.co/bd/en/privacy-policy",
    "t0": " Privacy Policy "
  },
  {
    "href0": "https://mcwlink.co/bd/en/faq",
    "t0": " FAQ "
  }
];

export default function AboutUs() {
  return (
    <mcd-about-us class="ng-h-3419815403 about-us">
      <div className="ng-c-3419815403 about-us">
        <h2 className="ng-c-3419815403">
          About Us
        </h2>
        <ul className="ng-c-3419815403">
          {ABOUTUS_LIST.map((it, i) => (
            <li key={i} className="ng-c-3419815403">
              <a className="ng-c-3419815403" href={it.href0} target="_blank">
                {it.t0}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </mcd-about-us>
  );
}
