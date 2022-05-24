import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import CardData from './cardData' // local data for now..

export default function App() {
  const cards = CardData.map(item => {
    return (
      <Card
        key={item.id}
        img={item.img}
        rating={item.rating}
        ratingCount={item.ratingCount}
        location={item.location}
        experienceName={item.experienceName}
        price={item.price}
        soldOut={item.soldOut}
        online={item.online}
      />
    )
  })

  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="cards">
        {cards}
      </div>
    </div>
  )
}
