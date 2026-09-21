export default function Marquee() {
  return (
    <mcd-marquee class="ng-c-576795117 ng-h-1790478041">
      <div className="ng-c-1790478041 announcement-row">
        <div className="ng-c-1790478041 marquee">
          <span className="ng-c-1790478041 item-icon-wrap">
            <i className="ng-c-1790478041 item-icon" style={{"maskImage":"url(/assets/images/icon-set/base/announcement-icon.svg)"}}></i>
          </span>
          <ul className="ng-c-1790478041" style={{"display":"flex","width":"fit-content","transform":"translate(1089px)"}}>
            <li className="ng-c-1790478041">
              <span className="ng-c-1790478041">
                <p>
                  <span>
                    {"MCW Advisory: Having problems accessing the MCW site? Visit "}
                  </span>
                  <a href="https://mcwlinks.com/bn/" target="_blank">
                    <span>
                      https://mcwlinks.com/bn/
                    </span>
                  </a>
                  <span></span>
                  <span>
                    to see the latest active links and continue to enjoy your favorite games!
                  </span>
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </mcd-marquee>
  );
}
