<script>
  import SwipeListener from 'swipe-listener';

  export let leftTransition;
  export let rightTransition;
  export let leftTransitionParams = {};
  export let rightTransitionParams = {};

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

  function setStyles(arr) {
    styles = arr.join('; ');
  }

  function resetStyles() {
    setStyles(['transition: transform 0.15s linear']);
  }

  let styles = '';

  function getAngleFromMatrix(matrix) {
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = values[0];
    const b = values[1];
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

    return angle;
  }

  function discard(node, params) {
    const matrix = getComputedStyle(node).transform.replace('none', '');
    const angle = getAngleFromMatrix(matrix);

    if (angle < 0) {
      // Swipe left
      return leftTransition(node, {
        ...params,
        ...leftTransitionParams,
        angle,
      });
    } else {
      // Swipe right
      return rightTransition(node, {
        ...params,
        ...rightTransitionParams,
        angle,
      });
    }
  }
</script>

<div
  class="card"
  use:swipeAction
  on:swiping={swipingHandler}
  style={styles}
  on:swipecancel={cancelHandler}
  on:swipe
  out:discard
>
  <slot />
</div>

<style>
  .card {
    transform-origin: center 200%;
  }
</style>
