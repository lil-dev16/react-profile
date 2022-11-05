import React from 'react';
import { useState } from 'react';
import { Footer } from '../components/Footer';

export const Contact = () => {
  const [formValues, setFormValues] = useState({firstname: "", lastname: "", email:""});

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value });
    console.log(formValues);
  }
  return (
    <div className='contact_container'>
      <div className="info">
        <pre>{JSON.stringify(formValues,undefined, 2)}</pre>
        <h1>Contact Me</h1>
        <p>Hi there, contact me about anything you have in mind</p>
      </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="first_form">
            <div className="firstn">
            <label htmlFor="First name">First name</label>
            <input 
              name='firstname'
              type="text" 
              id='first_name' 
              className='forrm form1' 
              placeholder='Enter your first name'
              onChange={handleChange}
              />
            </div>
            <div className="lastn">
              <label htmlFor="">Last name</label>
            <input 
            name='lastname'
            type="text" 
            id='last_name' 
            className='forrm form2' 
            placeholder='Enter your last name'
            onChange={handleChange}
            />
            </div>
          </div>
          <div className="emai">
            <label htmlFor="">Email</label>
            <input 
            name='email'
            type="text" 
            id='email' 
            className='forrm form3' 
            placeholder='yourname@gmail.com'
            required
            onChange={handleChange}
            />
          </div>
          <label htmlFor="">Message</label>
            <textarea 
            placeholder='Send me a message and Ill reply you as soon as possible...'
            name="" 
            id="message"
            cols="30" 
            rows="10" 
            className='forrm'
             ></textarea>
            <button 
            type="submit"
            id="btn__submit"
            >Submit</button>
        </form>
        <Footer />
    </div>
  )
}
