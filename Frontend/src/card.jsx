// Was meant to be larger and "actual cards", but the time slipped away.
function Card({projectName, projectDeadline}){
    return(
        <div className="cardFull">
            <div className="project">
                <p>
                {projectName}
                {projectDeadline}
                </p>
            </div>
        </div>
    );
}

export default Card