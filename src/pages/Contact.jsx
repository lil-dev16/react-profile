import React from 'react';
import { useState } from 'react';
import { Footer } from '../components/Footer';

export const Contact = () => {
  const [formValues, setFormValues] = useState({firstname: "", lastname: "", email:""});
  const [errorVal, setErrorVal] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorVal(validate(formValues)) ;
    setIsSubmit(true);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value });
  }
  // useEffect(() => {
  //   console.log(errorVal);
  //   if (Object.keys(errorVal).length === 0) {
  //     console.log(formValues);
  //   }
  // }, [errorVal]);
  const validate = (val) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!val.firstname) {
      error.firstname = "Please input your first name"

    }
    if(!val.lastname) {
      error.lastname = "Please input your last name"
    }
    if(!val.email) {
      error.email = "Please input your email address"
    }else if (!regex.test(val.email)) {
      error.email = "This is not a valid email format!";
    }
    return error
  }

  const name = "segun0x";
  return (
    <div className='contact_container'>
      <div className="info">
        <h1>Contact Me</h1>
        <p>Hi there, contact me about anything you have in mind</p>
      </div>
      {Object.keys(errorVal).length === 0 && isSubmit ? (
        <div className="display_success" style={{}}>
        <p>Form Submitted</p>
      </div>
      ) : (
        <div>
      </div>
      )}
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
              <p className='err'>{errorVal.firstname}</p>
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
             <p className='err'>{errorVal.lastname}</p>
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
            onChange={handleChange}
            />
             <p className='err'>{errorVal.email}</p>
          </div>
          <label htmlFor="">Message</label>
            <textarea 
            placeholder='Send me a message and Ill reply you as soon as possible...'
            name="" 
            id="message"
            cols="25" 
            rows="7" 
            className='forrm'
             ></textarea>
             <section className="checksec">
              <input type="checkbox" name="" id="" />
              <p>Default You agree to providing your data to {name} who may contact you.</p>
             </section>
            <button 
            type="submit"
            id="btn__submit"
            >Send Message</button>
        </form>
        <Footer />
    </div>
  )
}
