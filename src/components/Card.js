import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)

export default function Card({img, rating, ratingCount, location, experienceName, price, soldOut, online}) {
  let badgeText
  if (soldOut) {
    badgeText = "SOLD OUT"
  } else if (online) {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={img} className="card--photo" />
      <div className="card--stats">
        <FontAwesomeIcon icon="fa-solid fa-star" class="airRed" />
        <span> {rating} </span>
        <span className="gray">({ratingCount})  </span>
        <span className="gray">{location}</span>
      </div>
      <p>{experienceName}</p>
      <p><span className="bold">From ${price}</span> / person</p>
    </div>
  )
}
