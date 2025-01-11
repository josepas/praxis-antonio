import React from "react";
import '../globals.css';

export default function Impressum() {
  return (
    <section className="impressum-section">
      <h3 className="impressum-title">Impressum</h3>
      <p><strong>Angaben gemäß § 5 TMG:</strong></p>
      <p>Physiotherapie Antonio Baptista<br />
         Wilhelm-Franke- Str. 38<br />
         01219 Dresden<br />
         Deutschland</p>
      
      <p><strong>Vertreten durch:</strong><br />
         Antonio Baptista</p>

      <p><strong>Kontakt:</strong><br />
         Telefon: +49 (0) 351 4723966<br />
         E-Mail: <a href="mailto:physioantoniobaptista@gmail.com">physioantoniobaptista@gmail.com</a></p>

      <p><strong>Berufsbezeichnung:</strong><br />
         Physiotherapeut (verliehen in Deutschland)</p>

      <p><strong>Berufsrechtliche Regelungen:</strong><br />
         Heilberufegesetz (HGB) des Bundeslandes Sachsen<br />
         Einsehbar unter: <a href="https://www.recht.sachsen.de/" target="_blank" rel="noopener noreferrer">www.recht.sachsen.de</a></p>

      <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
         Antonio Baptista<br />
         Wilhelm-Franke- Str. 38<br />
         01219 Dresden</p>

      <p><strong>Streitschlichtung:</strong><br />
         Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
    </section>
  );
}
