import { useEffect, RefObject } from 'react';

const useAnimationObserver = (
  ref: RefObject<HTMLElement>,
  animationClass: string = 'appear',
  threshold: number = 0.1
) => {
  useEffect(() => {
    const observerOptions = {
      threshold: threshold
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (ref.current) {
      const animatedElements = ref.current.querySelectorAll('.fade-in, .slide-from-left, .slide-from-right, .scale-in');
      animatedElements.forEach(element => {
        observer.observe(element);
      });
    }

    return () => {
      if (ref.current) {
        const animatedElements = ref.current.querySelectorAll('.fade-in, .slide-from-left, .slide-from-right, .scale-in');
        animatedElements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, [ref, animationClass, threshold]);
};

export default useAnimationObserver;
