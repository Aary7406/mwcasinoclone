import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const GAMEHEADERNAVORION_LIST: Row[] = [
  {
    "gametype0": "1",
    "vendorcode0": "MG",
    "s0": "background-image: url(/assets/real/9f9f939a1c.png);",
    "t0": "Cricket Century Kings"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_YESBINGO",
    "s0": "background-image: url(/assets/real/8d73033587.png);",
    "t0": "Dragon Gems 500"
  },
  {
    "gametype0": "256",
    "vendorcode0": "AWCV2_KINGMAKER",
    "s0": "background-image: url(/assets/real/e3325fe528.png);",
    "t0": "7 Up 7 Down Rush"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/2f14ce0419.png);",
    "t0": "Fortune Garuda 1000"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_PP",
    "s0": "background-image: url(/assets/real/86b27a274d.png);",
    "t0": "NCVIP Gates of Olympus 1000"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_FC",
    "s0": "background-image: url(/assets/real/c4370aa042.png);",
    "t0": "NCVIP Super Elements"
  },
  {
    "gametype0": "8192",
    "vendorcode0": "MG",
    "s0": "background-image: url(/assets/real/314a92e565.png);",
    "t0": "FlyX"
  },
  {
    "gametype0": "1",
    "vendorcode0": "MG",
    "s0": "background-image: url(/assets/real/fb665f961a.png);",
    "t0": "Pocket Ace"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_YESBINGO",
    "s0": "background-image: url(/assets/real/ab1cca8e94.png);",
    "t0": "Calavera Fiesta"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_SEXYBCRT",
    "s0": "background-image: url(/assets/real/127d708098.png);",
    "t0": "Sexy Baccarat"
  },
  {
    "gametype0": "1",
    "vendorcode0": "MG",
    "s0": "background-image: url(/assets/real/2926dd943c.webp);",
    "t0": "NC Bountiful Birds"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/98fe1bad89.webp);",
    "t0": "Super Ace Speed Exclusive"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_PP",
    "s0": "background-image: url(/assets/real/51c6ffc0e7.webp);",
    "t0": "Fortune Ace Super Scatter"
  },
  {
    "gametype0": "8192",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/4b65482a8c.webp);",
    "t0": "NCVIP Aviator"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/0ca7bf7d14.webp);",
    "t0": "Fortune Gems 500"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/aea88494f9.webp);",
    "t0": "Super Ace"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_JDB",
    "s0": "background-image: url(/assets/real/dc359e8801.webp);",
    "t0": "Fruity Bonanza"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_PG",
    "s0": "background-image: url(/assets/real/7b9474ccfd.webp);",
    "t0": "Wild Bounty Showdown"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_YESBINGO",
    "s0": "background-image: url(/assets/real/012cdab8cd.png);",
    "t0": "Royal Ace"
  },
  {
    "gametype0": "1024",
    "vendorcode0": "AWCV2_JILI",
    "s0": "background-image: url(/assets/real/2301e3bfd7.png);",
    "t0": "Chicken Dash 10000"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_EVOLUTION",
    "s0": "background-image: url(/assets/real/8bd463a058.webp);",
    "t0": "Crazy Time"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_EVOLUTION",
    "s0": "background-image: url(/assets/real/22f467ba4c.png);",
    "t0": "NCVIP Speed Baccarat"
  },
  {
    "gametype0": "2",
    "vendorcode0": "AWCV2_PP",
    "s0": "background-image: url(/assets/real/8532cd9bdd.png);",
    "t0": "Mega Wheel"
  },
  {
    "gametype0": "1",
    "vendorcode0": "AWCV2_FC",
    "s0": "background-image: url(/assets/real/83a5488e7a.png);",
    "t0": "DJ Boom Boom"
  }
];

export default function GameHeaderNavOrion() {
  return (
    <mcd-game-header-nav-orion class="ng-c-3671529244 ng-h-2843435143 navbar__item">
      <li className="ng-c-2843435143 navbar__item" data-category="HOT">
        <div className="ng-c-2843435143 navbar__item-head">
          {" HOT "}
          <i className="ng-c-2843435143 navbar__item-arrow" style={{"maskImage":"url(/assets/images/icon-set/player/kyc/accordion-arrow.svg)"}}></i>
        </div>
        <div className="ng-c-2843435143 navbar__sub-nav">
          <ol className="ng-c-2843435143 navbar__sub-nav-inner">
            {GAMEHEADERNAVORION_LIST.map((it, i) => (
              <li key={i} className="ng-c-2843435143 navbar__sub-nav-item" game-type={it.gametype0} vendor-code={it.vendorcode0} web-category-type="GAME">
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
