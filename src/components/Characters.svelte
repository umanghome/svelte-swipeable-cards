<script>
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  import { getCharacters } from '../lib/characters';
  import Card from './Card.svelte';

  let characters = [];
  let index = 0;

  $: charactersToRender =
    characters.length > 0
      ? index === characters.length - 1
        ? [characters[index], characters[0]]
        : [characters[index], characters[index + 1]]
      : [];

  onMount(async () => {
    characters = await getCharacters();
  });

  function swiped() {
    if (index === characters.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }
  }

  function scale(node, { from, to }, params) {
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
</script>

<div class="characters">
  {#each charactersToRender as character (character.id)}
    <div class="character" animate:scale>
      <Card
        --avatar={`url(${character.image})`}
        {character}
        on:swipe={swiped}
      />
    </div>
  {/each}
</div>

<style>
  .characters {
    position: relative;
    width: 300px;
  }

  .character {
    position: absolute;
    z-index: 2;
  }

  .character:last-child:not(:first-child) {
    z-index: 1;
    transform: scale(0.8);
  }
</style>
