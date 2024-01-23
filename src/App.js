import { useState, useEffect } from 'react';
import './App.css';
import Deck from './Deck';

function App() {
  const initialState = {data: null, isLoading: true}
  const [deck, setDeck] = useState(initialState);
  console.log("app", deck)

  useEffect(function getShuffledDeckWhenMounted() {
    async function fetchShuffledDeck() {
      const resp = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      const { deck_id} = await resp.json();
      setDeck({data: deck_id, isLoading: false});
    }
    fetchShuffledDeck();
  }, []);

  if(deck.isLoading) return <p>Loading...</p>;

  return (
    <div className="App">
      <Deck deckId={deck.data} />
    </div>
  );
}

export default App;
