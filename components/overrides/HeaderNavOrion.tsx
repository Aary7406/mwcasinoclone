'use client';

import { useEffect, useRef, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import navVendors from '@/lib/lobby/nav-vendors.json';
import GameHeaderNavOrion from '../generated/GameHeaderNavOrion';
import GameHeaderNavOrion2 from '../generated/GameHeaderNavOrion2';
import GameHeaderNavOrion3 from '../generated/GameHeaderNavOrion3';
import GameHeaderNavOrion4 from '../generated/GameHeaderNavOrion4';
import GameHeaderNavOrion5 from '../generated/GameHeaderNavOrion5';
import GameHeaderNavOrion6 from '../generated/GameHeaderNavOrion6';
import GameHeaderNavOrion7 from '../generated/GameHeaderNavOrion7';
import GameHeaderNavOrion8 from '../generated/GameHeaderNavOrion8';

const closeItem = (item: Element) => {
  item.classList.remove('open');
  item.querySelector(':scope > .navbar__sub-nav')?.classList.remove('active');
};
const openItem = (item: Element) => {
  item.classList.add('open');
  item.querySelector(':scope > .navbar__sub-nav')?.classList.add('active');
};

/**
 * Top nav category dropdowns. Hovering only plays the existing CSS colour/underline
 * transition (`.navbar__item:hover`, untouched); the panel itself opens on click and
 * closes on a second click of the same category or a click anywhere outside the nav.
 */
const LOBBY_SLUG: Record<string, string> = {
  Casino: 'casino', Slot: 'slot', Crash: 'crash', Table: 'table', Fishing: 'fishing', Arcade: 'arcade', Lottery: 'lottery',
};

export default function HeaderNavOrion() {
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onDocClick = (e: globalThis.MouseEvent) => {
      const nav = navRef.current;
      if (!nav) return;
      if (!(e.target instanceof Node) || !nav.contains(e.target)) {
        nav.querySelectorAll('.navbar__item.open').forEach(closeItem);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    // provider tile inside a dropdown -> that category's game lobby, filtered to the provider
    const tile = (e.target as HTMLElement).closest('.navbar__sub-nav-item[web-category-type="VENDOR"]');
    if (tile) {
      const slug = LOBBY_SLUG[tile.closest('.navbar__item')?.getAttribute('data-category') ?? ''];
      if (!slug) return;
      const name = tile.querySelector('.navbar__sub-nav-item-text')?.textContent?.trim() ?? '';
      const vendor = (navVendors as Record<string, Record<string, string>>)[slug]?.[name] ?? '';
      e.currentTarget.querySelectorAll('.navbar__item.open').forEach(closeItem);
      router.push(`/bd/en/${slug}${vendor ? `?vendor=${vendor}` : ''}`);
      window.dispatchEvent(new CustomEvent('lobby:select', { detail: { slug, vendor } }));
      return;
    }
    const head = (e.target as HTMLElement).closest('.navbar__item-head');
    if (!head) return; // click landed inside an already-open panel's content, not the category head
    const item = head.closest('.navbar__item');
    if (!item) return;
    const wasOpen = item.classList.contains('open');
    e.currentTarget.querySelectorAll('.navbar__item.open').forEach(closeItem);
    if (!wasOpen) openItem(item);
  };

  return (
    <mcd-header-nav-orion class="ng-c-4285536054 ng-h-3671529244">
      <nav className="ng-c-3671529244 navbar" ref={navRef} onClick={onClick}>
        <ul className="ng-c-3671529244">
          <GameHeaderNavOrion />
          <GameHeaderNavOrion2 />
          <GameHeaderNavOrion3 datacategory0="Casino" t0=" Casino " gametype0="2" s0="background-image: url(/assets/images/brand/white/provider-awcv2_evolution.png);" t1="EVO" gametype1="2" s1="background-image: url(/assets/images/brand/white/provider-awcv2_sexybcrt.png);" t2="Sexy" gametype2="2" s2="background-image: url(/assets/images/brand/white/provider-awcv2_pp.png);" t3="PP" gametype3="2" s3="background-image: url(/assets/images/brand/white/provider-awcv2_hotroad.png);" t4="HotRoad" gametype4="2" s4="background-image: url(/assets/images/brand/white/provider-awcv2_pt.png);" t5="PT" gametype5="2" s5="background-image: url(/assets/images/brand/white/provider-awcv2_dreamgaming.png);" t6="DG" gametype6="2" s6="background-image: url(/assets/images/brand/white/provider-mg.png);" t7="MG" gametype7="2" s7="background-image: url(/assets/images/brand/white/provider-awcv2_viacasino.png);" t8="VIA" gametype8="2" s8="background-image: url(/assets/images/brand/white/provider-awcv2_creedroomz.png);" t9="CREEDROOMZ" gametype9="2" s9="background-image: url(/assets/images/brand/white/provider-awcv2_winfinity.png);" t10="WINFINITY" />
          <GameHeaderNavOrion4 />
          <GameHeaderNavOrion5 />
          <GameHeaderNavOrion6 />
          <GameHeaderNavOrion3 datacategory0="Fishing" t0=" Fishing " gametype0="8" s0="background-image: url(/assets/images/brand/white/provider-awcv2_jili.png);" t1="JILI" gametype1="8" s1="background-image: url(/assets/real/f6149942a7.png);" t2="JDB" gametype2="8" s2="background-image: url(/assets/images/brand/white/provider-awcv2_fc.png);" t3="FC" gametype3="8" s3="background-image: url(/assets/images/brand/white/provider-ka.png);" t4="KA" gametype4="8" s4="background-image: url(/assets/images/brand/white/provider-joker.png);" t5="Joker" gametype5="8" s5="background-image: url(/assets/images/brand/white/provider-cq9.png);" t6="CQ9" gametype6="8" s6="background-image: url(/assets/images/brand/white/provider-awcv2_spade.png);" t7="SG" gametype7="8" s7="background-image: url(/assets/images/brand/white/provider-awcv2_yesbingo.png);" t8="YELLOW BAT" gametype8="8" s8="background-image: url(/assets/images/brand/white/provider-awcv2_fastspin.png);" t9="FASTSPIN" gametype9="8" s9="background-image: url(/assets/images/brand/white/provider-awcv2_gtf.png);" t10="GTF" />
          <GameHeaderNavOrion7 />
          <GameHeaderNavOrion8 />
          <li className="ng-c-3671529244 navbar__item" tabIndex={0}>
            <span className="ng-c-3671529244 navbar__item-text">Promotions</span>
          </li>
          <li className="ng-c-3671529244 navbar__item" tabIndex={0}>
            <span className="ng-c-3671529244 navbar__item-text">VIP</span>
          </li>
        </ul>
      </nav>
    </mcd-header-nav-orion>
  );
}
