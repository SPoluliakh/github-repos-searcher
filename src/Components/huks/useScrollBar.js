import { useEffect } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

const config = {
  scrollbars: {
    theme: 'os-theme-dark',
    visibility: 'auto',
    autoHide: 'move',
    autoHideDelay: 700,
    dragScroll: true,
  },
};

export const useScrollbar = (element, hasScroll) => {
  useEffect(() => {
    let scrollBar;

    if ((element, hasScroll)) {
      scrollBar = OverlayScrollbars(element.current, config);
    }
    return () => {
      if (scrollBar) {
        scrollBar.destroy();
      }
    };
  }, [element, hasScroll]);
};
