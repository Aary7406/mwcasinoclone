import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEADERBOARDLIST_LIST: Row[] = [
  {
    "s0": "background-image: url(/assets/images/winner-board/bg-silver.webp);",
    "s1": "background-image: url(/assets/images/winner-board/crown-silver.webp);",
    "s2": "background-image: url(/assets/real/6e54686bd9.png);",
    "t0": " Super Ace ",
    "t1": " ra***90 ",
    "t2": " ৳ 1,318,100 ",
    "t3": " 2,000 ",
    "t4": " 2 "
  },
  {
    "s0": "background-image: url(/assets/images/winner-board/bg-gold.webp);",
    "s1": "background-image: url(/assets/images/winner-board/crown-gold.webp);",
    "s2": "background-image: url(/assets/real/09352fbf30.png);",
    "t0": " NCVIP Gates of Olympus 1000 ",
    "t1": " 01***01 ",
    "t2": " ৳ 1,464,900 ",
    "t3": " 3,000 ",
    "t4": " 1 "
  },
  {
    "s0": "background-image: url(/assets/images/winner-board/bg-bronze.webp);",
    "s1": "background-image: url(/assets/images/winner-board/crown-bronze.webp);",
    "s2": "background-image: url(/assets/real/de63c1dd2e.webp);",
    "t0": " Fortune Garuda 500 ",
    "t1": " fy***69 ",
    "t2": " ৳ 982,000 ",
    "t3": " 1,500 ",
    "t4": " 3 "
  }
];

const LEADERBOARDLIST_LIST1: Row[] = [
  {
    "cls": "leader-board-list__t3-item-game-name",
    "t0": " Super Ace "
  },
  {
    "cls": "leader-board-list__t3-item-user-name",
    "t0": " ra***90 "
  },
  {
    "cls": "leader-board-list__t3-item-amount",
    "t0": " ৳ 1,318,100 "
  }
];

const LEADERBOARDLIST_LIST2: Row[] = [
  {
    "t0": " 4 ",
    "src0": "/assets/real/6e54686bd9.png",
    "t1": " Super Ace ",
    "t2": " ja***62 ",
    "t3": " ৳ 280,575 "
  },
  {
    "t0": " 5 ",
    "src0": "/assets/real/2ad454ce05.png",
    "t1": " SUPER ELEMENTS ",
    "t2": " si***31 ",
    "t3": " ৳ 265,500 "
  },
  {
    "t0": " 6 ",
    "src0": "/assets/real/434b3faccc.webp",
    "t1": " Fortune Garuda 1000 ",
    "t2": " 11***im ",
    "t3": " ৳ 204,100 "
  },
  {
    "t0": " 7 ",
    "src0": "https://img.m167cw.com/upload/game/MG/SMG_treasureGems.Treasure Gems.png?v=1764335997474",
    "t1": " Treasure Gems ",
    "t2": " 01***47 ",
    "t3": " ৳ 199,800 "
  },
  {
    "t0": " 8 ",
    "src0": "/assets/real/cea8735dc2.png",
    "t1": " Boxing King ",
    "t2": " mi***28 ",
    "t3": " ৳ 180,660 "
  },
  {
    "t0": " 9 ",
    "src0": "/assets/real/6e54686bd9.png",
    "t1": " Super Ace ",
    "t2": " sh***16 ",
    "t3": " ৳ 168,100 "
  },
  {
    "t0": " 10 ",
    "src0": "/assets/real/434b3faccc.webp",
    "t1": " Fortune Garuda 1000 ",
    "t2": " ba***72 ",
    "t3": " ৳ 164,280 "
  },
  {
    "t0": " 11 ",
    "src0": "/assets/real/99fb01576f.png",
    "t1": " Gates of Olympus Super Scatter ",
    "t2": " 56***oy ",
    "t3": " ৳ 161,920 "
  },
  {
    "t0": " 12 ",
    "src0": "/assets/real/434b3faccc.webp",
    "t1": " Fortune Garuda 1000 ",
    "t2": " pr***70 ",
    "t3": " ৳ 153,600 "
  },
  {
    "t0": " 13 ",
    "src0": "/assets/real/2ad454ce05.png",
    "t1": " SUPER ELEMENTS ",
    "t2": " es***88 ",
    "t3": " ৳ 145,830 "
  },
  {
    "t0": " 14 ",
    "src0": "/assets/real/434b3faccc.webp",
    "t1": " Fortune Garuda 1000 ",
    "t2": " sk***ss ",
    "t3": " ৳ 139,300 "
  },
  {
    "t0": " 15 ",
    "src0": "/assets/real/6e54686bd9.png",
    "t1": " Super Ace ",
    "t2": " ru***20 ",
    "t3": " ৳ 138,500 "
  },
  {
    "t0": " 16 ",
    "src0": "/assets/real/f7a078abd9.png",
    "t1": " Fortune Coins 2 ",
    "t2": " me***ed ",
    "t3": " ৳ 135,800 "
  },
  {
    "t0": " 17 ",
    "src0": "/assets/real/434b3faccc.webp",
    "t1": " Fortune Garuda 1000 ",
    "t2": " 01***27 ",
    "t3": " ৳ 131,800 "
  },
  {
    "t0": " 18 ",
    "src0": "/assets/real/20abbfafed.png",
    "t1": " NC Bountiful Birds ",
    "t2": " re***ee ",
    "t3": " ৳ 112,236 "
  },
  {
    "t0": " 19 ",
    "src0": "/assets/real/9f786afd6a.png",
    "t1": " Dragon Gems 500 ",
    "t2": " na***65 ",
    "t3": " ৳ 101,440 "
  },
  {
    "t0": " 20 ",
    "src0": "/assets/real/6e54686bd9.png",
    "t1": " Super Ace ",
    "t2": " md***65 ",
    "t3": " ৳ 100,887 "
  }
];

