import type { ReactNode } from 'react';
import { FooterInner, HeaderOrion, LeftMenuOrion } from '@/components/generated';
import AuthModal from '../overrides/AuthModal';
import { AuthModalProvider } from './AuthModalContext';
import GameGateInterceptor from './GameGateInterceptor';
import LayoutDesktop from './LayoutDesktop';
import MainContentArea from './MainContentArea';
import { MenuProvider } from './MenuContext';
import PopupPage from './PopupPage';

type Props = { children: ReactNode; popup?: { title: string; content: ReactNode; closeHref?: string } };

/** Desktop page frame: header, routed content, footer, left menu, the route-backed popup
 * slot (e.g. winner-board) and the globally-triggerable login/signup modal. */
export default function SiteShell({ children, popup }: Props) {
  return (
    <MenuProvider>
    <AuthModalProvider>
    <mcd-root class="ng-h-2549941485">
      <div className="ng-c-2549941485 main-router-wrapper mcd-style">
        <ng-component class="ng-h-693957431">
          <LayoutDesktop>
            <div className="ng-c-693957431 layout-desktop__inner">
              <MainContentArea>
                <HeaderOrion />
                <div className="ng-c-693957431 layout-desktop__body">
                  <div className="ng-c-693957431 layout-desktop__content">{children}</div>
                  <FooterInner />
                </div>
              </MainContentArea>
              <LeftMenuOrion />
            </div>
          </LayoutDesktop>
        </ng-component>
      </div>
      {popup && (
        <PopupPage active title={popup.title} closeHref={popup.closeHref}>
          {popup.content}
        </PopupPage>
      )}
      <AuthModal />
      <GameGateInterceptor />
    </mcd-root>
    </AuthModalProvider>
    </MenuProvider>
  );
}
