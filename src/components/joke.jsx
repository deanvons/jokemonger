import { useEffect, useReducer, useState } from "react";
import { getJokes } from "../api/jokeFetcher";

export default function Joke(props) {
  let maxNumber = 6;

  function jokeReducer(state, action) {
    switch (action.type) {
      case "UPDATE_DELIVERY":
        return { ...state, delivery: action.payload };
      case "RESET_JOKE":
        return { setup: "", delivery: "" };
      default:
        return state;
    }
  }

  const [joke, dispatch] = useReducer(jokeReducer, {
    setup: "What is brown and sticky?",
    delivery: "A stick",
  });

  // lifecycle
  // component did mount
  useEffect(() => {
    console.log("Component did mount");
  }, []);

  useEffect(() => {
    if (
      joke ==
      {
        setup: "What is brown and sticky?",
        delivery: "A stick",
      }
    ) {
      return;
    }

    console.log("Component did update some state");
  }, [joke]);

  // lifted

  function handleJokeTitleClick() {
    //
    //setJoke("Some delivery update");
    dispatch({ type: "UPDATE_DELIVERY", payload: "Some delivery update" });
    // get some actualy joke data
    

    // let the parent know something happened
    //props.onTitleClick("Sure mamma")
  }

  return (
    <>
      <h2 onClick={handleJokeTitleClick}>Joke Title</h2>

      
      <h3>A message from mother: </h3>
      <button className="border-solid border-4 border-amber-400">Click me</button>
      <button className="bg-red-500 text-white p-8 text-3xl">
  Click me
</button>
    </>
  );
}

// no control over updateing this object
