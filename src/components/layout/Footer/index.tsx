// src/components/layout/Footer/index.tsx
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          {/* Coluna 1 - Logo Escoteiros do Brasil */}
          <div className="col-md-4">
            <a 
              href="https://www.escoteirosgo.org.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo-horizontal-colorido.png"
                alt="Escoteiros do Brasil"
                width={300}
                height={75}
                className={styles.escoteirosImage}
              />
            </a>
          </div>

          {/* Coluna 2 - Links Úteis */}
          <div className="col-md-4">
            <h5 className={styles.title}>Links Úteis</h5>
            <ul className={styles.links}>
              <li><Link href="/sobre">Sobre Nós</Link></li>
              <li><Link href="/atividades">Atividades</Link></li>
              <li><Link href="/fotos">Fotos</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="col-md-4">
            <h5 className={styles.title}>Contato</h5>
            <address className={styles.contact}>
              <p>Endereço: Rua exemplo, nº 123</p>
              <p>Setor Exemplo - Goiânia/GO</p>
              <p>CEP: 74000-000</p>
              <p>Email: contato@gegoyaz.org.br</p>
              <p>Tel: (62) 9999-9999</p>
            </address>
          </div>
        </div>

        <div className={styles.copyright}>
          <hr />
          <p>&copy; {new Date().getFullYear()} Grupo Escoteiro Goyaz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}