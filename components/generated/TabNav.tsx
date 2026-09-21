import LeaderBoard from './LeaderBoard';


export default function TabNav() {
  return (
    <mcd-tab-nav class="ng-c-2497579489 ng-h-2762748009">
      <div className="ng-c-2762748009 tabs">
        <div className="ng-c-2762748009 tab-btn tab-btn-page fixed-tab">
          <div className="ng-c-2762748009 line" style={{"width":"calc(50%)","transform":"translate(0%, 0px)"}}></div>
          <div className="ng-c-2762748009 btn" data-tab-current="current">
            <div className="ng-c-2762748009 text">
              {" Leader Board "}
            </div>
          </div>
          <div className="ng-c-2762748009 btn" data-tab-current="">
            <div className="ng-c-2762748009 text">
              {" First To Reach "}
            </div>
          </div>
        </div>
        <div className="ng-c-2762748009 tab-content tab-content-page">
          <router-outlet class="ng-c-2497579489"></router-outlet>
          <LeaderBoard />
        </div>
      </div>
    </mcd-tab-nav>
  );
}
