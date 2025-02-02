import * as React from 'react';

import { SwiperOptions, Swiper as SwiperClass } from '../types';

interface SwiperProps extends SwiperOptions {
  /**
   * Swiper container tag
   *
   * @default 'div'
   */
  tag?: string;
  window?: Window;

  /**
   * Swiper wrapper tag
   *
   * @default 'div'
   */
  wrapperTag?: string;

  /**
   * Get Swiper instance
   */
  onSwiper?: (swiper: SwiperClass) => void;

  // CORE_EVENTS
  // MODULES_EVENTS
}

interface SlideData {
  isActive: boolean;
  isVisible: boolean;
  isPrev: boolean;
  isNext: boolean;
}

interface SwiperSlideProps {
  /**
   * Slide tag
   *
   * @default 'div'
   */
  tag?: string;

  /**
   * Enables additional wrapper required for zoom mode
   *
   * @default false
   */
  zoom?: boolean;

  /**
   * Adds lazy preloader to the slide
   *
   * @default false
   */
  lazy?: boolean;

  /**
   * Slide's index in slides array/collection
   *
   * @default false
   */
  virtualIndex?: number;

  /**
   * Slide's child element or render function
   *
   * @default undefined
   */
  children?: React.ReactNode | ((slideData: SlideData) => React.ReactNode);
}

interface SwiperProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    | 'onProgress'
    | 'onClick'
    | 'onTouchEnd'
    | 'onTouchMove'
    | 'onTouchStart'
    | 'onTransitionEnd'
    | 'onKeyPress'
    | 'onDoubleClick'
    | 'onScroll'
    | 'onResize'
  > {}
interface SwiperSlideProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {}

interface SwiperRef extends React.HTMLAttributes<HTMLElement> {
  swiper: SwiperClass;
}

declare const Swiper: React.FunctionComponent<React.RefAttributes<SwiperRef> & SwiperProps>;
declare const SwiperSlide: React.FunctionComponent<SwiperSlideProps>;

declare const useSwiper: () => SwiperClass;
declare const useSwiperSlide: () => SlideData;

export { Swiper, SwiperSlide, SwiperProps, SwiperSlideProps, SwiperRef, useSwiper, useSwiperSlide };
