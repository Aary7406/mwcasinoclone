import Carousel from './Carousel';
import Marquee from './Marquee';
import FeatureGamesOrion from './FeatureGamesOrion';
import NextEvent from './NextEvent';
import ScrollBanner from './ScrollBanner';
import FeatureGames from './FeatureGames';
import IconMarquee from './IconMarquee';


export default function HomeContent() {
  return (
    <div className="ng-c-576795117 main-wrapper" id="mainWrapper">
      <Carousel />
      <div className="ng-c-576795117 marquee-wrapper marquee-clickable">
        <div className="ng-c-576795117 partners-list">
          <ul className="ng-c-576795117">
            <li className="ng-c-576795117">
              <img className="ng-c-576795117" alt="FC BAYERN MUNICH" loading="lazy" src="/assets/images/footer/partner/fc-bayern-munich.webp" />
              <p className="ng-c-576795117">
                Official Regional Partner
              </p>
            </li>
          </ul>
          <ul className="ng-c-576795117">
            <li className="ng-c-576795117">
              <img className="ng-c-576795117" alt="BUNDESLIGA" loading="lazy" src="/assets/images/footer/partner/bundesliga.png" />
              <p className="ng-c-576795117">
                Regional Betting Partner - Asia - NCVIP
              </p>
            </li>
          </ul>
        </div>
        <Marquee />
      </div>
      <FeatureGamesOrion />
      <NextEvent />
      <ScrollBanner />
      <FeatureGames />
      <IconMarquee />
    </div>
  );
}
