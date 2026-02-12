import { useEffect, useReducer, useState } from "react";
import Joke from "./joke";
import { getJokes } from "../api/jokeFetcher";
import UserInfo from "./userInfo";
import { useDispatch, useSelector } from "react-redux";
import { SampleUpdate } from "../redux-parts/user-reducer";
import { useNavigate } from "react-router-dom";
import { loadJokes } from "../redux-parts/joke-reducer";

export default function JokeList() {
 
const jokes = useSelector((state) => state.jokes);
  const user = useSelector((state)=>state.user)
 const dispatch = useDispatch()





  useEffect(() => {
    dispatch(loadJokes())
  }, []);

function updateUserState(){
  dispatch(SampleUpdate())
  // navigate("/user")
}

const jokeElements = jokes.map((joke,index) => <Joke joke={joke} key={index}/>)
  // race conditiion ? jokes map
  return (
    <div>
      <h1>Welcome please rate the jokes</h1>
      <h1>{user.username}</h1>
      <button onClick={updateUserState} className="border_solid border-4">Update user with sample</button>
    {jokeElements}
    </div>
  );
}
