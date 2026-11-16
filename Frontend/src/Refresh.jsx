import axios from 'axios'

function Refresh({onNewCard}){
    
    async function refreshData(){
        const newPost = {
            name:Refresh, 
            body:"RefreshBody"
        }

        //Requests a refresh from microservice, then maps the info to cards.
        const response = await axios
            .post("/api/refresh", newPost)
            .then((res) => { 
            const projectData = res.data.map(project => ({projectName: project.projectname, projectDeadline: project.projectdeadline
            }));
            onNewCard(projectData);
            })
            .catch((err) => console.error(err));
    }

    return(
        <button onClick={refreshData}>refresh projects</button>
    );
}
export default Refresh