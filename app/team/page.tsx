import React from "react";
import '../globals.css';
import './team.css';
import Image from 'next/image';

export default function Team() {
  return (
    <>
      <section className="about-section">
        <h3 className="about-title">Über Uns</h3>
        <p className="about-description">
          Physiotherapie Antonio Baptista – Ihre Gesundheit und deren Wiederherstellung steht bei uns im Mittelpunkt.
        </p>
        <div className="about-highlights">
          <ul>
            <li>Erfahrene Physiotherapeuten mit modernster Ausbildung.</li>
            <li>Persönliche Betreuung und maßgeschneiderte Therapiepläne.</li>
            <li>Freundliche und entspannte Atmosphäre.</li>
          </ul>
        </div>
        <p className="about-goal">
          Unser Ziel ist es, Ihre Mobilität, Lebensqualität und Schmerzfreiheit wiederherzustellen.
        </p>
      </section>

      <section className="team-list">
        <h3 className="team-title">Unser Team</h3>
        <p className="team-description">Lernen Sie unsere Experten kennen:</p>

        <div className="grid-container">
          <div className="team-member">
            <Image
              src="/team-member-javier.jpeg"
              alt="Antonio Baptista"
              width={150}
              height={150}
              className="team-photo"
            />
            <div className="team-info">
              <h4>Herr Antonio Baptista</h4>
              <p><strong>Rolle:</strong> Praxisinhaber, Physiotherapeut</p>
            </div>
          </div>

          <div className="team-member">
            <Image
              src="/team-member-moeller.jpeg"
              alt="J. Möller"
              width={150}
              height={150}
              className="team-photo"
            />
            <div className="team-info">
              <h4>Frau J. Möller</h4>
              <p><strong>Rolle:</strong> Physiotherapeutin</p>
            </div>
          </div>

          <div className="team-member">
            <Image
              src="/team-member-strobel.jpeg"
              alt="R. Strobel"
              width={150}
              height={150}
              className="team-photo"
            />
            <div className="team-info">
              <h4>Frau R. Strobel</h4>
              <p><strong>Rolle:</strong> Physiotherapeutin</p>
            </div>
          </div>

          <div className="team-member">
            <Image
              src="/team-member-hebel.jpeg"
              alt="M. Hebel"
              width={150}
              height={150}
              className="team-photo"
            />
            <div className="team-info">
              <h4>Frau M. Hebel</h4>
              <p><strong>Rolle:</strong> Physiotherapeutin</p>
            </div>
          </div>

          <div className="team-member">
            <Image
              src="/team-member-1.jpeg"
              alt="C. Gathmann B."
              width={150}
              height={150}
              className="team-photo"
            />
            <div className="team-info">
              <h4>Frau C. Gathmann B.</h4>
              <p><strong>Rolle:</strong> Physiotherapeutin</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
