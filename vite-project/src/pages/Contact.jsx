import React from 'react'

const Contact = () => {
  const handleFormSubmit=(formData)=>{
    const formInputdata=Object.fromEntries(formData.entries())
    console.log(formInputdata)
  }
  return (
    <section className="section-contact">
      <h2 className='container-title'>Contact Us</h2>
      <div className="contact-wrapper container">
      <form action={handleFormSubmit}>
      <input type="text"
      required
      className='form-control'
      autoComplete="false"
      placeholder="Enter your name"
      name="username"
      />
      <input type="email"
      required
      className='form-control'
      autoComplete="false"
      placeholder="Enter your email"
      name="email"
      />
      <textarea 
      rows="10"
      required
      className='form-control'
      autoComplete="false"
      placeholder="Enter your message"
      name="message"
      ></textarea>
      <button type="submit">Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
