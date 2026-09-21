import 'react';

// The original markup uses Angular/Swiper host elements (<mcd-*>, <swiper-*>); allow them as custom elements.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tag: `${string}-${string}`]: { [attr: string]: unknown; class?: string; children?: React.ReactNode };
    }
  }
}
