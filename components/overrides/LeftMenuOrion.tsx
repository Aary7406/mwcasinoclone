'use client';

import { useMenu } from '@/components/shell/MenuContext';
import LeftGameOrionLayout from '../generated/LeftGameOrionLayout';
import LeftGameOrionLayout2 from '../generated/LeftGameOrionLayout2';
import LeftGameOrionLayout3 from '../generated/LeftGameOrionLayout3';
import LeftGameOrionLayout4 from '../generated/LeftGameOrionLayout4';
import LeftGameOrionLayout5 from '../generated/LeftGameOrionLayout5';
import LeftGameOrionLayout6 from '../generated/LeftGameOrionLayout6';
import LeftGameOrionLayout7 from '../generated/LeftGameOrionLayout7';
import LeftGameOrionLayout8 from '../generated/LeftGameOrionLayout8';
import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const LEFTMENUORION_LIST: Row[] = [
  {
    "datanavcategory0": "HOT",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-hotgame.svg);",
    "t0": "HOT"
  },
  {
    "datanavcategory0": "Sports",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-sport.svg);",
    "t0": "Sports"
  },
  {
    "datanavcategory0": "Casino",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-casino.svg);",
    "t0": "Casino"
  },
  {
    "datanavcategory0": "Slot",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-slot.svg);",
    "t0": "Slot"
  },
  {
    "datanavcategory0": "Crash",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-crash.svg);",
    "t0": "Crash"
  },
  {
    "datanavcategory0": "Table",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-table.svg);",
    "t0": "Table"
  },
  {
    "datanavcategory0": "Fishing",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-fish.svg);",
    "t0": "Fishing"
  },
  {
    "datanavcategory0": "Arcade",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-arcade.svg);",
    "t0": "Arcade"
  },
  {
    "datanavcategory0": "Lottery",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-lottery.svg);",
    "t0": "Lottery"
  }
];

const LEFTMENUORION_LIST1: Row[] = [
  {
    "datacategory0": "promotion",
    "href0": "/bd/en/promotion",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-promotion.svg);",
    "t0": " Promotions "
  },
  {
    "datacategory0": "winner-board",
    "href0": "/bd/en/winner-board",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-winner-board.svg);",
    "t0": " Winner Board "
  },
  {
    "datacategory0": "vip",
    "href0": "/bd/en/vip-detail",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-vip.svg);",
    "t0": " VIP "
  },
  {
    "datacategory0": "download",
    "href0": "/bd/en/app-download",
    "s0": "mask-image: url(/assets/images/icon-set/theme-icon/icon-download.svg);",
    "t0": " Download "
  }
];

const LEFTMENUORION_LIST2: Row[] = [
  {
    "cls": "left-menu__subnav-item talk",
    "datacategory0": "talk",
    "href0": "null",
    "s0": "background-image: url(/placeholders/image_396.svg);",
    "t0": "24-7 CS"
  },
  {
    "cls": "left-menu__subnav-item telegram",
    "datacategory0": "telegram",
    "href0": "http://t.me/MCWBNCSbot",
    "s0": "background-image: url(/placeholders/image_502.svg);",
    "t0": "Telegram"
  },
  {
    "cls": "left-menu__subnav-item email",
    "datacategory0": "email",
    "href0": "mailto:bnsupport@casinomcw.com",
    "s0": "background-image: url(/placeholders/image_426.svg);",
    "t0": "Email"
  }
];

