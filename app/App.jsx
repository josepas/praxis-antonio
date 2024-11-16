import Link from "next/link";

export default function App({ children }) {
  return (
    <div>
      <header className="navbar">
        <h1>Physiotherapie Antonio Baptista</h1>
        <nav>
          <ul>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
            <li><Link href="/extras">Extras</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Physiotherapie Antonio Baptista. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
