import { notFound } from 'next/navigation';
import GameLobby, { type LobbyData } from '@/components/lobby/GameLobby';
import SiteShell from '@/components/shell/SiteShell';

const SLUGS = ['casino', 'slot', 'crash', 'table', 'fishing', 'arcade', 'lottery'];

export function generateStaticParams() {
  return SLUGS.map(category => ({ category }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ category: string }>; searchParams: Promise<{ vendor?: string }> };

/** One lobby view per category (e.g. /bd/en/crash?vendor=awcv2_jdb), same as the source's URLs. */
export default async function CategoryLobby({ params, searchParams }: Props) {
  const { category } = await params;
  if (!SLUGS.includes(category)) notFound();
  const { vendor = '' } = await searchParams;
  const data = (await import(`@/lib/lobby/${category}.json`)).default as LobbyData;
  const initialVendors = vendor.split(',').filter(v => data.vendors.some(x => x.vendor === v));

  return (
    <SiteShell>
      <GameLobby key={category} data={data} initialVendors={initialVendors} />
    </SiteShell>
  );
}
