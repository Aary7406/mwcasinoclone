import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEFTGAMEORIONLAYOUT6_LIST: Row[] = [
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
    "s0": "background-image: url(/placeholders/provider-mg.svg);",
    "t0": "MG"
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
