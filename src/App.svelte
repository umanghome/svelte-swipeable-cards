<script>
  import Characters from "./components/Characters.svelte";
</script>

<main>
  <Characters />
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
