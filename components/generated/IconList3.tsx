import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const ICONLIST3_LIST: Row[] = [
  {
    "s0": "aspect-ratio: 122 / 45;",
    "alt0": "pay16",
    "height0": "45",
    "src0": "/placeholders/pay16.svg",
    "width0": "122"
  },
  {
    "s0": "aspect-ratio: 68 / 30;",
    "alt0": "pay22",
    "height0": "30",
    "src0": "/placeholders/pay22.svg",
    "width0": "68"
  },
  {
    "s0": "aspect-ratio: 46 / 30;",
    "alt0": "pay33",
    "height0": "30",
    "src0": "/placeholders/pay33.svg",
    "width0": "46"
  },
  {
    "s0": "aspect-ratio: 68 / 30;",
    "alt0": "pay34",
    "height0": "30",
    "src0": "/placeholders/pay34.svg",
    "width0": "68"
  },
  {
    "s0": "aspect-ratio: 165 / 30;",
    "alt0": "pay48",
    "height0": "30",
    "src0": "/placeholders/pay48.svg",
    "width0": "165"
  },
  {
    "s0": "aspect-ratio: 87 / 30;",
    "alt0": "pay45",
    "height0": "30",
    "src0": "/placeholders/pay45.svg",
    "width0": "87"
  },
  {
    "s0": "aspect-ratio: 122 / 45;",
    "alt0": "pay59",
    "height0": "45",
    "src0": "/placeholders/pay59.svg",
    "width0": "122"
  },
  {
    "s0": "aspect-ratio: 153 / 45;",
    "alt0": "pay60",
    "height0": "45",
    "src0": "/placeholders/pay60.svg",
    "width0": "153"
  },
  {
    "s0": "aspect-ratio: 39 / 39;",
    "alt0": "pay61",
    "height0": "39",
    "src0": "/placeholders/pay61.svg",
    "width0": "39"
  }
];

export default function IconList3() {
  return (
    <mcd-icon-list class="ng-h-1907600589 pay">
      <div className="ng-c-1907600589 pay">
        <h2 className="ng-c-1907600589">
          Payment Methods
        </h2>
        <ul className="ng-c-1907600589">
          {ICONLIST3_LIST.map((it, i) => (
            <li key={i} className="ng-c-1907600589">
              <img className="ng-c-1907600589" style={sty(it.s0)} alt={it.alt0} fetchPriority="low" height={it.height0} loading="lazy" src={it.src0} width={it.width0} />
            </li>
          ))}
        </ul>
      </div>
    </mcd-icon-list>
  );
}
