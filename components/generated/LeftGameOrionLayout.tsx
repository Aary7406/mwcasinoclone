type Row = Record<string, string>;

const LEFTGAMEORIONLAYOUT_LIST: Row[] = [
  {
    "gametype0": "1",
    "vendorcode0": "MG",
    "t0": "Cricket Century Kings"
  },
  {
    "gametype0": "256",
    "vendorcode0": "AWCV2_KINGMAKER",
    "t0": "7 Up 7 Down Rush"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "t0": "Fortune Garuda 1000"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_PP",
    "t0": "NCVIP Gates of Olympus 1000"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_FC",
    "t0": "NCVIP Super Elements"
  },
  {
    "gametype0": "8192",
    "vendorcode0": "MG",
    "t0": "FlyX"
  },
  {
    "gametype0": "1",
    "vendorcode0": "MG",
    "t0": "Pocket Ace"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_YESBINGO",
    "t0": "Calavera Fiesta"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_SEXYBCRT",
    "t0": "Sexy Baccarat"
  },
  {
    "gametype0": "1",
    "vendorcode0": "MG",
    "t0": "NC Bountiful Birds"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "t0": "Super Ace Speed Exclusive"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_PP",
    "t0": "Fortune Ace Super Scatter"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "t0": "Fortune Gems 500"
  },
  {
    "gametype0": "8192",
    "vendorcode0": "AWCV2_JILI",
    "t0": "NCVIP Aviator"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "t0": "Super Ace"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JDB",
    "t0": "Fruity Bonanza"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_PG",
    "t0": "Wild Bounty Showdown"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JDB",
    "t0": "Magic Ace WILD LOCK"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_YESBINGO",
    "t0": "Royal Ace"
  },
  {
    "gametype0": "1024",
    "vendorcode0": "AWCV2_JILI",
    "t0": "Chicken Dash 10000"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_EVOLUTION",
    "t0": "Crazy Time"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_EVOLUTION",
    "t0": "NCVIP Speed Baccarat"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_PP",
    "t0": "Mega Wheel"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_FC",
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
              <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={{"backgroundImage":"url(/placeholders/darkIcon.svg)"}}></div>
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
