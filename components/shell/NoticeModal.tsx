'use client';

import { useState } from 'react';

/** "Important Notice" dialog shown on first paint of the home route. Static copy. */
export default function NoticeModal() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop dialog-backdrop cdk-overlay-backdrop-showing" onClick={() => setOpen(false)}></div>
      <div className="cdk-global-overlay-wrapper" dir="ltr" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div id="cdk-overlay-0" className="cdk-overlay-pane dialog-panel" style={{ position: 'static' }}>
          <mcd-dialog class="ng-h-2230345302">
            <div className="ng-c-2230345302 popup" id="dialog-0">
              <div className="ng-c-2230345302 popup__header"></div>
              <div className="ng-c-2230345302 popup__content">
                <mcd-promotion-info class="ng-h-1109965089">
                  <div className="ng-c-1109965089 pop-wrap promotion-pop new ani show">
                    <a
                      className="ng-c-1109965089 btn-close"
                      role="button"
                      aria-label="Close"
                      onClick={() => setOpen(false)}
                      style={{ maskImage: 'url(/assets/images/icon-set/base/icon-close.svg)' }}
                    ></a>
                    <div className="ng-c-1109965089 pop-title">
                      <h3 className="ng-c-1109965089">{' 📢 Important Notice – Night Deposit Availability '}</h3>
                    </div>
                    <div className="ng-c-1109965089 pop-inner content-style">
                      <div className="ng-c-1109965089">
                        <p>
                          Due to recent changes in the e-wallet system, deposit options may be limited after <b>2:00 AM</b>.<br />
                          <br />
                          We kindly recommend planning your deposits in advance to avoid any inconvenience or <b>“No Shops Available”</b> situations during late-night hours.
                          <br />
                          <br />
                          Thank you for your understanding and cooperation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ng-c-1109965089 pop-bg" style={{ display: 'block' }}></div>
                </mcd-promotion-info>
              </div>
            </div>
          </mcd-dialog>
        </div>
      </div>
    </div>
  );
}
