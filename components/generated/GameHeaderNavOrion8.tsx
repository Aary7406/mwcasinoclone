import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const GAMEHEADERNAVORION8_LIST: Row[] = [
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_jili.svg);",
    "t0": "JILI"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_kingmaker.svg);",
    "t0": "KM"
  },
  {
    "s0": "background-image: url(/placeholders/provider-joker.svg);",
    "t0": "Joker"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "Number"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_yesbingo.svg);",
    "t0": "YELLOW BAT"
  },
  {
    "s0": "background-image: url(/placeholders/provider-playngo.svg);",
    "t0": "PNG"
  },
  {
    "s0": "background-image: url(/placeholders/provider-cq9.svg);",
    "t0": "CQ9"
  },
  {
    "s0": "background-image: url(/placeholders/provider-rich88.svg);",
    "t0": "RICH88"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_hacksaw.svg);",
    "t0": "HACKSAW"
  }
];

export default function GameHeaderNavOrion8() {
  return (
    <mcd-game-header-nav-orion class="ng-c-3671529244 ng-h-2843435143 navbar__item">
      <li className="ng-c-2843435143 navbar__item" data-category="Lottery">
        <div className="ng-c-2843435143 navbar__item-head">
          {" Lottery "}
          <i className="ng-c-2843435143 navbar__item-arrow" style={{"maskImage":"url(/assets/images/icon-set/player/kyc/accordion-arrow.svg)"}}></i>
        </div>
        <div className="ng-c-2843435143 navbar__sub-nav">
          <ol className="ng-c-2843435143 navbar__sub-nav-inner">
            {GAMEHEADERNAVORION8_LIST.map((it, i) => (
              <li key={i} className="ng-c-2843435143 navbar__sub-nav-item" game-type="64" web-category-type="VENDOR">
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
