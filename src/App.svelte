<script>
import { onMount } from "svelte";
import Card from "./components/Card.svelte";

import { getCharacters } from "./lib/characters";

let characters = [];
let index = 0;

$: character = characters[index];

onMount(async () => {
  characters = await getCharacters();
});

</script>

<main>
  {#if character}
    <Card {character} />
  {/if}
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(html),
  :global(body),
  :global(#app) {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  main {
    height: 100%;
    width: 100%;
    
    padding: 2em;

    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
</style>
