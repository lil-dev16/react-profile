import React from 'react'
import Image from '../segun.jfif'

function Profile() {
  return (
    <div className="profile">
      <img src={Image} alt="profile img" id="profile__img"/>
      <p id="twitter" style={{fontWeight: 700,fontSize: '20px',lineHeeight: '30px'}}>segun0x</p>
      <p id="slack">segunn</p>
    </div>
  )
}

export default Profile