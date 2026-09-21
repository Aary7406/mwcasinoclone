import { HomeContent } from '@/components/generated';
import SiteShell from '@/components/shell/SiteShell';
import NoticeModal from '@/components/shell/NoticeModal';

export default function Home() {
  return (
    <SiteShell>
      <ng-component>
        <HomeContent />
      </ng-component>
      <NoticeModal />
    </SiteShell>
  );
}
