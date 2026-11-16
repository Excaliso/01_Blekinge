import { useState } from "react";
import App from '../App.jsx'
import Project from '../Projects.jsx'


function projectDisplay() {
  const [newCard, setNewCard] = useState(null);

  return (
    <>
      <Project title="Project name: " onNewCard={setNewCard} />
      <App newCard={newCard} />
    </>
  );
}

export default projectDisplay;