export default function LeaderBoardList() {
  return (
    <mcd-leader-board-list class="ng-c-358032059 ng-h-1526917685">
      <div className="ng-c-1526917685 leader-board-list">
        <div className="ng-c-1526917685 leader-board-list__t3">
          {LEADERBOARDLIST_LIST.map((it, i) => (
            <div key={i} className="ng-c-1526917685 leader-board-list__t3-item" style={sty(it.s0)}>
              <div className="ng-c-1526917685 leader-board-list__t3-item-crown" style={sty(it.s1)}></div>
              <div className="ng-c-1526917685 leader-board-list__t3-item-icon" style={sty(it.s2)}></div>
              <div className="ng-c-1526917685 leader-board-list__t3-item-content">
                {LEADERBOARDLIST_LIST1.map((it, i) => (
                  <div key={i} className={"ng-c-1526917685 " + it.cls}>
                    {it.t0}
                  </div>
                ))}
                <div className="ng-c-1526917685 leader-board-list__t3-item-prize">
                  <div className="ng-c-1526917685 leader-board-list__t3-item-prize-icon-bg">
                    <div className="ng-c-1526917685 leader-board-list__t3-item-prize-icon" style={{"maskImage":"url(/assets/images/winner-board/icon-reward.svg)"}}></div>
                  </div>
                  <div className="ng-c-1526917685 leader-board-list__t3-item-prize-amount">
                    {it.t3}
                  </div>
                </div>
              </div>
              <div className="ng-c-1526917685 leader-board-list__t3-item-rank">
                {it.t4}
              </div>
            </div>
          ))}
        </div>
        <div className="ng-c-1526917685 leader-board-list__rk">
          {LEADERBOARDLIST_LIST2.map((it, i) => (
            <div key={i} className="ng-c-1526917685 leader-board-list__rk-item">
              <div className="ng-c-1526917685 leader-board-list__rk-info-wrapper">
                <div className="ng-c-1526917685 leader-board-list__rk-info">
                  <div className="ng-c-1526917685 leader-board-list__rk-rank-number">
                    {it.t0}
                  </div>
                  <div className="ng-c-1526917685 leader-board-list__rk-game-icon">
                    <img className="ng-c-1526917685" alt="game-icon" loading="lazy" src={it.src0} />
                  </div>
                  <div className="ng-c-1526917685 leader-board-list__rk-game-name">
                    {it.t1}
                  </div>
                </div>
              </div>
              <div className="ng-c-1526917685 leader-board-list__rk-user-info">
                <div className="ng-c-1526917685 leader-board-list__rk-user-name">
                  {it.t2}
                </div>
                <div className="ng-c-1526917685 leader-board-list__rk-user-amount">
                  {it.t3}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ng-c-1526917685 leader-board-list__divider"></div>
        <div className="ng-c-1526917685 leader-board-list__usr-ranking-empty">
          {" Log in now to check your ranking! "}
        </div>
        <div className="ng-c-1526917685 leader-board-list__intersection-detector" id="isScrolledDetector"></div>
        <div className="ng-c-1526917685" id="isAllInViewportDetector"></div>
      </div>
    </mcd-leader-board-list>
  );
}
