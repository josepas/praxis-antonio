import React from "react";
import '../globals.css';
import styles from './leistungen.module.css'

export default function Leistungen() {
  return (
    <section className={styles.leistungenSection}>
      <h3 className={styles.title}>Unsere Leistungen</h3>
      <div className={styles.gridContainer}>
        <div className={styles.card}>
          <h4>Manuelle Therapie</h4>
          <p>Wir behandeln Funktionsstörungen des Bewegungsapparates gezielt und effektiv.</p>
        </div>
        <div className={styles.card}>
          <h4>Krankengymnastik</h4>
          <p>Wir bieten individuell angepasste Übungen zur Förderung von Kraft, Beweglichkeit und Koordination.</p>
        </div>
        <div className={styles.card}>
          <h4>Massagetherapie</h4>
          <p>Wir arbeiten für Entspannung und Schmerzreduktion mit gezielten Massagetechniken.</p>
        </div>
        <div className={styles.card}>
          <h4>Physiotherapie nach Operationen</h4>
          <p>Wir gewähren Unterstützung bei der Rehabilitation nach chirurgischen Eingriffen.</p>
        </div>
        <div className={styles.card}>
          <h4>Sportphysiotherapie</h4>
          <p>Zur Prävention und Behandlung von Sportverletzungen.</p>
        </div>
        <div className={styles.card}>
          <h4>Lymphdrainage und Kompressionsbandagierung</h4>
          <p>Mit speziellen Techniken zur Unterstützung des Lymphsystems und Reduktion von lymphatisch bedingten Schwellungen.</p>
        </div>
        <div className={styles.card}>
          <h4>Beckenbodentherapie</h4>
          <p>Als gezieltes Training für Männer und Frauen zur Stärkung der Beckenbodenmuskulatur zur Behandlung oder Vorbeugung von Inkontinenz u.a.</p>
        </div>
        <div className={styles.card}>
          <h4>KG ZNS (PNF)</h4>
          <p>Krankengymnastik für das Zentrale Nervensystem für Erwachsene, ganz spezifisch bieten wir Propriozeptive neuromuskuläre Fazilitation (PNF) an. Diese dreidimensionale Behandlungsmethode stimuliert und aktiviert geschwächte Muskelketten.</p>
        </div>
        <div className={styles.card}>
          <h4>Craniomandibuläre Dysfunktion (CMD)</h4>
          <p>Bei gestörtem Zusammenspiel verschiedener Muskeln, Sehnen und Gelenke wird eine schmerzhafte Fehlregulation des Kauapparates verursacht. Durch gezielte Techniken im und um den Mundbereich werden diese gelöst.</p>
        </div>
        <div className={styles.card}>
          <h4>Atemtherapie</h4>
          <p>Bei Lungen-, Herz-Kreislauf-Erkrankungen oder nach chirurgischen oder orthopädischen Eingriffen, um die bestmögliche Wiederherstellung, Erhaltung und Verbesserung der Atmung und der körperlichen Leistungsfähigkeit zu erzielen.</p>
        </div>
        <div className={styles.card}>
          <h4>Wärmetherapie, Infrarotlampe, Fangopackungen</h4>
          <p>Wärmetherapie fördert die Durchblutung, wirkt schmerzlindernd und entspannend auf Gewebe und Muskulatur.</p>
        </div>
        <div className={styles.card}>
          <h4>Elektrotherapie</h4>
          <p>Über Elektroden wird dem Patienten Strom zugeleitet, um die Heilung zu verbessern. Hauptanwendung findet diese zur Muskellockerung oder -stimulation, Durchblutungsförderung und Schmerzreduktion. Beim Ultraschall handelt es sich um eine Kombination von Wärme- und Elektrotherapie. Durch die Schallwellen wird im Gewebe Wärme erzeugt, die zur Gelenk- und Rückenschmerzen-Linderung genutzt wird.</p>
        </div>
        <div className={styles.card}>
          <h4>Traktion</h4>
          <p>Der Therapeut wendet dosierte Zugkraft auf die Gelenke der Extremitäten und der Wirbelsäule an, um Schmerzlinderung zu erreichen.</p>
        </div>
      </div>
      <p className={styles.footerText}>Und viele weitere physiotherapeutische Behandlungen. Sprechen Sie mit uns - wir finden einen guten Weg für Sie!</p>
    </section>
  );
}
