import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const GAMEHEADERNAVORION6_LIST: Row[] = [
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_jili.svg);",
    "t0": "JILI"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_kingmaker.svg);",
    "t0": "KM"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_spribe.svg);",
    "t0": "SPRIBE"
  },
  {
    "s0": "background-image: url(/placeholders/provider-rich88.svg);",
    "t0": "RICH88"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_pg.svg);",
    "t0": "PG"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "JDB"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "PP"
  },
  {
    "s0": "background-image: url(/placeholders/provider-ka.svg);",
    "t0": "KA"
  },
  {
    "s0": "background-image: url(/placeholders/provider-cq9.svg);",
    "t0": "CQ9"
  },
  {
    "s0": "background-image: url(/placeholders/provider-worldmatch.svg);",
    "t0": "WorldMatch"
  },
  {
    "s0": "background-image: url(/placeholders/provider-playngo.svg);",
    "t0": "PNG"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_netent.svg);",
    "t0": "NETENT"
  },
  {
    "s0": "background-image: url(/placeholders/provider-sbov2.svg);",
    "t0": "SBO"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_pt.svg);",
    "t0": "PT"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "YL"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_coolgame.svg);",
    "t0": "COOLGAME"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_relax.svg);",
    "t0": "RELAX"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_hacksaw.svg);",
    "t0": "HACKSAW"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
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
