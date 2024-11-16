"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";

Amplify.configure(outputs);

export default function App() {

  return (
    <main className="landing-page">
      
      <section className="hero">
        <h2>Willkommen bei Physiotherapie Antonio Baptista</h2>
        <p>Ihr Weg zu besserer Gesundheit beginnt hier.</p>
      </section>
      
    </main>
  );
}
