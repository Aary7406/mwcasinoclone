import { sty } from '@/lib/sty';

type Row = Record<string, string>;

const CAROUSELFRAMEALPHA2_LIST: Row[] = [
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "0",
    "s1": "background-image: url(/assets/real/fed4dd1958.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "1",
    "s1": "background-image: url(/assets/real/1ed7226040.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "2",
    "s1": "background-image: url(/assets/real/7129cfecbd.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "3",
    "s1": "background-image: url(/assets/real/c12701b619.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "4",
    "s1": "background-image: url(/assets/real/e186d34a91.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "0",
    "s1": "background-image: url(/assets/real/fed4dd1958.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit",
    "s0": "height: auto; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "1",
    "s1": "background-image: url(/assets/real/1ed7226040.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--prev",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "2",
    "s1": "background-image: url(/assets/real/7129cfecbd.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--active",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "3",
    "s1": "background-image: url(/assets/real/c12701b619.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--next",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "4",
    "s1": "background-image: url(/assets/real/e186d34a91.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "0",
    "s1": "background-image: url(/assets/real/fed4dd1958.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "1",
    "s1": "background-image: url(/assets/real/1ed7226040.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "2",
    "s1": "background-image: url(/assets/real/7129cfecbd.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "3",
    "s1": "background-image: url(/assets/real/c12701b619.jpg);"
  },
  {
    "cls": "carousel-frame-alpha__unit carousel-frame-alpha__unit--duplicated",
    "s0": "height: 0px; margin-left: 10px; width: calc(33.3333% - 6.66667px);",
    "datacarouselunitindex0": "4",
    "s1": "background-image: url(/assets/real/e186d34a91.jpg);"
  }
];

export default function CarouselFrameAlpha2() {
  return (
    <mcd-carousel-frame-alpha class="ng-c-2600195067 ng-h-358040420">
      <div className="ng-c-358040420 carousel-frame-alpha" carousel-id="carousel-frame-alpha-1">
        <div className="ng-c-358040420 carousel-frame-alpha__shell" style={{"overflow":"hidden"}}>
          <div className="ng-c-358040420 carousel-frame-alpha__track" style={{"transform":"translate(-2420px, 0px)"}}>
            {CAROUSELFRAMEALPHA2_LIST.map((it, i) => (
              <div key={i} className={"ng-c-358040420 " + it.cls} style={sty(it.s0)} data-carousel-unit-index={it.datacarouselunitindex0}>
                <div className="ng-c-2600195067 item">
                  <div className="ng-c-2600195067 item-pic" style={sty(it.s1)}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </mcd-carousel-frame-alpha>
  );
}
