'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

// [gameId, title, vendor, iconFile, latestRank] — pulled from the site's own game-list API.
export type LobbyGame = [number, string, string, string, number];
export type LobbyData = { slug: string; title: string; vendors: { name: string; vendor: string }[]; games: LobbyGame[] };

const SORTS = ['Recommend', 'Latest', 'Favorite', 'A-Z'] as const;
type Sort = (typeof SORTS)[number];
const PAGE = 24;
const logo = (vendor: string) => `/assets/images/brand/white/provider-${vendor}.png`;

/**
 * The game lobby that opens when a provider is picked from a nav dropdown. It's one view over
 * the category's full game list: sort tabs, a multi-select provider strip (selected providers
 * move to the front), and a search drawer (keyword + providers, applied on Confirm).
 * Markup/classes mirror the source so its captured component CSS applies unchanged.
 */
export default function GameLobby({ data, initialVendors }: { data: LobbyData; initialVendors: string[] }) {
  const [sort, setSort] = useState<Sort>('Recommend');
  const [selected, setSelected] = useState<string[]>(initialVendors);
  const [keyword, setKeyword] = useState('');
  const [shown, setShown] = useState(PAGE);
  const [drawer, setDrawer] = useState(false);
  const [draftVendors, setDraftVendors] = useState<string[]>([]);
  const [draftKeyword, setDraftKeyword] = useState('');
  const anchor = useRef<HTMLDivElement>(null);

  // update the address bar in place (no server round-trip, keeps sort/keyword state)
  const syncUrl = (vendors: string[]) => {
    const q = vendors.length ? `?vendor=${vendors.join(',')}` : '';
    window.history.replaceState(null, '', `/bd/en/${data.slug}${q}`);
  };

  // a nav-dropdown pick while already on this lobby: the header announces it directly
  useEffect(() => {
    const onPick = (e: Event) => {
      const { slug, vendor } = (e as CustomEvent<{ slug: string; vendor: string }>).detail;
      if (slug !== data.slug) return;
      setSelected(vendor ? [vendor] : []);
      setShown(PAGE);
    };
    window.addEventListener('lobby:select', onPick);
    return () => window.removeEventListener('lobby:select', onPick);
  }, [data.slug]);
  const applyVendors = (vendors: string[]) => { setSelected(vendors); setShown(PAGE); syncUrl(vendors); };
  const toggleVendor = (v: string) => applyVendors(selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v]);

  const games = useMemo(() => {
    let list = data.games;
    if (selected.length) list = list.filter(g => selected.includes(g[2]));
    const k = keyword.trim().toLowerCase();
    if (k) list = list.filter(g => g[1].toLowerCase().includes(k));
    if (sort === 'Latest') list = [...list].sort((a, b) => a[4] - b[4]);
    if (sort === 'A-Z') list = [...list].sort((a, b) => a[1].localeCompare(b[1]));
    // Favorite: with no account the live site just re-lists the default (Recommend) order.
    return list;
  }, [data.games, selected, keyword, sort]);

  // selected providers first (in their original order), then the rest
  const strip = useMemo(
    () => [...data.vendors.filter(v => selected.includes(v.vendor)), ...data.vendors.filter(v => !selected.includes(v.vendor))],
    [data.vendors, selected],
  );

  // waterfall paging: reveal the next 24 when the bottom anchor scrolls into view
  useEffect(() => {
    const el = anchor.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setShown(s => (s < games.length ? s + PAGE : s));
    });
    io.observe(el);
    return () => io.disconnect();
  }, [games.length]);

  const openDrawer = () => { setDraftVendors(selected); setDraftKeyword(keyword); setDrawer(true); };
  const confirmDrawer = () => { setKeyword(draftKeyword); applyVendors(draftVendors); setDrawer(false); };

  return (
    <mcd-game-lobby class="ng-h-2380885516">
      <div className="ng-c-2380885516 game-lobby">
        <div className={`ng-c-2380885516 game-lobby__search-bar${drawer ? ' game-lobby__search-bar--active' : ''}`}>
          <input className="ng-c-2380885516 game-lobby__input" placeholder="Search Games" readOnly type="text" onClick={openDrawer} />
        </div>

        <mcd-game-lobby-title-bar class="ng-c-2380885516 ng-h-2652839879">
          <div className="ng-c-2652839879 game-lobby-title-bar">
            <div className="ng-c-2652839879 game-lobby-title-bar__title"> {data.title} </div>
            <ul className="ng-c-2652839879 game-lobby-title-bar__filter-list">
              {SORTS.map(s => (
                <li key={s} className="ng-c-2652839879 game-lobby-title-bar__filter-item">
                  <button
                    type="button"
                    className={`ng-c-2652839879 game-lobby-title-bar__filter-button${sort === s ? ' game-lobby-title-bar__filter-button--active' : ''}`}
                    onClick={() => { setSort(s); setShown(PAGE); }}
                  >
                    {` ${s} `}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </mcd-game-lobby-title-bar>

        <mcd-logo-only-game-search-tab class="ng-c-2380885516 ng-h-2700328430">
          <div className="ng-c-2700328430 game-search-tab">
            <div className="ng-c-2700328430 game-search-tab__container">
              <div className="ng-c-2700328430 game-search-tab__tabs-nav">
                <div
                  className={`ng-c-2700328430 game-search-tab__tabs-item${selected.length === 0 ? ' game-search-tab__tabs-item--active' : ''}`}
                  onClick={() => applyVendors([])}
                >
                  <div
                    className="ng-c-2700328430 game-search-tab__tabs-icon game-search-tab__tabs-icon--all"
                    style={{ maskImage: 'url(/assets/images/icon-set/theme-icon/icon-all-provider.svg)' }}
                    aria-label="All"
                  ></div>
                </div>
                {strip.map(v => (
                  <div
                    key={v.vendor}
                    className={`ng-c-2700328430 game-search-tab__tabs-item${selected.includes(v.vendor) ? ' game-search-tab__tabs-item--active' : ''}`}
                    onClick={() => toggleVendor(v.vendor)}
                  >
                    <img className="ng-c-2700328430 game-search-tab__tabs-icon" alt={v.name} loading="lazy" src={logo(v.vendor)} />
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="ng-c-2700328430 game-search-tab__search-button" onClick={openDrawer}>
              <div className="ng-c-2700328430 game-search-tab__search-button-icon" style={{ maskImage: 'url(/assets/images/icon-set/icon-search-type01.svg)' }}></div>
            </button>
          </div>
        </mcd-logo-only-game-search-tab>

        <mcd-waterfall-scroll class="ng-c-2380885516">
          {games.length > 0 ? (
            <div className="ng-c-2380885516 game-lobby__list">
              {games.slice(0, shown).map(g => (
                <mcd-game-box key={g[0]} class="ng-c-2380885516 ng-h-2776031538">
                  <div className="ng-c-2776031538 game-box">
                    <div className="ng-c-2776031538 game-box__image-wrapper">
                      {g[3] && <img className="ng-c-2776031538 game-box__image" alt={g[1]} loading="lazy" src={`/lobby-icons/${g[3]}`} />}
                    </div>
                    <div className="ng-c-2776031538 game-box__title-wrapper">
                      <h3 className="ng-c-2776031538 game-box__title"> {g[1]} </h3>
                    </div>
                  </div>
                </mcd-game-box>
              ))}
            </div>
          ) : (
            <div className="ng-c-2380885516 game-lobby__empty">
              <div className="ng-c-2380885516 game-lobby__empty-title">No Results</div>
            </div>
          )}
          <div ref={anchor} className="anchor" style={{ height: 10, visibility: 'hidden' }}> anchor </div>
          {games.length > 0 && shown >= games.length && <div className="ng-c-2380885516 game-lobby__prompt">- end of page -</div>}
        </mcd-waterfall-scroll>

        <mcd-logo-with-label-game-search-panel class="ng-c-2380885516 ng-h-4232443489">
          <div className={`ng-c-4232443489 game-search-panel${drawer ? ' game-search-panel--active' : ''}`}>
            <div className="ng-c-4232443489 game-search-panel__content">
              <div className="ng-c-4232443489 game-search-panel__header">
                <button type="button" className="ng-c-4232443489 game-search-panel__back-button" onClick={() => setDrawer(false)}>
                  <div className="ng-c-4232443489 game-search-panel__back-icon" style={{ maskImage: 'url(/assets/images/icon-set/icon-arrow-type01.svg)' }}></div>
                </button>
                <input
                  className="ng-c-4232443489 game-search-panel__search-input"
                  placeholder="Search Games"
                  type="text"
                  value={draftKeyword}
                  onChange={e => setDraftKeyword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && confirmDrawer()}
                />
                <button type="button" className="ng-c-4232443489 game-search-panel__search-button" onClick={confirmDrawer}>
                  <div className="ng-c-4232443489 game-search-panel__search-icon" style={{ maskImage: 'url(/assets/images/icon-set/icon-search-type02.svg)' }}></div>
                </button>
              </div>
              <div className="ng-c-4232443489 game-search-panel__body">
                <div className="ng-c-4232443489 game-search-panel__group">
                  <h2 className="ng-c-4232443489 game-search-panel__group-title"> Providers </h2>
                  <ul className="ng-c-4232443489 game-search-panel__group-list">
                    {data.vendors.map(v => (
                      <li
                        key={v.vendor}
                        className={`ng-c-4232443489 game-search-panel__group-list-item has-logo${draftVendors.includes(v.vendor) ? ' game-search-panel__group-list-item--selected' : ''}`}
                        onClick={() => setDraftVendors(d => (d.includes(v.vendor) ? d.filter(x => x !== v.vendor) : [...d, v.vendor]))}
                      >
                        <img className="ng-c-4232443489 game-search-panel__group-list-icon" alt={v.name} loading="lazy" src={logo(v.vendor)} />
                        <span className="ng-c-4232443489 game-search-panel__group-list-text"> {v.name} </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="ng-c-4232443489 game-search-panel__footer">
                <button type="button" className="ng-c-4232443489 game-search-panel__footer-confirm" onClick={confirmDrawer}>
                  {' Confirm '}
                </button>
              </div>
            </div>
            <div className="ng-c-4232443489 game-search-panel__overlay" onClick={() => setDrawer(false)}></div>
          </div>
        </mcd-logo-with-label-game-search-panel>
      </div>
    </mcd-game-lobby>
  );
}
