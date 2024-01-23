

function Card({ card }){
  console.log("card drawn", card)
  return (
    <div>
      <img src={card.image} alt={card.code}/>
    </div>
  )
}
export default Card;