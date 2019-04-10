import React from "react"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="calloutWrapper">
        <div className="callout">Contact</div>
      </div>
      <div className="wrapper">
        <h2>Want to talk?</h2>
        <p className="mail">hello [at] itsmejeremyd.com</p>
        <p className="fillOut">(or use the contact form)</p>

        {/* contact form */}
        <form
          action="http://www.focuspocus.io/magic/jeremy.dryden@gmail.com"
          method="POST"
          className="contactForm"
        >
          <label htmlFor="name" className="visuallyHidden">
            Name:
          </label>
          <input type="text" name="name" id="name" placeholder="Name:" />

          <label htmlFor="email" className="visuallyHidden">
            Email:
          </label>
          <input type="text" name="email" id="email" placeholder="Email:" />

          <label htmlFor="subject" className="visuallyHidden">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />

          <label htmlFor="message" className="visuallyHidden">
            Message:
          </label>
          <textarea name="message" id="message" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
