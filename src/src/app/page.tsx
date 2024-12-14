import styles from "./page.module.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <h1>Grupo Escoteiro Goyaz</h1>
            <p>9º GO - Sempre Alerta para Servir!</p>
          </div>
        </section>
        
        {/* Main content */}
        <main>
          <div className="container">
            <h2>Bem-vindo ao GE Goyaz!</h2>
            <p>Nosso grupo escoteiro está localizado em Goiânia e tem mais de X anos de história...</p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}