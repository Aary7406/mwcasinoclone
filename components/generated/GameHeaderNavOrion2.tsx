import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const GAMEHEADERNAVORION2_LIST: Row[] = [
  {
    "vendorcode0": "CRICKET",
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "Exchange"
  },
  {
    "vendorcode0": "Saba",
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "Sportsbook"
  },
  {
    "vendorcode0": "SBTech",
    "s0": "background-image: url(/placeholders/provider-sbtech.svg);",
    "t0": "BTi"
  }
];

const GAMEHEADERNAVORION2_LIST1: Row[] = [
  {
    "vendorcode0": "AWCV2_HORSEBOOK",
    "s0": "background-image: url(/assets/images/icon-set/sports-icon/icon-horsebook.svg);",
    "t0": "Horsebook"
  },
  {
    "vendorcode0": "CMD",
    "s0": "background-image: url(/placeholders/provider-cmd.svg);",
    "t0": "CMD"
  },
  {
    "vendorcode0": "AWCV2_PINNACLE",
    "s0": "background-image: url(/placeholders/provider-awcv2_pinnacle.svg);",
    "t0": "Pinnacle"
  },
  {
    "vendorcode0": "AWCV2_INSPORTS",
    "s0": "background-image: url(/placeholders/provider-awcv2_insports.svg);",
    "t0": "iNsports"
  }
];

export default function GameHeaderNavOrion2() {
  return (
    <mcd-game-header-nav-orion class="ng-c-3671529244 ng-h-2843435143 navbar__item">
      <li className="ng-c-2843435143 navbar__item" data-category="Sports">
        <div className="ng-c-2843435143 navbar__item-head">
          {" Sports "}
          <i className="ng-c-2843435143 navbar__item-arrow" style={{"maskImage":"url(/assets/images/icon-set/player/kyc/accordion-arrow.svg)"}}></i>
        </div>
        <div className="ng-c-2843435143 navbar__sub-nav">
          <ol className="ng-c-2843435143 navbar__sub-nav-inner">
            {GAMEHEADERNAVORION2_LIST.map((it, i) => (
              <li key={i} className="ng-c-2843435143 navbar__sub-nav-item" game-type="4" vendor-code={it.vendorcode0} web-category-type="GAME">
                <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(it.s0)}></div>
                <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                  {it.t0}
                </p>
              </li>
            ))}
            <li className="ng-c-2843435143 navbar__sub-nav-item" extra-data="football" game-type="4" vendor-code="SBOv2" web-category-type="GAME">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={{"backgroundImage":"url(/placeholders/provider-sbov2.svg)"}}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                SBO
              </p>
            </li>
            {GAMEHEADERNAVORION2_LIST1.map((it, i) => (
              <li key={i} className="ng-c-2843435143 navbar__sub-nav-item" game-type="4" vendor-code={it.vendorcode0} web-category-type="GAME">
                <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(it.s0)}></div>
                <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                  {it.t0}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </li>
    </mcd-game-header-nav-orion>
  );
}
