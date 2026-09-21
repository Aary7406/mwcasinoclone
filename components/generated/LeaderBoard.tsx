import TopBanner from './TopBanner';
import TabBtn from './TabBtn';


export default function LeaderBoard() {
  return (
    <mcd-leader-board class="ng-h-358032059">
      <TopBanner />
      <div className="ng-c-358032059 leaderboard__title">
        {" Leader Board "}
      </div>
      <div className="ng-c-358032059 leaderboard__content">
        <TabBtn />
      </div>
    </mcd-leader-board>
  );
}
