import CountdownTimer from './CountdownTimer';
import LeaderBoardList from './LeaderBoardList';


export default function TabBtn() {
  return (
    <mcd-tab-btn class="ng-c-358032059 ng-h-205137638">
      <div className="ng-c-205137638 tab-btn-block">
        <div className="ng-c-205137638 tab-btn tab-btn-page">
          <div className="ng-c-205137638 btn active">
            <div className="ng-c-205137638 text">
              {" Daily "}
            </div>
          </div>
          <div className="ng-c-205137638 btn">
            <div className="ng-c-205137638 text">
              {" Weekly "}
            </div>
          </div>
        </div>
      </div>
      <div className="ng-c-205137638 tab-content">
        <div className="ng-c-358032059 leaderboard__countdown-timer">
          <CountdownTimer />
        </div>
        <LeaderBoardList />
      </div>
    </mcd-tab-btn>
  );
}
