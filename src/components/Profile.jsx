import React from 'react'
import Image from '../segun.jfif'

function Profile() {
  return (
    <div className="profile">
      <img src={Image} alt="" id="profile__img" />
      <h3 id="twitter">segun0x</h3>
      <p id="slack">segunn</p>
    </div>
  )
}

export default Profile