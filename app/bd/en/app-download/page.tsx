import SiteShell from '@/components/shell/SiteShell';

// The original renders no public content for this route (empty shell without a session).
export default function Page() {
  return (
    <SiteShell>
      <ng-component></ng-component>
    </SiteShell>
  );
}
