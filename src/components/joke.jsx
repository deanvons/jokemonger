import { useState } from "react";

export default function Joke(props) {
  const [deliveryIsVisible, setDeliveryIsVisible] = useState(false);

  function showDelivery() {
    setDeliveryIsVisible(true);
  }

  function handleJokeTitleClick() {}

  return (
    <>
      <h2>{props.joke.setup}....</h2>

      <h2 style={{ visibility: deliveryIsVisible ? "visible" : "hidden" }}>
        {props.joke.delivery}
      </h2>

      <button
        onClick={showDelivery}
        className="border-solid border-4 border-amber-400"
      >
        Show
      </button>
    </>
  );
}

// no control over updateing this object
