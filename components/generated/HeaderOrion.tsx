import HeaderNavOrion from './HeaderNavOrion';
import Language from './Language';

type Row = Record<string, string>;

const HEADERORION_LIST: Row[] = Array.from({ length: 3 }, () => ({}));

export default function HeaderOrion() {
  return (
    <mcd-header-orion class="ng-c-693957431 ng-h-4285536054 layout-desktop__header-inner">
      <div className="ng-c-4285536054 header currency-bdt" id="header-desktop-1">
        <div className="ng-c-4285536054 header__main">
          <div className="ng-c-4285536054 header__brand">
            <ul className="ng-c-4285536054 header__menu-btn">
              {HEADERORION_LIST.map((_, i) => (
                <li key={i} className="ng-c-4285536054"></li>
              ))}
            </ul>
            <div className="ng-c-4285536054 header__logo" style={{"backgroundImage":"url(/assets/images/logo.webp)"}} tabIndex={0}></div>
          </div>
          <div className="ng-c-4285536054 header__right">
            <div className="ng-c-4285536054 auth-container">
              <button className="ng-c-4285536054 header__btn header__btn--secondary" tabIndex={0}>
                Sign up
              </button>
              <button className="ng-c-4285536054 header__btn header__btn--primary" tabIndex={0}>
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
