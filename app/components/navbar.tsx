// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import "./navbar.css"; // Optional: Scoped CSS for Navbar

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <Link href="/">
          <Image
            src="/javierlogo.svg"
            alt="Physiotherapie Antonio Baptista Logo"
            width={200}
            height={80}
            priority
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Startseite</Link></li>
          <li><Link href="/leistungen">Unsere Leistungen</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
          <li><Link href="/impressum">Impressum</Link></li>
          <li><Link href="/datenschutz">Datenschutz</Link></li>
        </ul>
      </nav>
    </header>
  );
}
