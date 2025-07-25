import { Outlet } from "react-router-dom";

import { useContext } from "react";
import { countdownContext } from "./context/countdownContext";

import NewYear from "./assets/newYear.jpg";

import "./App.css";

function App() {
  const { event } = useContext(countdownContext);

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <div
      className="app"
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : { backgroundImage: `url(${NewYear})` }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
