import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEFTGAMEORIONLAYOUT4_LIST: Row[] = [
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_jili.svg);",
    "t0": "JILI"
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
    "s0": "background-image: url(/placeholders/provider-awcv2_pp.svg);",
    "t0": "PP"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_fc.svg);",
    "t0": "FC"
  },
  {
    "s0": "background-image: url(/placeholders/provider-rich88.svg);",
    "t0": "RICH88"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_yesbingo.svg);",
    "t0": "YELLOW BAT"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_fastspin.svg);",
    "t0": "FASTSPIN"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_spade.svg);",
    "t0": "SG"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_nextspin.svg);",
    "t0": "NextSpin"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_pt.svg);",
    "t0": "PT"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_btg.svg);",
    "t0": "BTG"
  },
  {
    "s0": "background-image: url(/placeholders/provider-mg.svg);",
    "t0": "MG"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_dragoonsoft.svg);",
    "t0": "Dragoonsoft"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_play8.svg);",
    "t0": "P8"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "LETSGO"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_rt.svg);",
    "t0": "RT"
  },
  {
    "s0": "background-image: url(/placeholders/provider-worldmatch.svg);",
    "t0": "WorldMatch"
  },
  {
    "s0": "background-image: url(/placeholders/provider-joker.svg);",
    "t0": "Joker"
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
    "s0": "background-image: url(/placeholders/provider-awcv2_netent.svg);",
    "t0": "NETENT"
  },
  {
    "s0": "background-image: url(/placeholders/provider-playngo.svg);",
    "t0": "PNG"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_kingmaker.svg);",
    "t0": "KM"
  },
  {
    "s0": "background-image: url(/placeholders/provider-lucky365.svg);",
    "t0": "Lucky365"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_cg.svg);",
    "t0": "CG"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "YL"
  },
  {
    "s0": "background-image: url(/placeholders/provider-maha.svg);",
    "t0": "MAHA"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_nlc.svg);",
    "t0": "NLC"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_fiveg.svg);",
    "t0": "5G"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_relax.svg);",
    "t0": "RELAX"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_octoplay.svg);",
    "t0": "OCTOPLAY"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_hacksaw.svg);",
    "t0": "HACKSAW"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_acewin.svg);",
    "t0": "ACEWIN"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_combo.svg);",
    "t0": "COMBO"
  },
  {
    "s0": "background-image: url(/placeholders/provider-awcv2_gtf.svg);",
    "t0": "GTF"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "YGGDRASIL"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "MICROSLOT"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "PLAYSTAR"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "MMG"
  },
  {
    "s0": "background-image: url(/placeholders/darkIcon.svg);",
    "t0": "HABANERO"
  }
];

export default function LeftGameOrionLayout4() {
  return (
    <mcd-left-game-orion-layout class="ng-h-3295987738">
      <ul className="ng-c-3295987738 item-box left-menu__vendor-box">
        {LEFTGAMEORIONLAYOUT4_LIST.map((it, i) => (
          <li key={i} className="ng-c-3295987738 left-menu__subnav-item" game-type="1" web-category-type="VENDOR">
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
