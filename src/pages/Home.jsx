export default function Home() {
  return (
    <section className="d-flex flex-column align-items-center">
      <div className="image-parent">
        <img src="../public/images/contact.jpg" alt="" className="hero-image" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <h2>About Me</h2>
        <p className="fs-5 p-2">
          I was introduced to web development in late 2021 and since then have
          had a continuous interest in expanding my skills.
          <br />I quickly completed a frontend certificate with W3 Schools which
          helped me with the fundamentals and more notably just graduated from
          University of Minnesota's coding bootcamp which gave me the
          proficiency and skills to be a fullstack developer.
        </p>
      </div>
    </section>
  );
}
