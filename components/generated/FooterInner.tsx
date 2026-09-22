import FooterDescriptionBdtEn from './FooterDescriptionBdtEn';
import IconList from './IconList';
import IconList2 from './IconList2';
import SocialMediaList from './SocialMediaList';
import IconList3 from './IconList3';
import AboutUs from './AboutUs';
import IconList4 from './IconList4';


export default function FooterInner() {
  return (
    <mcd-footer-inner class="ng-c-693957431">
      <div className="footer-wrap">
        <footer className="footer">
          <div className="footer-collapse__logo" style={{"backgroundImage":"url(/assets/images/logo-horizontal.png)"}}></div>
          <div className="footer-collapse">
            <FooterDescriptionBdtEn />
            <div className="footer-collapse__btn">
              {" Read More "}
              <div className="footer-collapse__btn-arrow" style={{"maskImage":"url(/assets/images/icon-set/player/kyc/accordion-arrow.svg)"}}></div>
            </div>
          </div>
          <div className="row">
            <div className="footer__ncvip-partners">
              <h2>
                Partners
              </h2>
              <ul>
                <li>
                  <img alt="FC BAYERN MUNICH" loading="lazy" src="/assets/images/footer/partner/fc-bayern-munich.webp" />
                  <strong>
                    FC Bayern Munich
                  </strong>
                  <p>
                    Official Regional Partner
                  </p>
                </li>
              </ul>
            </div>
            <div className="footer__partners">
              <h2>
                NCVIP Partners
              </h2>
              <ul>
                <li>
                  <img alt="BUNDESLIGA" loading="lazy" src="/assets/images/footer/partner/bundesliga.png" />
                  <strong>
                    Bundesliga
                  </strong>
                  <p>
                    Regional Betting Partner - Asia - NCVIP
                  </p>
                </li>
              </ul>
            </div>
            <div className="footer__ambassadors">
              <h2>
                Brand Ambassadors
              </h2>
              <ul>
                <li>
                  <img alt="Anrich Nortje" loading="lazy" src="/assets/images/footer/ambassador/anrich-nortje.png" />
                  <strong>
                    Anrich Nortje
                  </strong>
                  <p>
                    South African Cricketer
                  </p>
                </li>
                <li>
                  <img alt="Lukas Podolski" loading="lazy" src="/assets/images/footer/ambassador/lukas-podolski.png" />
                  <strong>
                    Lukas Podolski
                  </strong>
                  <p>
                    German Football Legend
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <IconList />
            <IconList2 />
            <div className="footer__download">
              <h2>
                APP Download
              </h2>
              <a href="/bd/en/app-download">
                <img alt="android-download" loading="lazy" src="/assets/images/footer/app-download/android-download.svg" />
              </a>
            </div>
            <SocialMediaList />
          </div>
          <div className="row">
            <IconList3 />
          </div>
          <div className="row">
            <AboutUs />
          </div>
          <div className="footer__copyrights">
            <div className="footer__copyrights__info">
              <span>
                {"© 2026 MCW Copyrights. All Rights Reserved "}
              </span>
            </div>
            <IconList4 />
          </div>
        </footer>
      </div>
    </mcd-footer-inner>
  );
}
