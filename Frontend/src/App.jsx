import { useEffect, useState } from 'react'
import Card from './card'
import Refresh from './Refresh.jsx'

function App( {newCard} ) {
  const [cards, setCards] = useState([{projectName:"testing", projectDeadline:"2026-01-01"}]);

  //maps cards info into actual "cards". 
  useEffect(() => { if(newCard){
    setCards(prev => [...prev, newCard]);
  }}, [newCard]);

  const handleNewCard = (card) => {
    setCards(card);
  };

  return (
    <>
      <section id="center">
        <Refresh onNewCard={handleNewCard}/>
        
        <div className="projectCards">
        {cards.map(card => (<Card key={card.projectName} projectName={card.projectName} projectDeadline={card.projectDeadline} />))}
        </div>
        
      </section>
      <section id="spacer"></section>
    </>
  )
}
export default App
