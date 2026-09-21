type Row = Record<string, string>;

const ICONMARQUEE_LIST: Row[] = [
  {
    "alt0": "provider-awcmjili",
    "src0": "/placeholders/provider-awcmjili.svg"
  },
  {
    "alt0": "provider-evo",
    "src0": "/placeholders/provider-evo.svg"
  },
  {
    "alt0": "provider-jdbaspribe",
    "src0": "/placeholders/provider-jdbaspribe.svg"
  },
  {
    "alt0": "provider-pg",
    "src0": "/placeholders/provider-pg.svg"
  },
  {
    "alt0": "provider-awcmsexy",
    "src0": "/placeholders/provider-awcmsexy.svg"
  },
  {
    "alt0": "provider-awcmkm",
    "src0": "/placeholders/provider-awcmkm.svg"
  },
  {
    "alt0": "provider-jdb",
    "src0": "/placeholders/provider-jdb.svg"
  },
  {
    "alt0": "provider-awcmfc",
    "src0": "/placeholders/provider-awcmfc.svg"
  },
  {
    "alt0": "provider-awcmyesbingo",
    "src0": "/placeholders/provider-awcmyesbingo.svg"
  },
  {
    "alt0": "provider-awcmladyluck",
    "src0": "/placeholders/provider-awcmladyluck.svg"
  },
  {
    "alt0": "provider-awcmpp",
    "src0": "/placeholders/provider-awcmpp.svg"
  },
  {
    "alt0": "provider-awcmsg",
    "src0": "/placeholders/provider-awcmsg.svg"
  },
  {
    "alt0": "provider-awcmfastspin",
    "src0": "/placeholders/provider-awcmfastspin.svg"
  },
  {
    "alt0": "provider-saba",
    "src0": "/placeholders/provider-saba.svg"
  },
  {
    "alt0": "icon-sbtech",
    "src0": "/assets/images/icon-set/sports-icon/icon-sbtech.svg"
  },
  {
    "alt0": "icon-sbov2",
    "src0": "/assets/images/icon-set/sports-icon/icon-sbov2.svg"
  },
  {
    "alt0": "icon-horsebook",
    "src0": "/assets/images/icon-set/sports-icon/icon-horsebook.svg"
  },
  {
    "alt0": "provider-nextspin",
    "src0": "/placeholders/provider-nextspin.svg"
  },
  {
    "alt0": "provider-cq9",
    "src0": "/placeholders/provider-cq9.svg"
  },
  {
    "alt0": "provider-awcmp8",
    "src0": "/placeholders/provider-awcmp8.svg"
  },
  {
    "alt0": "provider-awcmrt",
    "src0": "/placeholders/provider-awcmrt.svg"
  },
  {
    "alt0": "provider-awcmpt",
    "src0": "/placeholders/provider-awcmpt.svg"
  },
  {
    "alt0": "provider-rich88",
    "src0": "/placeholders/provider-rich88.svg"
  },
  {
    "alt0": "provider-ka",
    "src0": "/placeholders/provider-ka.svg"
  },
  {
    "alt0": "provider-worldmatch",
    "src0": "/placeholders/provider-worldmatch.svg"
  },
  {
    "alt0": "provider-awcmp8",
    "src0": "/placeholders/provider-awcmp8.svg"
  },
  {
    "alt0": "provider-netent",
    "src0": "/placeholders/provider-netent.svg"
  },
  {
    "alt0": "provider-awcmdg",
    "src0": "/placeholders/provider-awcmdg.svg"
  },
  {
    "alt0": "provider-png",
    "src0": "/placeholders/provider-png.svg"
  },
  {
    "alt0": "provider-joker",
    "src0": "/placeholders/provider-joker.svg"
  },
  {
    "alt0": "provider-ugv3",
    "src0": "/placeholders/provider-ugv3.svg"
  },
  {
    "alt0": "provider-mg",
    "src0": "/placeholders/provider-mg.svg"
  },
  {
    "alt0": "provider-bpoker",
    "src0": "/placeholders/provider-bpoker.svg"
  },
  {
    "alt0": "provider-awcmyl",
    "src0": "/placeholders/provider-awcmyl.svg"
  },
  {
    "alt0": "provider-awcmhotroad",
    "src0": "/placeholders/provider-awcmhotroad.svg"
  },
  {
    "alt0": "provider-awcmiloveu",
    "src0": "/placeholders/provider-awcmiloveu.svg"
  }
];

export default function IconMarquee() {
  return (
    <mcd-icon-marquee class="ng-c-576795117 ng-h-4213048159">
      <div className="ng-c-4213048159 icon-marquee">
        <div className="ng-c-4213048159 icon-marquee__title">
          Game Providers
        </div>
        <div className="ng-c-4213048159 icon-marquee__content">
          <ul className="ng-c-4213048159">
            {ICONMARQUEE_LIST.map((it, i) => (
              <li key={i} className="ng-c-4213048159">
                <img className="ng-c-4213048159" alt={it.alt0} loading="lazy" src={it.src0} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </mcd-icon-marquee>
  );
}
