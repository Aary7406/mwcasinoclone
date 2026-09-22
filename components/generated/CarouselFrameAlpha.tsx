import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const CAROUSELFRAMEALPHA_LIST: Row[] = [
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated carousel-frame-alpha__unit--prev",
    "s0": "width: calc(100% + 0px);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--active",
    "s0": "margin-left: 10px; width: calc(100% + 0px);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated carousel-frame-alpha__unit--next",
    "s0": "margin-left: 10px; width: calc(100% + 0px);"
  }
];

export default function CarouselFrameAlpha() {
  return (
    <mcd-carousel-frame-alpha class="ng-c-2153227597 ng-h-1758678389">
      <div className="ng-c-1758678389 carousel-frame-alpha" carousel-id="carousel-frame-alpha-1">
        <div className="ng-c-1758678389 carousel-frame-alpha__shell" style={{"overflow":"hidden"}}>
          <div className="ng-c-1758678389 carousel-frame-alpha__track" style={{"transform":"translate(-250px, 0px)"}}>
            {CAROUSELFRAMEALPHA_LIST.map((it, i) => (
              <div key={i} className={"ng-c-1758678389 " + it.cls} style={sty(it.s0)} data-carousel-unit-index="0">
                <div className="ng-c-2153227597 item">
                  <div className="ng-c-2153227597 item-pic" style={{"backgroundImage":"url(/assets/real/ef1cf04d6e.jpg)"}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ng-c-1758678389 carousel-frame-alpha__pagination pagination pagination-orion">
          <div className="ng-c-1758678389 pagination__bullet pagination__bullet--active"></div>
        </div>
      </div>
    </mcd-carousel-frame-alpha>
  );
}
