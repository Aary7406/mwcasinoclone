'use client';

import { useEffect, useRef, useState } from 'react';

const TEXT = (
  <>
    <span>MCW Advisory: Having problems accessing the MCW site? Visit </span>
    <a href="https://mcwlinks.com/bn/" target="_blank">
      <span>https://mcwlinks.com/bn/</span>
    </a>
    <span> to see the latest active links and continue to enjoy your favorite games!</span>
  </>
);

/** Scrolling advisory ticker (the original drives this via JS transform; here it's a looping CSS animation sized to its own content width). */
export default function Marquee() {
  const itemRef = useRef<HTMLLIElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (itemRef.current) setWidth(itemRef.current.getBoundingClientRect().width);
  }, []);

  return (
    <mcd-marquee class="ng-c-576795117 ng-h-1790478041">
      <div className="ng-c-1790478041 announcement-row">
        <div className="ng-c-1790478041 marquee">
          <span className="ng-c-1790478041 item-icon-wrap">
            <i className="ng-c-1790478041 item-icon" style={{ maskImage: 'url(/assets/images/icon-set/base/announcement-icon.svg)' }}></i>
          </span>
          <ul
            className="ng-c-1790478041"
            style={
              width
                ? { display: 'flex', width: 'max-content', animation: `mcw-marquee ${Math.max(width / 60, 8)}s linear infinite` }
                : { display: 'flex', width: 'fit-content' }
            }
          >
            <li className="ng-c-1790478041" ref={itemRef}>
              <span className="ng-c-1790478041">
                <p>{TEXT}</p>
              </span>
            </li>
            {width > 0 && (
              <li className="ng-c-1790478041" aria-hidden="true">
                <span className="ng-c-1790478041">
                  <p>{TEXT}</p>
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
      <style>{`@keyframes mcw-marquee { from { transform: translateX(0); } to { transform: translateX(-${width}px); } }`}</style>
    </mcd-marquee>
  );
}
