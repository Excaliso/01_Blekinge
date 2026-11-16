import React, {useState} from 'react'
import axios from 'axios'

function Project({title, onNewCard}){
    //const [response, setResponse] = useState(null);
    const [Project, setProject] = useState("");
    const [ProjectDate, setProjectDate] = useState("");

    function retrieveChange(change){
        setProject(change.target.value);
    }
     function retrieveChangeDate(change){
        setProjectDate(change.target.value);
    }
    
    //Send Project name, "worker" (microservice) checks if unique.
    async function ProjectSend(){
        if(Project === ''){
            console.log("Error, Invalid name.")
        }
        else{
            console.log(ProjectDate)
            const newPost = {name:Project, deadline:ProjectDate, body:"projectBody"}
            const response = await axios
                .post("/api/interact", newPost)

                .then((res) => { 
                    if(res.data.success === true){
                        setResponse(res.data); 
                        onNewCard({ projectName: Project, projectdeadline: ProjectDate});
                    }
                })
                .catch((err) => console.error(err));
        }
    }
    
    return(
        <div id='inputBox'>
            <form className="Project" >
                <label> {title}
                    <input
                    type="text"
                    value={Project}
                    onChange={retrieveChange}
                    />
                    <label> With deadline </label>
                    <input 
                    type="date"
                    value={ProjectDate}
                    onChange={retrieveChangeDate}
                    />
                </label>
                <span style={{marginRight: 30}}/>
                <button type="button" onClick={ProjectSend}> ADD </button>
            </form>
        </div>
    );
}

export default Project