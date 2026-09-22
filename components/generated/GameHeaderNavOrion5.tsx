import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const GAMEHEADERNAVORION5_LIST: Row[] = [
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_spribe.png);",
    "t0": "SPRIBE"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_jili.png);",
    "t0": "JILI"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_pp.png);",
    "t0": "PP"
  },
  {
    "s0": "background-image: url(/assets/real/e6430ac039.png);",
    "t0": "JDB"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_kingmaker.png);",
    "t0": "KM"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_fc.png);",
    "t0": "FC"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-mg.png);",
    "t0": "MG"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-cq9.png);",
    "t0": "CQ9"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-ka.png);",
    "t0": "KA"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_pt.png);",
    "t0": "PT"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-rich88.png);",
    "t0": "RICH88"
  },
  {
    "s0": "background-image: url(/assets/real/36d9df955d.png);",
    "t0": "LETSGO"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-joker.png);",
    "t0": "Joker"
  },
  {
    "s0": "background-image: url(/assets/real/63d90bbdb6.png);",
    "t0": "YL"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_smartsoft.png);",
    "t0": "SMARTSOFT"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_relax.png);",
    "t0": "RELAX"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_crash88.png);",
    "t0": "CRASH88"
  },
  {
    "s0": "background-image: url(/assets/real/830d475027.png);",
    "t0": "AVIATOR2"
  }
];

export default function GameHeaderNavOrion5() {
  return (
    <mcd-game-header-nav-orion class="ng-c-3671529244 ng-h-2843435143 navbar__item">
      <li className="ng-c-2843435143 navbar__item" data-category="Crash">
        <div className="ng-c-2843435143 navbar__item-head">
          {" Crash "}
          <i className="ng-c-2843435143 navbar__item-arrow" style={{"maskImage":"url(/assets/images/icon-set/player/kyc/accordion-arrow.svg)"}}></i>
        </div>
        <div className="ng-c-2843435143 navbar__sub-nav">
          <ol className="ng-c-2843435143 navbar__sub-nav-inner">
            {GAMEHEADERNAVORION5_LIST.map((it, i) => (
              <li key={i} className="ng-c-2843435143 navbar__sub-nav-item" game-type="8192" web-category-type="VENDOR">
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
