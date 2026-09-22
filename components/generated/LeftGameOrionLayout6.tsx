import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEFTGAMEORIONLAYOUT6_LIST: Row[] = [
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
    "s0": "background-image: url(/assets/real/3a35fd02e4.png);",
    "t0": "JDB"
  },
  {
    "s0": "background-image: url(/assets/real/dec4168590.png);",
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
    "s0": "background-image: url(/assets/images/brand/white/provider-mg.png);",
    "t0": "MG"
  },
  {
    "s0": "background-image: url(/assets/real/d23a7e86da.png);",
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
    "s0": "background-image: url(/assets/real/8a50740f00.png);",
    "t0": "HABANERO"
  }
];

export default function LeftGameOrionLayout6() {
  return (
    <mcd-left-game-orion-layout class="ng-h-3295987738">
      <ul className="ng-c-3295987738 item-box left-menu__vendor-box">
        {LEFTGAMEORIONLAYOUT6_LIST.map((it, i) => (
          <li key={i} className="ng-c-3295987738 left-menu__subnav-item" game-type="256" web-category-type="VENDOR">
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
