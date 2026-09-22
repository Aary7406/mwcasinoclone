import { sty } from '@/lib/sty';


export default function LeftGameOrionLayout7(p: { gametype0: string; gametype1: string; s0: string; t0: string; gametype2: string; s1: string; t1: string; gametype3: string; s2: string; t2: string; gametype4: string; gametype5: string; s3: string; t3: string; gametype6: string; s4: string; t4: string; gametype7: string; s5: string; t5: string; gametype8: string; s6: string; t6: string }) {
  return (
    <mcd-left-game-orion-layout class="ng-h-3295987738">
      <ul className="ng-c-3295987738 item-box left-menu__vendor-box">
        <li className="ng-c-3295987738 left-menu__subnav-item" game-type={p.gametype0} web-category-type="VENDOR">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={{"backgroundImage":"url(/assets/images/brand/white/provider-awcv2_jili.png)"}}></div>
            <p className="ng-c-3295987738">
              JILI
            </p>
          </a>
        </li>
        <li className="ng-c-3295987738 left-menu__subnav-item" game-type={p.gametype1} web-category-type="VENDOR">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={sty(p.s0)}></div>
            <p className="ng-c-3295987738">
              {p.t0}
            </p>
          </a>
        </li>
        <li className="ng-c-3295987738 left-menu__subnav-item" game-type={p.gametype2} web-category-type="VENDOR">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={sty(p.s1)}></div>
            <p className="ng-c-3295987738">
              {p.t1}
            </p>
          </a>
        </li>
        <li className="ng-c-3295987738 left-menu__subnav-item" game-type={p.gametype3} web-category-type="VENDOR">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={sty(p.s2)}></div>
            <p className="ng-c-3295987738">
              {p.t2}
            </p>
          </a>
        </li>
        <li className="ng-c-3295987738 left-menu__subnav-item" game-type={p.gametype4} web-category-type="VENDOR">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={{"backgroundImage":"url(/assets/images/brand/white/provider-joker.png)"}}></div>
            <p className="ng-c-3295987738">
              Joker
            </p>
          </a>
        </li>
        <li className="ng-c-3295987738 left-menu__subnav-item" game-type={p.gametype5} web-category-type="VENDOR">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={sty(p.s3)}></div>
            <p className="ng-c-3295987738">
              {p.t3}
            </p>
          </a>
        </li>
        <li className="ng-c-3295987738 left-menu__subnav-item" game-type={p.gametype6} web-category-type="VENDOR">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={sty(p.s4)}></div>
            <p className="ng-c-3295987738">
              {p.t4}
            </p>
          </a>
        </li>
        <li className="ng-c-3295987738 left-menu__subnav-item" game-type={p.gametype7} web-category-type="VENDOR">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={sty(p.s5)}></div>
            <p className="ng-c-3295987738">
              {p.t5}
            </p>
          </a>
        </li>
        <li className="ng-c-3295987738 left-menu__subnav-item" game-type={p.gametype8} web-category-type="VENDOR">
          <a className="ng-c-3295987738">
            <div className="ng-c-3295987738 left-menu__subnav-icon left-menu__subnav-icon--bg" style={sty(p.s6)}></div>
            <p className="ng-c-3295987738">
              {p.t6}
            </p>
          </a>
        </li>
      </ul>
    </mcd-left-game-orion-layout>
  );
}
