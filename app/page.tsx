"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import './globals.css';
import Link from "next/link";

Amplify.configure(outputs);

export default function HomePage() {
  return (
    <section>
      <h1>Willkommen bei der Physiotherapie Antonio Baptista</h1>
      <p>
        Ihre Gesundheit und Ihr Wohlbefinden sind für uns ein wichtiges Ziel.
        Wir bieten professionelle Physiotherapie-Dienstleistungen an, um Ihre
        Mobilität und Lebensqualität zu verbessern.
      </p>
      <Link href="/contact">
        <button className="btn-primary">Kontaktieren Sie uns</button>
      </Link>
    </section>
  );
}

