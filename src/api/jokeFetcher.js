export function getJoke() {
  return fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart");
}

export function getJokes() {
  return fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10",
  );
}
