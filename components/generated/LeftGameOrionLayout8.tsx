import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEFTGAMEORIONLAYOUT8_LIST: Row[] = [
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-awcv2_jili.png);",
    "t0": "JILI"
  },
  {
    "s0": "background-image: url(/assets/real/17c9af90be.png);",
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
    "s0": "background-image: url(/assets/real/f75196886f.png);",
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
    "s0": "background-image: url(/assets/real/f592d57511.png);",
    "t0": "MMG"
  }
];

export default function LeftGameOrionLayout8() {
  return (
    <mcd-left-game-orion-layout class="ng-h-3295987738">
      <ul className="ng-c-3295987738 item-box left-menu__vendor-box">
        {LEFTGAMEORIONLAYOUT8_LIST.map((it, i) => (
          <li key={i} className="ng-c-3295987738 left-menu__subnav-item" game-type="1024" web-category-type="VENDOR">
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
