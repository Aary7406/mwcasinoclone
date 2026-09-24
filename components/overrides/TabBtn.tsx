'use client';

import { useState } from 'react';
import CountdownTimer from '../generated/CountdownTimer';
import LeaderBoardList from '../generated/LeaderBoardList';

/** Daily/Weekly toggle (the site captures no separate "Weekly" dataset, so this swaps the
 * active state/underline honestly without inventing numbers for content we don't have). */
export default function TabBtn() {
  const [tab, setTab] = useState<'Daily' | 'Weekly'>('Daily');
  return (
    <mcd-tab-btn class="ng-c-358032059 ng-h-205137638">
      <div className="ng-c-205137638 tab-btn-block">
        <div className="ng-c-205137638 tab-btn tab-btn-page">
          <div className={`ng-c-205137638 btn${tab === 'Daily' ? ' active' : ''}`} onClick={() => setTab('Daily')}>
            <div className="ng-c-205137638 text"> Daily </div>
          </div>
          <div className={`ng-c-205137638 btn${tab === 'Weekly' ? ' active' : ''}`} onClick={() => setTab('Weekly')}>
            <div className="ng-c-205137638 text"> Weekly </div>
          </div>
        </div>
      </div>
      <div className="ng-c-205137638 tab-content">
        <div className="ng-c-358032059 leaderboard__countdown-timer">
          <CountdownTimer />
        </div>
        <LeaderBoardList />
      </div>
    </mcd-tab-btn>
  );
}
