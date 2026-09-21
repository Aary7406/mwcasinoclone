'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SLIDES = [
  { alt: 'image_446664', src: '/placeholders/image_446664.svg' },
  { alt: 'image_445667', src: '/placeholders/image_445667.svg' },
  { alt: 'image_444855', src: '/placeholders/image_444855.svg' },
  { alt: 'image_440528', src: '/placeholders/image_440528.svg' },
  { alt: 'image_289462', src: '/placeholders/image_289462.svg' },
  { alt: 'image_261526', src: '/placeholders/image_261526.svg' },
];
const GAP = 12;
const INTERVAL = 4000;

/** Hero banner carousel (replaces the Swiper web component); same DOM/classes as the original. */
export default function Carousel({ slides = SLIDES }: { slides?: typeof SLIDES }) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const go = useCallback((n: number) => setIndex(((n % slides.length) + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const t = setInterval(() => { if (!paused.current) setIndex(i => (i + 1) % slides.length); }, INTERVAL);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <mcd-carousel class="ng-c-576795117 ng-h-2490290731">
      <div className="ng-c-2490290731 carousel carousel--single-full" onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
        <div className="ng-c-2490290731 carousel__wrapper" dir="ltr">
          <swiper-container class="ng-c-2490290731" style={{ display: 'block', overflow: 'hidden' }}>
            <div
              style={{ display: 'flex', transform: `translateX(calc(${-index} * (100% + ${GAP}px)))`, transition: 'transform .3s ease' }}
            >
              {slides.map((s, i) => (
                <swiper-slide
                  key={s.alt}
                  class="ng-c-2490290731"
                  role="group"
                  aria-label={`${i + 1} / ${slides.length}`}
                  style={{ display: 'block', flex: '0 0 100%', marginRight: GAP }}
                >
                  <div className="ng-c-2490290731 carousel__slide carousel__slide--single-full">
                    <img className="ng-c-2490290731 carousel__image" alt={s.alt} src={s.src} loading={i === 0 ? 'eager' : 'lazy'} />
                  </div>
                </swiper-slide>
              ))}
            </div>
          </swiper-container>
          <div className="ng-c-2490290731 carousel__navigation carousel__navigation--inside">
            <button className="ng-c-2490290731 carousel__arrow carousel__arrow--prev" aria-label="Previous slide" type="button" onClick={() => go(index - 1)}>
              <span className="ng-c-2490290731 carousel__arrow-icon" style={{ maskImage: 'url(/assets/shared/carousel/angle-left.svg)' }}></span>
            </button>
            <button className="ng-c-2490290731 carousel__arrow carousel__arrow--next" aria-label="Next slide" type="button" onClick={() => go(index + 1)}>
              <span className="ng-c-2490290731 carousel__arrow-icon" style={{ maskImage: 'url(/assets/shared/carousel/angle-right.svg)' }}></span>
            </button>
          </div>
          <div className="ng-c-2490290731 carousel__pagination-wrapper carousel__pagination-wrapper--inside swiper-pagination-custom swiper-pagination-horizontal">
            {slides.map((s, i) => (
              <span
                key={s.alt}
                className={`ng-c-2490290731 carousel__pagination carousel__pagination-dots${i === index ? ' carousel__pagination-dots--active' : ''}`}
                onClick={() => go(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </mcd-carousel>
  );
}
