import React from "react";
import '../globals.css';
import './team.css';
import Image from 'next/image';



export default function Team() {
  return (
    <section>
      <h3>Unser Team</h3>
      <p>Unser engagiertes Team von professionellen Physiotherapeuten ist für Sie da.</p>
      
      <section className="team-list">
        <div className="team-member">
          <Image
            src="/team-member1.jpg"
            alt="Teammitglied 1"
            width={150}
            height={150}
            className="team-photo"
          />
          <div className="team-info">
            <h4>Maria Schmidt</h4>
            <p><strong>Erfahrung:</strong> 10 Jahre</p>
            <p><strong>Geburtsdatum:</strong> 15. Januar 1985</p>
          </div>
        </div>
        
        <div className="team-member">
          <Image
            src="/team-member2.jpg"
            alt="Teammitglied 2"
            width={150}
            height={150}
            className="team-photo"
          />
          <div className="team-info">
            <h4>Thomas Müller</h4>
            <p><strong>Erfahrung:</strong> 8 Jahre</p>
            <p><strong>Geburtsdatum:</strong> 22. Juni 1990</p>
          </div>
        </div>
        
        <div className="team-member">
          <Image
            src="/team-member3.jpg"
            alt="Teammitglied 3"
            width={150}
            height={150}
            className="team-photo"
          />
          <div className="team-info">
            <h4>Anna Fischer</h4>
            <p><strong>Erfahrung:</strong> 5 Jahre</p>
            <p><strong>Geburtsdatum:</strong> 3. März 1995</p>
          </div>
        </div>
      </section>
    </section>
  );
}