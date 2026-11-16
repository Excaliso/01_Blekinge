import { useState } from "react";
import axios from 'axios'

function login({setLoginToken}) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    function retrieveUChange(change){
        setUsername(change.target.value);
    }
     function retrievePChange(change){
        setPassword(change.target.value);
    }

    //Sends to microservice
    async function checkLogin(){
        const newPost = {
                username:Username, 
                password:Password, 
                body:"userBody"
        }

        //Check if the username is in the database + password. this via worker for user.
        await axios
            .post("/api/login", newPost)
            .then((res) => { 
                if(res.data.success === true){
                    setLoginToken(Username);
                }
            })
            .catch((err) => console.error(err));
    }

  return (
    <>
        <div>
            <form className="username">
                <h1>username</h1>
                <input type="text" value={Username} onChange={retrieveUChange} />
                <br/>
                <h1>password</h1>
                <input type="text" value={Password} onChange={retrievePChange} />
                <br/>
                <br/>
                <button type="button" onClick={checkLogin}> Login </button>
            </form>
        </div>
    </>
  );
}

export default login;