import React from 'react'

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className='newsletter'>
      <div className="newsletter-background">
        Newsletter
      </div>
      <h1>Subscribe to Our Newsletter</h1>
      <p>Get the latest information and promo offers directly</p>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Email address'></input>
        <button type='submit'>Get Started</button>
      </form>
    </section>
  )
}

export default Newsletter