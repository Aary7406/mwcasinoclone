import CarouselFrameAlpha from './CarouselFrameAlpha';
import GameBox from './GameBox';
import type { ComponentProps } from 'react';

type Row = Record<string, string>;

const FEATUREGAMESORION_LIST: Row[] = [
  {
    "cls": "active",
    "t0": " FC "
  },
  {
    "cls": "",
    "t0": " JILI "
  },
  {
    "cls": "",
    "t0": " JDB "
  },
  {
    "cls": "",
    "t0": " PP "
  },
  {
    "cls": "",
    "t0": " WorldMatch "
  },
  {
    "cls": "",
    "t0": " FastSpin "
  }
];

const FEATUREGAMESORION_LIST1: ComponentProps<typeof GameBox>[] = [
  {
    "alt0": "FC GOLDEN GENIE",
    "src0": "/placeholders/FC-SLOT-028.svg",
    "t0": "FC GOLDEN GENIE"
  },
  {
    "alt0": "FC SUPER ELEMENTS",
    "src0": "/placeholders/FC-SLOT-049.svg",
    "t0": "FC SUPER ELEMENTS"
  },
  {
    "alt0": "FC CHINESE NEW YEAR",
    "src0": "/placeholders/FC-SLOT-007.svg",
    "t0": "FC CHINESE NEW YEAR"
  },
  {
    "alt0": "FC LEGEND OF INCA",
    "src0": "/placeholders/FC-SLOT-034.svg",
    "t0": "FC LEGEND OF INCA"
  },
  {
    "alt0": "FC CHINESE NEW YEAR 2",
    "src0": "/placeholders/FC-SLOT-022.svg",
    "t0": "FC CHINESE NEW YEAR 2"
  },
  {
    "alt0": "FC FORTUNE GODDESS",
    "src0": "/placeholders/FC-SLOT-041.svg",
    "t0": "FC FORTUNE GODDESS"
  },
  {
    "alt0": "FC CHINESE NEW YEAR MOREWAYS",
    "src0": "/placeholders/FC-SLOT-043.svg",
    "t0": "FC CHINESE NEW YEAR MOREWAYS"
  },
  {
    "alt0": "FC NIGHT MARKET",
    "src0": "/placeholders/FC-SLOT-004.svg",
    "t0": "FC NIGHT MARKET"
  },
  {
    "alt0": "FC TREASURE RAIDERS",
    "src0": "/placeholders/FC-SLOT-024.svg",
    "t0": "FC TREASURE RAIDERS"
  },
  {
    "alt0": "FC SUGAR BANG BANG 2",
    "src0": "/placeholders/FC-SLOT-048.svg",
    "t0": "FC SUGAR BANG BANG 2"
  }
];

export default function FeatureGamesOrion() {
  return (
    <mcd-feature-games-orion class="ng-c-576795117 ng-h-2153227597">
      <div className="ng-c-2153227597 recommend-orion">
        <div className="ng-c-2153227597 recommend-title">
          <h2 className="ng-c-2153227597">
            Featured Games
          </h2>
        </div>
        <div className="ng-c-2153227597 recommend-bg games feature-games-orion">
          <div className="ng-c-2153227597 slot-slider-banner">
            <CarouselFrameAlpha />
          </div>
          <div className="ng-c-2153227597 recommend-main">
            <ul className="ng-c-2153227597 games-tab-group">
              {FEATUREGAMESORION_LIST.map((it, i) => (
                <li key={i} className={"ng-c-2153227597 " + it.cls}>
                  {it.t0}
                </li>
              ))}
            </ul>
            <div className="ng-c-2153227597 games-result-group">
              {FEATUREGAMESORION_LIST1.map((it, i) => (
                <GameBox key={i} {...it} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </mcd-feature-games-orion>
  );
}
