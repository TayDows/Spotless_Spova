import React from "react";

export default function ContactDetails() {
  return (
    <section className="Contact_details">

      <div className="ContactCard">
        <h6 className="HC_details">HOURS</h6>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>

        <h6 className="HC_details">CONTACT</h6>
        <p>Have questions? Reach out to us!</p>

        <p className="contact-item">
          📧 Email:{" "}
          <a href="mailto:info@spotlessspova.com">
            info@spotlessspova.com
          </a>
        </p>

        <p className="contact-item">📞 Phone: (068) 239-8407</p>

        <h6 className="HC_details">LOCATION</h6>
        <p>📍 5 Dekker Street, Sharon Park</p>

        <div className="MapContainer">
          <iframe
            title="Spotless Spova Location"
            src="https://www.google.com/maps?q=5%20Dekker%20Street%20Sharon%20Park%20Springs&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );

}