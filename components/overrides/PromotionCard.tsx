'use client';

import { useState } from 'react';
import { useAuthModal } from '../shell/AuthModalContext';

export default function PromotionCard(p: { alt0: string; src0: string; t0: string; t1: string; t2: string }) {
  const { openLogin } = useAuthModal();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <mcd-promotion-card class="ng-c-3913105429 ng-h-2644530352">
      <div className="ng-c-2644530352 promotion-box promotion-toggle">
        <div className="ng-c-2644530352 pic">
          <img className="ng-c-2644530352" alt={p.alt0} loading="lazy" src={p.src0} />
        </div>
        <div className="ng-c-2644530352 promotion-box-inner content-style">
          <div className="ng-c-2644530352 text-main">
            <h3 className="ng-c-2644530352">{p.t0}</h3>
            <p className="ng-c-2644530352">{p.t1}</p>
          </div>
          <div className="ng-c-2644530352 times">
            <i className="ng-c-2644530352" style={{ maskImage: 'url(/assets/images/icon-set/icon-clock.svg)' }}></i>
            <span className="ng-c-2644530352">{p.t2}</span>
          </div>
          {showDetails && (
            <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 6, padding: '0.8rem 1rem', margin: '0 0 0.8rem', fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,.75)' }}>
              <strong style={{ display: 'block', marginBottom: 4, color: '#ffd259' }}>{p.t1}</strong>
              {p.t0}
              <br />
              Valid: {p.t2}
            </div>
          )}
          <div className="ng-c-2644530352 button-box">
            <div className="ng-c-2644530352 button button__apply" tabIndex={0} onClick={openLogin}>
              <span className="ng-c-2644530352"> Register Now </span>
            </div>
            <div className="ng-c-2644530352 button btn-primary button__detail" tabIndex={0} onClick={() => setShowDetails(v => !v)}>
              <span className="ng-c-2644530352">{showDetails ? ' Hide ' : ' Details '}</span>
            </div>
          </div>
        </div>
      </div>
    </mcd-promotion-card>
  );
}
