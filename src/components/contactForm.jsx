import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xqknoyrn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column w-75">
      <label htmlFor="email" className="fs-3">
        Email Address:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-100 my-2"
        placeholder="email@email.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="h-100 my-2"
        placeholder="I want to know more about your skills!"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className="btn btn-danger btn-hover"
        disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
