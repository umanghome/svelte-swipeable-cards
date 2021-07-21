<script>
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  import { getCharacters } from '../lib/characters';
  import Card from './Card.svelte';
  import { discard, restack } from '../lib/transitions';

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
    <div class="character-card-container" animate:scale>
      <Card
        leftTransition={discard}
        rightTransition={restack}
        on:swipe={swiped}
      >
        <div class="character">
          <img
            draggable="false"
            class="avatar"
            src={character.image}
            alt={character.name}
          />
          <div class="description">
            <h2 class="name">{character.name}</h2>
            <div class="species">{character.gender}, {character.species}</div>
            <div class="status">{character.status}</div>
          </div>
        </div>
      </Card>
    </div>
  {/each}
</div>

<style>
  .characters {
    position: relative;
    width: 300px;
  }

  .character-card-container {
    position: absolute;
    z-index: 2;
  }

  .character-card-container:last-child:not(:first-child) {
    z-index: 1;
    transform: scale(0.8);
  }

  .character {
    --border-radius: 8px;

    display: flex;
    flex-direction: column;

    background-color: white;
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
