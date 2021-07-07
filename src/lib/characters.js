export function getCharacters() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then(({ results }) => results);
}
