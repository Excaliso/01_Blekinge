import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { useState } from "react";

import './index.css'
import ProjectDisplay from './pages/projectsDisplay.jsx'
import Login from './pages/login.jsx';

function Main() {
  const [loginToken, setLoginToken] = useState();
  //If the user isn't logged in, get them to the login page
  if(!loginToken){
    return(
      <Login setLoginToken={setLoginToken} />
    )
  }
  //Otherwise, let them use app
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProjectDisplay/>} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
