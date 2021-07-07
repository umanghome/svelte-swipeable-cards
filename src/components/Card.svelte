<script>
  import SwipeListener from 'swipe-listener';

  export let character;

  function swipeAction (node) {
    const listener = SwipeListener(node, {
      preventScroll: true,
      lockAxis: true,
    });    

    return {
      destroy: () => {
        listener.off();
      },
    }
  }

  function swipingHandler (event) {
    const [ start, end ] = event.detail.x;
    
    const diff = end - start;
    const direction = diff > 0 ? 'right' : 'left';

    const width = 300;
    const halfWidth = width / 2;
    const threshold = 15;

    const percentage = diff * threshold / halfWidth;
    const clampedPercentage = direction === 'right' ? Math.min(percentage, 30) : Math.max(percentage, -30);

    setStyles([`transform: rotate(${clampedPercentage}deg)`]);
  }

  function cancelHandler () {
    resetStyles();
  }

  function releaseHandler () {
    resetStyles();
  }

  function setStyles (arr) {
    styles = arr.join('; ')
  }

  function resetStyles () {
    setStyles([ 'transition: transform 0.15s linear' ]);
  }

  let styles = '';
</script>

<div class="card" use:swipeAction on:swiping={swipingHandler} style={styles} on:swiperelease={releaseHandler} on:swipecancel={cancelHandler}>
  <div class="avatar" style={`--avatar: url(${character.image});`}></div>
  <div class="description">
    <h2 class="name">{character.name}</h2>
    <div class="species">{character.gender}, {character.species}</div>
    <div class="status">{character.status}</div>
  </div>
</div>

<style>
  .card {
    --border-radius: 8px;

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

  .species, .status {
    color: #848484;
  }
</style>