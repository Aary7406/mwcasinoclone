import { sty } from '@/lib/sty';


export default function GameHeaderNavOrion3(p: { datacategory0: string; t0: string; gametype0: string; s0: string; t1: string; gametype1: string; s1: string; t2: string; gametype2: string; s2: string; t3: string; gametype3: string; s3: string; t4: string; gametype4: string; s4: string; t5: string; gametype5: string; s5: string; t6: string; gametype6: string; s6: string; t7: string; gametype7: string; s7: string; t8: string; gametype8: string; s8: string; t9: string; gametype9: string; s9: string; t10: string }) {
  return (
    <mcd-game-header-nav-orion class="ng-c-3671529244 ng-h-2843435143 navbar__item">
      <li className="ng-c-2843435143 navbar__item" data-category={p.datacategory0}>
        <div className="ng-c-2843435143 navbar__item-head">
          {p.t0}
          <i className="ng-c-2843435143 navbar__item-arrow" style={{"maskImage":"url(/assets/images/icon-set/player/kyc/accordion-arrow.svg)"}}></i>
        </div>
        <div className="ng-c-2843435143 navbar__sub-nav">
          <ol className="ng-c-2843435143 navbar__sub-nav-inner">
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype0} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s0)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t1}
              </p>
            </li>
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype1} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s1)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t2}
              </p>
            </li>
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype2} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s2)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t3}
              </p>
            </li>
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype3} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s3)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t4}
              </p>
            </li>
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype4} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s4)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t5}
              </p>
            </li>
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype5} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s5)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t6}
              </p>
            </li>
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype6} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s6)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t7}
              </p>
            </li>
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype7} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s7)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t8}
              </p>
            </li>
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype8} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s8)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t9}
              </p>
            </li>
            <li className="ng-c-2843435143 navbar__sub-nav-item" game-type={p.gametype9} web-category-type="VENDOR">
              <div className="ng-c-2843435143 navbar__sub-nav-item-icon" style={sty(p.s9)}></div>
              <p className="ng-c-2843435143 navbar__sub-nav-item-text">
                {p.t10}
              </p>
            </li>
          </ol>
        </div>
      </li>
    </mcd-game-header-nav-orion>
  );
}
