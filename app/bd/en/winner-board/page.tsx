import { HomeContent, WinnerBoardPanel } from '@/components/generated';
import SiteShell from '@/components/shell/SiteShell';

export default function WinnerBoard() {
  return (
    <SiteShell popup={{ title: 'Winner Board', content: <WinnerBoardPanel /> }}>
      <ng-component>
        <HomeContent />
      </ng-component>
    </SiteShell>
  );
}
