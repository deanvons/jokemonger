export const REPLACE_JOKES = "[joke] update all jokes";
export const LOAD_JOKES = "[joke] load some jokes";

export const replaceAllJokes = (payload) => {
  return { type: REPLACE_JOKES , payload};
};

export const loadJokes = () => {
  return { type: LOAD_JOKES};
};

let initialState = []

export const jokeReducer = (state = initialState , action) => {
  switch (action.type) {
    case REPLACE_JOKES:
      return action.payload;
    default:
      return state;
  }
};

export const jokesMiddleWare =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action); // why here ?
    console.log("joke middleware working")

    if (action.type === LOAD_JOKES) {
      fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&idRange=1-20&amount=10")
        .then((response) => response.json())
        .then((result) => dispatch(replaceAllJokes(result.jokes)));
    }
  };
