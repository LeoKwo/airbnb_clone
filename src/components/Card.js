import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { faStar } from '@fortawesome/free-solid-svg-icons'
//library.add(faStar)

export default function Card() {
  return (
    <div className="card">
      <img src={require("../img/Pierre-Person.jpeg")} className="card--photo" />
      <div className="card--stats">
        <FontAwesomeIcon icon="fa-solid fa-star" class="airRed" />
        <span> 4.7 </span>
        <span className="gray">(23)  </span>
        <span className="gray">Pittsburgh, PA</span>
      </div>
      <p>Life Lessons with abc</p>
      <p><span className="bold">From $163</span> / person</p>
    </div>
  )
}
