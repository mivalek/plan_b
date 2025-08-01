import React from "react";

function ContactForm() {
  return (
    <div className="grow w-full max-w-md mx-auto">
      <h3 className="text-xl font-normal m-0 text-end leading-7">
        Got a question?
      </h3>
      <form action="">
        <label htmlFor="name-input">Name</label>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="You full name"
          required
        />
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="You email address"
          required
        />
        <label htmlFor="subject-input">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject-input"
          placeholder="What is your message about"
          required
        />
        <label htmlFor="message-input">Message</label>
        <textarea
          name="message"
          id="message-input"
          placeholder="Enter your message here"
          rows={15}
          spellCheck="true"
          required
        ></textarea>
        <button className="btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
