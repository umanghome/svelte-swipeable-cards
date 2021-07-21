import { cubicOut } from 'svelte/easing';
import { fly } from 'svelte/transition';

export function discard(node, params = {}) {
  const { angle } = params;
  const _distance = 100;
  const distance = angle < 0 ? -1 * _distance : _distance;

  return fly(node, { duration: 100, ...params, x: distance });
}

export function restack(node, params = {}) {
  const { angle } = params;

  return {
    duration: 200,
    ...params,
    css: (t) => {
      return `
        transform: rotate(${angle * t}deg);
        opacity: ${t};
      `;
    },
  };
}

export function scale(node, { from, to }, params) {
  const dx = from.left - to.left;
  const dy = from.top - to.top;

  const d = Math.sqrt(dx * dx + dy * dy);

  return {
    delay: 0,
    duration: Math.sqrt(d) * 60,
    easing: cubicOut,
    css: (t, u) => `transform: scale(${0.8 + t * 0.2});`,
  };
}
