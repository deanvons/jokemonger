import { useDispatch, useSelector } from "react-redux";
import { loadJokes } from "../redux-parts/joke-reducer";
import Joke from "./joke";
import { useEffect } from "react";

export default function JokePreviewList() {
  const jokes = useSelector((state) => state.jokes);
  const dispatch = useDispatch();
  

  useEffect(() => {
    
dispatch(loadJokes())

  }, []);

const jokeElements = jokes.map((joke,index) => <Joke joke={joke} key={index}/>)

  // race conditiion ? jokes map
  return <div>
    
    <h1>Welcome please have a look at all these jokes</h1>
    {jokeElements}</div>;
}
