import { gsap } from "gsap";

export function fadeIn(selector: string) {
  gsap.fromTo(selector, { opacity: 0 }, { opacity: 1, duration: 1 });
}
