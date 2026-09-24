'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

type Props = { active?: boolean; title?: string; contentClassName?: string; onClose?: () => void; closeHref?: string; children?: ReactNode };

/** Popup route container: the same shell drives the wide top-aligned winner-board panel
 * and the narrow centered login/signup dialog — the visual difference comes entirely from
 * the `.content` element's own modifier classes (`contentClassName`), matching the source.
 * Pass either `onClose` (in-place dismiss, e.g. the auth modal) or `closeHref` (a route-backed
 * popup like winner-board, where closing means navigating back). */
export default function PopupPage({ active = false, title = '', contentClassName = 'player-content', onClose, closeHref, children }: Props) {
  const router = useRouter();
  const close = onClose ?? (closeHref ? () => router.push(closeHref) : undefined);
  return (
    <mcd-popup-page class={`ng-c-2549941485 ng-h-2617203906 popup-page-wrapper${active ? ' active' : ''}`}>
      <div className={`ng-c-2617203906 popup-page${active ? ' popup-page--active popup-page--align-top' : ''}`}>
        <div className="ng-c-2617203906 popup-page__backdrop" onClick={close}></div>
        <div className={`ng-c-2617203906 popup-page__main popup-page-main${active ? ' popup-page-main--show' : ''}`}>
          <div className="ng-c-2617203906 popup-page-main__header">
            <div className="ng-c-2617203906 popup-page-main__title">{title}</div>
            <div className="ng-c-2617203906 popup-page-main__close" onClick={close}></div>
          </div>
          <div className="ng-c-2617203906 popup-page-main__container">
            <div className={`ng-c-2617203906 content mcd-style${active ? ' ' + contentClassName : ''}`}>
              {active ? <ng-component>{children}</ng-component> : null}
            </div>
          </div>
        </div>
      </div>
    </mcd-popup-page>
  );
}
