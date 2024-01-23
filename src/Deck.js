import { useState } from 'react';
import Card from './Card';

function Deck({ deckId }){
  const [cardDrawn, setCardDrawn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("card drawn", cardDrawn);
  console.log(deckId)

  async function fetchAndSetCard(){
    const resp = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const { cards } = await resp.json();
    setCardDrawn(cards);
    setIsLoading(false)
  }

    // if(isLoading) return <p>Loading..</p>;
  return(
    <div>
      <button onClick={fetchAndSetCard}>Draw a card</button>
      {cardDrawn && <Card card={cardDrawn[0]}/>}
    </div>
  )
}

export default Deck;