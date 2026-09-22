import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const GAMEHEADERNAVORION7_LIST: Row[] = [
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_jili.png);",
    "t0": "JILI"
  },
  {
    "s0": "background-image: url(/assets/real/41bad0d4d5.png);",
    "t0": "JDB"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_pg.png);",
    "t0": "PG"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_fc.png);",
    "t0": "FC"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-ka.png);",
    "t0": "KA"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-cq9.png);",
    "t0": "CQ9"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_kingmaker.png);",
    "t0": "KM"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-rich88.png);",
    "t0": "RICH88"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_nextspin.png);",
    "t0": "NEXTSPIN"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_cg.png);",
    "t0": "CG"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_pp.png);",
    "t0": "PP"
  },
  {
    "s0": "background-image: url(/assets/real/d381a79c10.png);",
    "t0": "YL"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_relax.png);",
    "t0": "RELAX"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_hacksaw.png);",
    "t0": "HACKSAW"
  },
  {
    "s0": "background-image: url(/assets/real/ac323312d5.png);",
    "t0": "MMG"
  }
];

export default function GameHeaderNavOrion7() {
  return (
    <mcd-game-header-nav-orion class="ng-c-3671529244 ng-h-2843435143 navbar__item">
      <li className="ng-c-2843435143 navbar__item" data-category="Arcade">
        <div className="ng-c-2843435143 navbar__item-head">
          {" Arcade "}
          <i className="ng-c-2843435143 navbar__item-arrow" style={{"maskImage":"url(/assets/images/icon-set/player/kyc/accordion-arrow.svg)"}}></i>
        </div>
        <div className="ng-c-2843435143 navbar__sub-nav">
          <ol className="ng-c-2843435143 navbar__sub-nav-inner">
            {GAMEHEADERNAVORION7_LIST.map((it, i) => (
              <li key={i} className="ng-c-2843435143 navbar__sub-nav-item" game-type="1024" web-category-type="VENDOR">
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
