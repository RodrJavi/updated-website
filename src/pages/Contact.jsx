import ContactForm from "../components/contactForm";

export default function Contact() {
  return (
    <section className="d-flex flex-column align-items-center">
      <h2>Want to get in touch? Feel free to reach out!</h2>
      <ContactForm />
      <div className="d-flex gap-1 m-3">
        <p className="m-0">You can also download my resume</p>
        <a
          href="../src/assets/documents/Javier-Rodriguez-resume.pdf"
          download={"Javier-Rodriguez-resume.pdf"}>
          right here!
        </a>
      </div>
    </section>
  );
}
