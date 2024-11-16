"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";

Amplify.configure(outputs);

export default function HomePage() {
  return (
    <section className="home">
      <h1>Willkommen bei Physiotherapie Antonio Baptista</h1>
      <p>
        Ihre Gesundheit und Ihr Wohlbefinden sind unsere Priorität. Wir bieten
        professionelle Physiotherapie-Dienstleistungen an, um Ihre Mobilität und
        Lebensqualität zu verbessern.
      </p>
      <Link href="/contact">
        <button>Kontaktieren Sie uns</button>
      </Link>
    </section>
  );
}

