import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEFTGAMEORIONLAYOUT2_LIST: Row[] = [
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

const LEFTGAMEORIONLAYOUT2_LIST1: Row[] = [
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

export default function LeftGameOrionLayout2() {
  return (
    <mcd-left-game-orion-layout class="ng-h-3295987738">
      <ul className="ng-c-3295987738 item-box left-menu__vendor-box">
        {LEFTGAMEORIONLAYOUT2_LIST.map((it, i) => (
          <li key={i} className="ng-c-3295987738 left-menu__subnav-item" game-type="4" vendor-code={it.vendorcode0} web-category-type="GAME">
            <a className="ng-c-3295987738">
              <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={sty(it.s0)}></div>
              <p className="ng-c-3295987738">
                {it.t0}
              </p>
            </a>
          </li>
        ))}
        <li className="ng-c-3295987738 left-menu__subnav-item" extra-data="football" game-type="4" vendor-code="SBOv2" web-category-type="GAME">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={{"backgroundImage":"url(/placeholders/provider-sbov2.svg)"}}></div>
            <p className="ng-c-3295987738">
              SBO
            </p>
          </a>
        </li>
        {LEFTGAMEORIONLAYOUT2_LIST1.map((it, i) => (
          <li key={i} className="ng-c-3295987738 left-menu__subnav-item" game-type="4" vendor-code={it.vendorcode0} web-category-type="GAME">
            <a className="ng-c-3295987738">
              <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={sty(it.s0)}></div>
              <p className="ng-c-3295987738">
                {it.t0}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </mcd-left-game-orion-layout>
  );
}
