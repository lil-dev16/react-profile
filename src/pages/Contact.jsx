import React from 'react'

export const Contact = () => {
  return (
    <div>
        <h1>Contact Me</h1>
        <p>Hi there, contact me about anything you have in mind</p>
        <div className="form">
            <input type="text" id='first_name'/>
            <input type="text" id='last_name'/>
            <input type="text" id='email'/>
            <textarea name="" id="message" cols="30" rows="10" ></textarea>
            <button id="btn__submit"></button>
        </div>
    </div>
  )
}
