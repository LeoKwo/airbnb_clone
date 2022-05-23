import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <img src={require("../img/heros.png")} className="hero--photo"/>
      <h1 className="hero--header">Experiences</h1>
      <p className="hero--text">Discover and join unique experiences led by hosts around the globe.</p>
    </section>
  )
}
