'use client';

import { useState } from 'react';
import CarouselFrameAlpha from '../generated/CarouselFrameAlpha';
import GameBox from '../generated/GameBox';
import vendorGames from '@/lib/vendor-games.json';

const TABS = ['FC', 'JILI', 'JDB', 'PP', 'WorldMatch', 'FastSpin'] as const;

/** Featured Games vendor tabs: clicking one swaps the grid to that vendor's games. */
export default function FeatureGamesOrion() {
  const [active, setActive] = useState<(typeof TABS)[number]>('FC');
  const games = (vendorGames as Record<string, { src: string; alt: string }[]>)[active] ?? [];

  return (
    <mcd-feature-games-orion class="ng-c-576795117 ng-h-2153227597">
      <div className="ng-c-2153227597 recommend-orion">
        <div className="ng-c-2153227597 recommend-title">
          <h2 className="ng-c-2153227597">Featured Games</h2>
        </div>
        <div className="ng-c-2153227597 recommend-bg games feature-games-orion">
          <div className="ng-c-2153227597 slot-slider-banner">
            <CarouselFrameAlpha />
          </div>
          <div className="ng-c-2153227597 recommend-main">
            <ul className="ng-c-2153227597 games-tab-group">
              {TABS.map(tab => (
                <li key={tab} className={`ng-c-2153227597 ${tab === active ? 'active' : ''}`} onClick={() => setActive(tab)}>
                  {` ${tab} `}
                </li>
              ))}
            </ul>
            <div className="ng-c-2153227597 games-result-group">
              {games.map((g, i) => (
                <GameBox key={active + i} alt0={g.alt} src0={g.src} t0={g.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </mcd-feature-games-orion>
  );
}
