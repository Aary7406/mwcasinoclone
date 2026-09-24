'use client';

import { useState } from 'react';
import LeaderBoard from '../generated/LeaderBoard';

/** Leader Board / First To Reach toggle. Only "Leader Board" content was ever captured from
 * the source, so "First To Reach" honestly shows a placeholder rather than invented data. */
export default function TabNav() {
  const [tab, setTab] = useState<'Leader Board' | 'First To Reach'>('Leader Board');
  return (
    <mcd-tab-nav class="ng-c-2497579489 ng-h-2762748009">
      <div className="ng-c-2762748009 tabs">
        <div className="ng-c-2762748009 tab-btn tab-btn-page fixed-tab">
          <div className="ng-c-2762748009 line" style={{ width: 'calc(50%)', transform: `translate(${tab === 'Leader Board' ? '0%' : '100%'}, 0px)` }}></div>
          <div className="ng-c-2762748009 btn" data-tab-current={tab === 'Leader Board' ? 'current' : ''} onClick={() => setTab('Leader Board')}>
            <div className="ng-c-2762748009 text"> Leader Board </div>
          </div>
          <div className="ng-c-2762748009 btn" data-tab-current={tab === 'First To Reach' ? 'current' : ''} onClick={() => setTab('First To Reach')}>
            <div className="ng-c-2762748009 text"> First To Reach </div>
          </div>
        </div>
        <div className="ng-c-2762748009 tab-content tab-content-page">
          <router-outlet class="ng-c-2497579489"></router-outlet>
          {tab === 'Leader Board' ? (
            <LeaderBoard />
          ) : (
            // Matches the real site: "First To Reach" has no active promo right now either —
            // confirmed live, it shows the same empty state rather than any data.
            <div style={{ margin: '1.6rem', padding: '4rem 1.6rem', textAlign: 'center', background: 'rgba(255,255,255,.04)', borderRadius: 8, color: 'rgba(255,255,255,.5)' }}>
              No Record
            </div>
          )}
        </div>
      </div>
    </mcd-tab-nav>
  );
}