export default function LeftMenuOrion() {
  const { open, close } = useMenu();
  return (
    <mcd-left-menu-orion class="ng-c-693957431">
      <div className={`left-menu-orion${open ? ' active' : ''}`} onClick={e => { if (e.target === e.currentTarget) close(); }}>
        <div className="left-menu-orion__nav">
          <div className="left-menu__search-games">
            <span className="left-menu__search-games-text">
              Search Games
            </span>
            <i className="left-menu__search-games-icon" style={{"maskImage":"url(/assets/images/icon-set/icon-search-type01.svg)"}}></i>
          </div>
          <ul className="item-box left-menu__game-nav-box">
            {LEFTMENUORION_LIST.map((it, i) => (
              <li key={i} className="left-menu__nav-item" data-navcategory={it.datanavcategory0}>
                <i className="left-menu__nav-icon left-menu__color" style={sty(it.s0)}></i>
                <span className="left-menu__nav-text">
                  {it.t0}
                </span>
                <i className="left-menu__nav-arrow" style={{"maskImage":"url(/assets/images/icon-set/player/kyc/accordion-arrow.svg)"}}></i>
              </li>
            ))}
          </ul>
          <ul className="item-box left-menu__other-nav-box">
            {LEFTMENUORION_LIST1.map((it, i) => (
              <li key={i} className="left-menu__nav-item" data-category={it.datacategory0}>
                <a href={it.href0} onClick={close}>
                  <i className="left-menu__nav-icon left-menu__color" style={sty(it.s0)}></i>
                  <span className="left-menu__nav-text">
                    {it.t0}
                  </span>
                </a>
              </li>
            ))}
            <li className="left-menu__nav-item" data-category="affiliate">
              <a href="https://mcwlink.co/aff-bd" target="_blank">
                <i className="left-menu__nav-icon left-menu__color" style={{"maskImage":"url(/assets/images/icon-set/theme-icon/icon-affiliate.svg)"}}></i>
                <span className="left-menu__nav-text">
                  {" Affiliates "}
                </span>
              </a>
            </li>
            <li className="left-menu__nav-item">
              <a href="https://mcwlink.co/partnerships/en" target="_blank">
                <i className="left-menu__nav-icon left-menu__color" style={{"maskImage":"url(/assets/images/icon-set/theme-icon/icon-partnership.svg)"}}></i>
                <span className="left-menu__nav-text">
                  {" Partnerships "}
                </span>
              </a>
            </li>
          </ul>
          <ul className="item-box left-menu__contact-nav-box"></ul>
        </div>
        <div className="left-menu-orion__subnav">
          <LeftGameOrionLayout />
          <LeftGameOrionLayout2 />
          <LeftGameOrionLayout3 />
          <LeftGameOrionLayout4 />
          <LeftGameOrionLayout5 />
          <LeftGameOrionLayout6 />
          <LeftGameOrionLayout7 gametype0="8" gametype1="8" s0="background-image: url(/assets/real/9f9f939a1c.png);" t0="JDB" gametype2="8" s1="background-image: url(/assets/images/brand/white/provider-awcv2_fc.png);" t1="FC" gametype3="8" s2="background-image: url(/assets/images/brand/white/provider-ka.png);" t2="KA" gametype4="8" gametype5="8" s3="background-image: url(/assets/images/brand/white/provider-cq9.png);" t3="CQ9" gametype6="8" s4="background-image: url(/assets/images/brand/white/provider-awcv2_spade.png);" t4="SG" gametype7="8" s5="background-image: url(/assets/images/brand/white/provider-awcv2_yesbingo.png);" t5="YELLOW BAT" gametype8="8" s6="background-image: url(/assets/images/brand/white/provider-awcv2_gtf.png);" t6="GTF" />
          <LeftGameOrionLayout8 />
          <LeftGameOrionLayout7 gametype0="64" gametype1="64" s0="background-image: url(/assets/images/brand/white/provider-awcv2_kingmaker.png);" t0="KM" gametype2="64" s1="background-image: url(/assets/real/9f9f939a1c.png);" t1="Number" gametype3="64" s2="background-image: url(/assets/images/brand/white/provider-awcv2_yesbingo.png);" t2="YELLOW BAT" gametype4="64" gametype5="64" s3="background-image: url(/assets/images/brand/white/provider-playngo.png);" t3="PNG" gametype6="64" s4="background-image: url(/assets/images/brand/white/provider-cq9.png);" t4="CQ9" gametype7="64" s5="background-image: url(/assets/images/brand/white/provider-rich88.png);" t5="RICH88" gametype8="64" s6="background-image: url(/assets/images/brand/white/provider-awcv2_hacksaw.png);" t6="HACKSAW" />
          <ul className="item-box left-menu__contact-box">
            {LEFTMENUORION_LIST2.map((it, i) => (
              <li key={i} className={it.cls} data-category={it.datacategory0}>
                <a href={it.href0} target="_blank">
                  <span className="left-menu__subnav-icon left-menu__use-icon-path" style={sty(it.s0)}></span>
                  <p>
                    {it.t0}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </mcd-left-menu-orion>
  );
}
