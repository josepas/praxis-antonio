import React from "react";
import '../globals.css';
import './contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <h3 className="contact-title">Kontaktieren Sie uns</h3>
      <p className="contact-description">
        Besuchen Sie uns vor Ort oder nehmen Sie online Kontakt mit uns auf!
      </p>

      <div className="contact-info">
        <p><strong>Adresse:</strong> Wilhelm-Franke- Str. 38, 01219 Dresden</p>
        <p><strong>Telefon:</strong> +49 (0) 351 4723966</p>
        <p><strong>Handy + Whatsapp:</strong> +49 (0)15156897402</p>
        <p><strong>E-Mail:</strong> <a href="mailto:physioantoniobaptista@gmail.com">physioantoniobaptista@gmail.com</a></p>
      </div>

      <div className="contact-hours">
        <h4>Öffnungszeiten:</h4>
        <ul>
          <li><strong>Montag – Donnerstag:</strong> von 8 bis 20 Uhr</li>
          <li><strong>Freitags:</strong> von 8 bis 13 Uhr</li>
          <li>und nach Vereinbarung.</li>
        </ul>
      </div>

      <p className="contact-location">
        Unsere Praxis ist in Leubnitz/Neuostra, 50 m von einer Bushaltestelle gelegen und gut mit öffentlichen Verkehrsmitteln erreichbar. Parkplätze stehen ebenfalls zur Verfügung.
      </p>
    </section>
  );
}
