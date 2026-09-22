import type { ReactNode } from 'react';
import GuideHeader from '@/components/guide-overrides/GuideHeader';
import GuideToast from '@/components/guide-overrides/GuideToast';
import { GuideFooter } from '@/components/generated';

/** Shell for the mcwguide.com info-centre pages (about/privacy/security/faq/...). */
export default function GuideShell({ children }: { children: ReactNode }) {
  return (
    <div className="guide-site">
      <main className="contentContainer">
        <GuideHeader />
        <div className="container">{children}</div>
      </main>
      <GuideFooter />
      <GuideToast />
    </div>
  );
}
