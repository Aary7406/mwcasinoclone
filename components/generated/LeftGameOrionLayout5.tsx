import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEFTGAMEORIONLAYOUT5_LIST: Row[] = [
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
    "s0": "background-image: url(/assets/real/8192a24eba.png);",
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
    "s0": "background-image: url(/assets/real/1b8aedcefc.png);",
    "t0": "PT"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-rich88.png);",
    "t0": "RICH88"
  },
  {
    "s0": "background-image: url(/assets/real/2583433f99.png);",
    "t0": "LETSGO"
  },
  {
    "s0": "background-image: url(/assets/images/brand/white/provider-joker.png);",
    "t0": "Joker"
  },
  {
    "s0": "background-image: url(/assets/real/1eda514767.png);",
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
    "s0": "background-image: url(/assets/real/e75159fe86.png);",
    "t0": "AVIATOR2"
  }
];

export default function LeftGameOrionLayout5() {
  return (
    <mcd-left-game-orion-layout class="ng-h-3295987738">
      <ul className="ng-c-3295987738 item-box left-menu__vendor-box">
        {LEFTGAMEORIONLAYOUT5_LIST.map((it, i) => (
          <li key={i} className="ng-c-3295987738 left-menu__subnav-item" game-type="8192" web-category-type="VENDOR">
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
