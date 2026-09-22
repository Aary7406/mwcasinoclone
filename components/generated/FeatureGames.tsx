type Row = Record<string, string>;

const FEATUREGAMES_LIST: Row[] = [
  {
    "alt0": "Lucky Tamarin",
    "src0": "/assets/real/1ee62b2891.webp",
    "t0": "Lucky Tamarin"
  },
  {
    "alt0": "Fortune Garuda 1000",
    "src0": "/assets/real/434b3faccc.webp",
    "t0": "Fortune Garuda 1000"
  },
  {
    "alt0": "Super Ace Speed Exclusive",
    "src0": "/assets/real/7e4b434914.png",
    "t0": "Super Ace Speed Exclusive"
  },
  {
    "alt0": "Super Ace",
    "src0": "/assets/real/6e54686bd9.png",
    "t0": "Super Ace"
  },
  {
    "alt0": "Fortune Ace Super Scatter",
    "src0": "https://img.m167cw.com/upload/game/AWCV2_PP/PP-SLOT-598.Fortune Ace Super Scatter.png",
    "t0": "Fortune Ace Super Scatter"
  },
  {
    "alt0": "Crazy Time",
    "src0": "/assets/real/e504e1aa2b.webp",
    "t0": "Crazy Time"
  }
];

export default function FeatureGames() {
  return (
    <mcd-feature-games class="ng-c-576795117 ng-h-185242981">
      <div className="ng-c-185242981 recommend">
        <div className="ng-c-185242981 recommend-title">
          <h2 className="ng-c-185242981">
            Popular Games
          </h2>
        </div>
        <div className="ng-c-185242981 recommend-bg games">
          <div className="ng-c-185242981 recommend-main games-main">
            {FEATUREGAMES_LIST.map((it, i) => (
              <div key={i} className="ng-c-185242981 games-box">
                <div className="ng-c-185242981 pic">
                  <a className="ng-c-185242981">
                    <img className="ng-c-185242981" alt={it.alt0} loading="lazy" src={it.src0} />
                  </a>
                </div>
                <div className="ng-c-185242981 text">
                  <h3 className="ng-c-185242981">
                    {it.t0}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </mcd-feature-games>
  );
}
