"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main className="landing-page">
      <header className="navbar">
        <h1>Physiotherapie Antonio Baptista</h1>
        <nav>
          <ul>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Kontakt</a></li>
            <li><a href="#extras">Extras</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Willkommen bei Physiotherapie Antonio Baptista</h2>
        <p>Ihr Weg zu besserer Gesundheit beginnt hier.</p>
      </section>

      <section id="team" className="section">
        <h3>Unser Team</h3>
        <p>Unser engagiertes Team von professionellen Physiotherapeuten ist für Sie da.</p>
      </section>

      <section id="contact" className="section">
        <h3>Kontaktieren Sie uns</h3>
        <p>Besuchen Sie uns vor Ort oder nehmen Sie online Kontakt mit uns auf!</p>
      </section>

      <section id="extras" className="section">
        <h3>Extras</h3>
        <p>Entdecken Sie zusätzliche Ressourcen und Dienstleistungen, die wir anbieten.</p>
      </section>

      <footer>
        <p>© 2024 Physiotherapie Antonio Baptista. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}
