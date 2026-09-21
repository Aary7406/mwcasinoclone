import { PromotionContent, PromotionHeader } from '@/components/generated';
import SiteShell from '@/components/shell/SiteShell';

export default function Promotion() {
  return (
    <SiteShell>
      <ng-component>
        <PromotionHeader />
        <PromotionContent />
      </ng-component>
    </SiteShell>
  );
}
