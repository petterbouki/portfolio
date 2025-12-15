// src/components/Contact.jsx

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>

      <p className="section-text">
        Un projet en Data Science, Intelligence Artificielle, IoT ou une
        opportunité professionnelle ? N’hésitez pas à me contacter.
      </p>

      <form
        className="contact-form"
        action="mailto:cedrickonan1998@email.com"
        method="POST"
        encType="text/plain"
      >
        <div className="form-row">
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
          />
        </div>

        <textarea
          name="Message"
          rows="4"
          placeholder="Votre message"
          required
        />

        <button className="btn btn-primary" type="submit">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
