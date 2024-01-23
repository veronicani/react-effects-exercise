import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialState = {data: null, isLoading: true}
  const [deck, setDeck] = useState(initialState);

  useEffect(function getShuffledDeckWhenMounted() {
    async function fetchShuffledDeck() {
      const resp = await ("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      const { deck_id, remaining } = await resp.json();
      setDeck({data: {deck_id, remaining}, isLoading: false});
    }
  });
  
  return (
    <div className="App">
      <Deck deck={deck} /> {*/ Card component goes in here */}
    </div>
  );
}

export default App;
