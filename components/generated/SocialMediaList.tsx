import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const SOCIALMEDIALIST_LIST: Row[] = [
  {
    "href0": "https://facebook.com/megacasinoworldbd/",
    "s0": "aspect-ratio: 22 / 22;",
    "alt0": "facebook",
    "height0": "22",
    "src0": "/assets/images/footer/socialicons/facebook.svg",
    "width0": "22"
  },
  {
    "href0": "https://t.me/casinomcw",
    "s0": "aspect-ratio: 150 / 150;",
    "alt0": "telegram-channel",
    "height0": "150",
    "src0": "/assets/images/footer/socialicons/telegram-channel.svg",
    "width0": "150"
  },
  {
    "href0": "https://www.instagram.com/mcwbangla/",
    "s0": "aspect-ratio: 22 / 22;",
    "alt0": "instagram",
    "height0": "22",
    "src0": "/assets/images/footer/socialicons/instagram.svg",
    "width0": "22"
  },
  {
    "href0": "https://www.youtube.com/@mcwofficialchann31",
    "s0": "aspect-ratio: 150 / 150;",
    "alt0": "youtube",
    "height0": "150",
    "src0": "/assets/images/footer/socialicons/youtube.svg",
    "width0": "150"
  }
];

export default function SocialMediaList() {
  return (
    <mcd-social-media-list class="ng-h-3151814184">
      <div className="ng-c-3151814184 footer-social">
        <h2 className="ng-c-3151814184">
          Community Websites
        </h2>
        <ul className="ng-c-3151814184">
          {SOCIALMEDIALIST_LIST.map((it, i) => (
            <li key={i} className="ng-c-3151814184">
              <a className="ng-c-3151814184" href={it.href0} target="_blank">
                <img className="ng-c-3151814184" style={sty(it.s0)} alt={it.alt0} fetchPriority="low" height={it.height0} loading="lazy" src={it.src0} width={it.width0} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </mcd-social-media-list>
  );
}
