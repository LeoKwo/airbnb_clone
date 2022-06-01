import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)

export default function Card({item}) {
  let badgeText
  if (item.soldOut) {
    badgeText = "SOLD OUT"
  } else if (item.online) {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={item.img} className="card--photo" />
      <div className="card--stats">
        <FontAwesomeIcon icon="fa-solid fa-star" class="airRed" />
        <span> {item.rating} </span>
        <span className="gray">({item.ratingCount})  </span>
        <span className="gray">{item.location}</span>
      </div>
      <p>{item.experienceName}</p>
      <p><span className="bold">From ${item.price}</span> / person</p>
    </div>
  )
}
