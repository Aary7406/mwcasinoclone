import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEFTGAMEORIONLAYOUT_LIST: Row[] = [
  {
    "gametype0": "1",
    "vendorcode0": "MG",
    "s0": "background-image: url(/assets/real/467cd5d98d.png);",
    "t0": "Cricket Century Kings"
  },
  {
    "gametype0": "256",
    "vendorcode0": "AWCV2_KINGMAKER",
    "s0": "background-image: url(/assets/real/a06c0ae6d3.png);",
    "t0": "7 Up 7 Down Rush"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/46c3546fb4.png);",
    "t0": "Fortune Garuda 1000"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_PP",
    "s0": "background-image: url(/assets/real/00a252f5af.png);",
    "t0": "NCVIP Gates of Olympus 1000"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_FC",
    "s0": "background-image: url(/assets/real/6ead713407.png);",
    "t0": "NCVIP Super Elements"
  },
  {
    "gametype0": "8192",
    "vendorcode0": "MG",
    "s0": "background-image: url(/assets/real/1f73d7d132.png);",
    "t0": "FlyX"
  },
  {
    "gametype0": "1",
    "vendorcode0": "MG",
    "s0": "background-image: url(/assets/real/2371a5c878.png);",
    "t0": "Pocket Ace"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_YESBINGO",
    "s0": "background-image: url(/assets/real/02bb468c2a.png);",
    "t0": "Calavera Fiesta"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_SEXYBCRT",
    "s0": "background-image: url(/assets/real/bfd7897bd4.png);",
    "t0": "Sexy Baccarat"
  },
  {
    "gametype0": "1",
    "vendorcode0": "MG",
    "s0": "background-image: url(/assets/real/9223e226cc.webp);",
    "t0": "NC Bountiful Birds"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/5ebe3d9550.webp);",
    "t0": "Super Ace Speed Exclusive"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_PP",
    "s0": "background-image: url(/assets/real/9d9febb422.webp);",
    "t0": "Fortune Ace Super Scatter"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/449155e85a.webp);",
    "t0": "Fortune Gems 500"
  },
  {
    "gametype0": "8192",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/be529c35c2.webp);",
    "t0": "NCVIP Aviator"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/b679222ca0.webp);",
    "t0": "Super Ace"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JDB",
    "s0": "background-image: url(/assets/real/1cc0597604.webp);",
    "t0": "Fruity Bonanza"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_PG",
    "s0": "background-image: url(/assets/real/467515e555.webp);",
    "t0": "Wild Bounty Showdown"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JDB",
    "s0": "background-image: url(/assets/real/1847755945.webp);",
    "t0": "Magic Ace WILD LOCK"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_YESBINGO",
    "s0": "background-image: url(/assets/real/9dd43c8f1a.png);",
    "t0": "Royal Ace"
  },
  {
    "gametype0": "1024",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/d94962652e.png);",
    "t0": "Chicken Dash 10000"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_EVOLUTION",
    "s0": "background-image: url(/assets/real/340e767830.webp);",
    "t0": "Crazy Time"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_EVOLUTION",
    "s0": "background-image: url(/assets/real/01d160cdc9.png);",
    "t0": "NCVIP Speed Baccarat"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_PP",
    "s0": "background-image: url(/assets/real/0bbc4a8ccd.png);",
    "t0": "Mega Wheel"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_FC",
    "s0": "background-image: url(/assets/real/b24403eb44.png);",
    "t0": "DJ Boom Boom"
  }
];

export default function LeftGameOrionLayout() {
  return (
    <mcd-left-game-orion-layout class="ng-h-3295987738">
      <ul className="ng-c-3295987738 item-box left-menu__vendor-box">
        {LEFTGAMEORIONLAYOUT_LIST.map((it, i) => (
          <li key={i} className="ng-c-3295987738 left-menu__subnav-item" game-type={it.gametype0} vendor-code={it.vendorcode0} web-category-type="GAME">
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
