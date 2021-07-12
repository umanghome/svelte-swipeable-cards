<script>
  import { fade, fly } from 'svelte/transition';

  import SwipeListener from 'swipe-listener';

  export let character;

  function swipeAction(node) {
    const listener = SwipeListener(node, {
      preventScroll: true,
      lockAxis: true,
    });

    return {
      destroy: () => {
        listener.off();
      },
    };
  }

  function getDirection(event) {
    const [start, end] = event.detail.x;

    const diff = end - start;
    const direction = diff > 0 ? 'right' : 'left';

    return direction;
  }

  function swipingHandler(event) {
    const [start, end] = event.detail.x;

    const diff = end - start;
    const direction = getDirection(event);

    const width = 300;
    const halfWidth = width / 2;
    const threshold = 15;

    const percentage = (diff * threshold) / halfWidth;
    const clampedPercentage =
      direction === 'right'
        ? Math.min(percentage, 30)
        : Math.max(percentage, -30);

    setStyles([`transform: rotate(${clampedPercentage}deg)`]);
  }

  function cancelHandler() {
    resetStyles();
  }

  function releaseHandler(event) {
    const direction = getDirection(event);

    if (direction === 'right') {
      resetStyles();
    }
  }

  function setStyles(arr) {
    styles = arr.join('; ');
  }

  function resetStyles() {
    setStyles(['transition: transform 0.15s linear']);
  }

  let styles = '';

  function getAngleFromMatrix(matrix) {
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

    return angle;
  }

  function discard(node, params) {
    const matrix = getComputedStyle(node).transform.replace('none', '');
    const angle = getAngleFromMatrix(matrix);

    if (angle < 0) {
      return fly(node, { ...params, duration: 100, x: -100 });
    } else {
      return fade(node, params);
    }
  }
</script>

<div
  class="card"
  use:swipeAction
  on:swiping={swipingHandler}
  style={styles}
  on:swiperelease={releaseHandler}
  on:swipecancel={cancelHandler}
  on:swipe
  out:discard
>
  <div class="avatar" />
  <div class="description">
    <h2 class="name">{character.name}</h2>
    <div class="species">{character.gender}, {character.species}</div>
    <div class="status">{character.status}</div>
  </div>
</div>

<style>
  .card {
    --border-radius: 8px;

    background-color: white;
    display: flex;
    flex-direction: column;
    transform-origin: center 200%;
  }

  .avatar {
    background-image: var(--avatar);
    height: 300px;
    width: 300px;

    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .description {
    padding: 0.5em 1em;
    border: 1px solid black;

    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  h2 {
    margin: 0;
    margin-bottom: 0.2em;
  }

  .species,
  .status {
    color: #848484;
  }
</style>
