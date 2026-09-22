import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const GAMEHEADERNAVORION6_LIST: Row[] = [
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_jili.png);",
    "t0": "JILI"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_kingmaker.png);",
    "t0": "KM"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_spribe.png);",
    "t0": "SPRIBE"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-rich88.png);",
    "t0": "RICH88"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_pg.png);",
    "t0": "PG"
  },
  {
    "s0": "background-image: url(/assets/real/b9ccfbbdc2.png);",
    "t0": "JDB"
  },
  {
    "s0": "background-image: url(/assets/real/eddb097225.png);",
    "t0": "PP"
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
    "s0": "background-image: url(/assets/images/brand/white/provider-worldmatch.png);",
    "t0": "WorldMatch"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-playngo.png);",
    "t0": "PNG"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_netent.png);",
    "t0": "NETENT"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-sbov2.png);",
    "t0": "SBO"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_pt.png);",
    "t0": "PT"
  },
  {
    "s0": "background-image: url(/assets/real/2f8cbfefc3.png);",
    "t0": "YL"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_coolgame.png);",
    "t0": "COOLGAME"
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
    "s0": "background-image: url(/assets/real/87857426c8.png);",
    "t0": "HABANERO"
  }
];

export default function GameHeaderNavOrion6() {
  return (
    <mcd-game-header-nav-orion class="ng-c-3671529244 ng-h-2843435143 navbar__item">
      <li className="ng-c-2843435143 navbar__item" data-category="Table">
        <div className="ng-c-2843435143 navbar__item-head">
          {" Table "}
          <i className="ng-c-2843435143 navbar__item-arrow" style={{"maskImage":"url(/assets/images/icon-set/player/kyc/accordion-arrow.svg)"}}></i>
        </div>
        <div className="ng-c-2843435143 navbar__sub-nav">
          <ol className="ng-c-2843435143 navbar__sub-nav-inner">
            {GAMEHEADERNAVORION6_LIST.map((it, i) => (
              <li key={i} className="ng-c-2843435143 navbar__sub-nav-item" game-type="256" web-category-type="VENDOR">
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
