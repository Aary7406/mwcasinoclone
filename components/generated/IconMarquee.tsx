type Row = Record<string, string>;

const ICONMARQUEE_LIST: Row[] = [
  {
    "alt0": "provider-awcmjili",
    "src0": "/assets/images/brand/white/provider-awcmjili.png"
  },
  {
    "alt0": "provider-evo",
    "src0": "/assets/images/brand/white/provider-evo.png"
  },
  {
    "alt0": "provider-jdbaspribe",
    "src0": "/assets/images/brand/white/provider-jdbaspribe.png"
  },
  {
    "alt0": "provider-pg",
    "src0": "/assets/images/brand/white/provider-pg.png"
  },
  {
    "alt0": "provider-awcmsexy",
    "src0": "/assets/images/brand/white/provider-awcmsexy.png"
  },
  {
    "alt0": "provider-awcmkm",
    "src0": "/assets/images/brand/white/provider-awcmkm.png"
  },
  {
    "alt0": "provider-jdb",
    "src0": "/assets/images/brand/white/provider-jdb.png"
  },
  {
    "alt0": "provider-awcmfc",
    "src0": "/assets/images/brand/white/provider-awcmfc.png"
  },
  {
    "alt0": "provider-awcmyesbingo",
    "src0": "/assets/images/brand/white/provider-awcmyesbingo.png"
  },
  {
    "alt0": "provider-awcmladyluck",
    "src0": "/assets/images/brand/white/provider-awcmladyluck.png"
  },
  {
    "alt0": "provider-awcmpp",
    "src0": "/assets/images/brand/white/provider-awcmpp.png"
  },
  {
    "alt0": "provider-awcmsg",
    "src0": "/assets/images/brand/white/provider-awcmsg.png"
  },
  {
    "alt0": "provider-awcmfastspin",
    "src0": "/assets/images/brand/white/provider-awcmfastspin.png"
  },
  {
    "alt0": "provider-saba",
    "src0": "/assets/images/brand/white/provider-saba.png"
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
    "src0": "/assets/images/brand/white/provider-nextspin.png"
  },
  {
    "alt0": "provider-cq9",
    "src0": "/assets/images/brand/white/provider-cq9.png"
  },
  {
    "alt0": "provider-awcmp8",
    "src0": "/assets/images/brand/white/provider-awcmp8.png"
  },
  {
    "alt0": "provider-awcmrt",
    "src0": "/assets/images/brand/white/provider-awcmrt.png"
  },
  {
    "alt0": "provider-awcmpt",
    "src0": "/assets/images/brand/white/provider-awcmpt.png"
  },
  {
    "alt0": "provider-rich88",
    "src0": "/assets/images/brand/white/provider-rich88.png"
  },
  {
    "alt0": "provider-ka",
    "src0": "/assets/images/brand/white/provider-ka.png"
  },
  {
    "alt0": "provider-worldmatch",
    "src0": "/assets/images/brand/white/provider-worldmatch.png"
  },
  {
    "alt0": "provider-awcmp8",
    "src0": "/assets/images/brand/white/provider-awcmp8.png"
  },
  {
    "alt0": "provider-netent",
    "src0": "/assets/images/brand/white/provider-netent.png"
  },
  {
    "alt0": "provider-awcmdg",
    "src0": "/assets/images/brand/white/provider-awcmdg.png"
  },
  {
    "alt0": "provider-png",
    "src0": "/assets/images/brand/white/provider-png.png"
  },
  {
    "alt0": "provider-joker",
    "src0": "/assets/images/brand/white/provider-joker.png"
  },
  {
    "alt0": "provider-ugv3",
    "src0": "/assets/images/brand/white/provider-ugv3.png"
  },
  {
    "alt0": "provider-mg",
    "src0": "/assets/images/brand/white/provider-mg.png"
  },
  {
    "alt0": "provider-bpoker",
    "src0": "/assets/images/brand/white/provider-bpoker.png"
  },
  {
    "alt0": "provider-awcmyl",
    "src0": "/assets/images/brand/white/provider-awcmyl.png"
  },
  {
    "alt0": "provider-awcmhotroad",
    "src0": "/assets/images/brand/white/provider-awcmhotroad.png"
  },
  {
    "alt0": "provider-awcmiloveu",
    "src0": "/assets/images/brand/white/provider-awcmiloveu.png"
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
