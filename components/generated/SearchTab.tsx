type Row = Record<string, string>;

const SEARCHTAB_LIST: Row[] = [
  {
    "cls": "active",
    "t0": "All"
  },
  {
    "cls": "",
    "t0": "Welcome offer"
  },
  {
    "cls": "",
    "t0": "Slots"
  },
  {
    "cls": "",
    "t0": "Live Casino"
  },
  {
    "cls": "",
    "t0": "Sports"
  },
  {
    "cls": "",
    "t0": "Fishing"
  },
  {
    "cls": "",
    "t0": "Lottery"
  },
  {
    "cls": "",
    "t0": "Table"
  },
  {
    "cls": "",
    "t0": "Arcade"
  },
  {
    "cls": "",
    "t0": "Crash"
  },
  {
    "cls": "",
    "t0": "Other"
  }
];

export default function SearchTab() {
  return (
    <mcd-search-tab class="ng-c-3913105429 ng-h-35268820">
      <div className="ng-c-35268820 row-reverse">
        <div className="ng-c-35268820 tab search-tab">
          <ul className="ng-c-35268820 item-ani">
            {SEARCHTAB_LIST.map((it, i) => (
              <li key={i} className={"ng-c-35268820 " + it.cls}>
                <label className="ng-c-35268820">
                  {it.t0}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ng-c-35268820 searchpage">
        <div className="ng-c-35268820 search-top-info">
          <div className="ng-c-35268820 back" style={{"maskImage":"url(/assets/images/icon-set/icon-arrow-type01.svg)"}}>
            Back
          </div>
          <div className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
          <input className="ng-c-35268820 ng-untouched ng-pristine ng-valid" placeholder="Promotion Filter" type="text" />
          <div className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
          <div className="ng-c-35268820 icon-search" style={{"maskImage":"url(/assets/images/icon-set/icon-search-type01.svg)"}}></div>
        </div>
        <div className="ng-c-35268820 searchpage-main"></div>
        <div className="ng-c-35268820 searchpage-bar">
          <div className="ng-c-35268820 button btn-primary">
            Confirm
          </div>
        </div>
      </div>
    </mcd-search-tab>
  );
}
