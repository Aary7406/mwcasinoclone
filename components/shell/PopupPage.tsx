import type { ReactNode } from 'react';

type Props = { active?: boolean; title?: string; children?: ReactNode };

/** Right-hand popup route container (used by the winner-board route). */
export default function PopupPage({ active = false, title = '', children }: Props) {
  return (
    <mcd-popup-page class={`ng-c-2549941485 ng-h-2617203906 popup-page-wrapper${active ? ' active' : ''}`}>
      <div className={`ng-c-2617203906 popup-page${active ? ' popup-page--active popup-page--align-top' : ''}`}>
        <div className="ng-c-2617203906 popup-page__backdrop"></div>
        <div className={`ng-c-2617203906 popup-page__main popup-page-main${active ? ' popup-page-main--show' : ''}`}>
          <div className="ng-c-2617203906 popup-page-main__header">
            <div className="ng-c-2617203906 popup-page-main__title">{title}</div>
            <div className="ng-c-2617203906 popup-page-main__close "></div>
          </div>
          <div className="ng-c-2617203906 popup-page-main__container">
            <div className={`ng-c-2617203906 content mcd-style${active ? ' player-content' : ''}`}>
              {active ? <ng-component>{children}</ng-component> : null}
            </div>
          </div>
        </div>
      </div>
    </mcd-popup-page>
  );
}
