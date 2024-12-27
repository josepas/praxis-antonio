import React from "react";
import '../globals.css';

export default function Datenschutz() {
  return (
    <section className="datenschutz-section">
      <h3 className="datenschutz-title">Datenschutzerklärung</h3>
      <p><strong>1. Allgemeine Hinweise</strong></p>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung gibt Ihnen Auskunft darüber, wie wir mit Ihren personenbezogenen Daten umgehen und welche Rechte Sie haben.
      </p>

      <p><strong>2. Verantwortliche Stelle</strong></p>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
        Antonio Baptista<br />
        Wilhelm-Franke- Str. 38<br />
        01219 Dresden<br />
        Telefon: +49 (0) 351 4723966<br />
        E-Mail: <a href="mailto:physioantoniobaptista@gmail.com">physioantoniobaptista@gmail.com</a>
      </p>

      <p><strong>3. Erhebung und Speicherung personenbezogener Daten</strong></p>
      <p>
        Beim Besuch unserer Website werden folgende Daten automatisch erhoben und gespeichert:
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
          <li>Referrer URL</li>
        </ul>
      </p>

      <p><strong>4. Zweck der Datenverarbeitung</strong></p>
      <p>
        Wir verwenden Ihre Daten, um die Funktionsfähigkeit unserer Website sicherzustellen und unsere Dienstleistungen zu verbessern.
      </p>

      <p><strong>5. Rechte der Betroffenen</strong></p>
      <p>
        Sie haben das Recht:
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO).</li>
          <li>Berichtigung oder Löschung Ihrer Daten zu verlangen (Art. 16 und Art. 17 DSGVO).</li>
          <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO).</li>
          <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO).</li>
          <li>Sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).</li>
        </ul>
      </p>

      <p><strong>6. Kontakt</strong></p>
      <p>
        Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie uns unter physioantoniobaptista@gmail.com kontaktieren.
      </p>
    </section>
  );
}
