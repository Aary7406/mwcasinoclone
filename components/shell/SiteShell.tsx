import type { ReactNode } from 'react';
import { FooterInner, HeaderOrion, LeftMenuOrion } from '@/components/generated';
import LayoutDesktop from './LayoutDesktop';
import MainContentArea from './MainContentArea';
import { MenuProvider } from './MenuContext';
import PopupPage from './PopupPage';

type Props = { children: ReactNode; popup?: { title: string; content: ReactNode } };

/** Desktop page frame: header, routed content, footer, left menu and the popup-page slot. */
export default function SiteShell({ children, popup }: Props) {
  return (
    <MenuProvider>
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
      <PopupPage active={!!popup} title={popup?.title}>
        {popup?.content}
      </PopupPage>
    </mcd-root>
    </MenuProvider>
  );
}
