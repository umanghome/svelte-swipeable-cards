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
