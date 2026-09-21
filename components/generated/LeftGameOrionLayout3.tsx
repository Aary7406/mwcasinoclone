import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEFTGAMEORIONLAYOUT3_LIST: Row[] = [
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_evolution.svg);",
    "t0": "EVO"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_sexybcrt.svg);",
    "t0": "Sexy"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_pp.svg);",
    "t0": "PP"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_hotroad.svg);",
    "t0": "HotRoad"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_pt.svg);",
    "t0": "PT"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_dreamgaming.svg);",
    "t0": "DG"
  },
  {
    "s0": "background-image: url(/placeholders/provider-mg.svg);",
    "t0": "MG"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_viacasino.svg);",
    "t0": "VIA"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_creedroomz.svg);",
    "t0": "CREEDROOMZ"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_winfinity.svg);",
    "t0": "WINFINITY"
  }
];

export default function LeftGameOrionLayout3() {
  return (
    <mcd-left-game-orion-layout class="ng-h-3295987738">
      <ul className="ng-c-3295987738 item-box left-menu__vendor-box">
        {LEFTGAMEORIONLAYOUT3_LIST.map((it, i) => (
          <li key={i} className="ng-c-3295987738 left-menu__subnav-item" game-type="2" web-category-type="VENDOR">
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
