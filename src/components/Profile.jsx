import React, { useState } from 'react'

function Profile() {
  const [hover, setHover] = useState(false);
  return (
    <div className="profile">
      <div className="gf">
        <div className='hng'>
        <img src='profile__img.jpg' alt="profile img" id="profile__img"
        onMouseOver={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        />
        {hover && <div className='cam'>
        <img src='camera-01.png' alt="" />
        </div>}
        
        </div>
        <p id="twitter" style={{fontWeight: 700,fontSize: '20px',lineHeeight: '30px'}}>segun0x</p>
        <p id="slack">olusegunkd2017</p>
      </div>
      <img src="share.png" alt="" className='share web'/>
      <img src="dots.png" alt="" className='share mobile'/>
    </div>
  )
}

export default Profile