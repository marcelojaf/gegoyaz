import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className={`${styles.header} navbar navbar-expand-lg navbar-dark`}>
      <div className="container">
        <Link href="/" className={styles.brand}>
          <Image
            src="/logo-gegoyaz.png"
            alt="GE Goyaz"
            width={60}
            height={60}
          />
          <span>Grupo Escoteiro Goyaz</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <nav className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Início</Link>
            </li>
            <li className="nav-item">
              <Link href="/sobre" className="nav-link">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link href="/calendario" className="nav-link">Calendário</Link>
            </li>
            <li className="nav-item">
              <Link href="/atividades" className="nav-link">Atividades</Link>
            </li>
            <li className="nav-item">
              <Link href="/contato" className="nav-link">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}