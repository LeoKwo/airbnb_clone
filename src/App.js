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
        item={item}
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
