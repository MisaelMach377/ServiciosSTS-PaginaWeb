import React from "react";
import { motion } from "framer-motion";

// 1. IMPORTAS TUS LOGOS AQUÍ ARRIBA
import logoAderbest from "../assets/logosistemas.jpg";
import logoAdv from "../assets/logosistemas.jpg";
import logoAustral from "../assets/logosistemas.jpg";
import logoCise from "../assets/logosistemas.jpg";
import logoEissa from "../assets/logosistemas.jpg";
import logoGeconse from "../assets/logosistemas.jpg";

const Clientes = () => {
  // 2. LOS JALAS AQUÍ EN EL ARRAY
  const logos = [
    { id: 1, name: "ADERBEST", src: logoAderbest },
    { id: 2, name: "ADV Consultores", src: logoAdv },
    { id: 3, name: "AUSTRAL S.A.", src: logoAustral },
    { id: 4, name: "CISE", src: logoCise },
    { id: 5, name: "EISSA", src: logoEissa },
    { id: 6, name: "GECONSE", src: logoGeconse },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.mainTitle}>
          ALGUNOS <span style={styles.highlight}>CLIENTES</span>
        </h2>

        <div style={styles.divider}>
          <div style={styles.line}></div>
          <div style={styles.arrowIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 12H17M17 12L13 8M17 12L13 16"
                stroke="#4ed5e2"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={styles.line}></div>
        </div>

        <p style={styles.description}>
          Nuestro equipo altamente capacitado y nuestra flota de vehículos
          especializados nos permiten cumplir con los desafíos del transporte de
          carga pesada, ofreciendo un servicio excepcional y una atención al
          cliente de primera clase.
        </p>
      </div>

      <div style={styles.logoGrid}>
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            whileHover={{ scale: 1.1, filter: "grayscale(0%)", opacity: 1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.3 }}
            style={styles.logoContainer}
          >
            {/* 3. AQUÍ SE RENDERIZAN AUTOMÁTICAMENTE */}
            <img src={logo.src} alt={logo.name} style={styles.img} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "100px 5%",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  header: {
    maxWidth: "850px",
    margin: "0 auto 60px auto",
  },
  mainTitle: {
    fontSize: "32px",
    fontWeight: "900",
    color: "#1a1a1a",
    marginBottom: "15px",
    letterSpacing: "1px",
  },
  highlight: {
    color: "#4ed5e2",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  line: {
    width: "40px",
    height: "1px",
    backgroundColor: "#333",
  },
  description: {
    color: "#666",
    fontSize: "15px",
    lineHeight: "1.7",
    fontWeight: "400",
  },
  logoGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "50px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logoContainer: {
    flex: "1 1 180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "grayscale(100%)", // Estilo Pro: todos grises por defecto
    transition: "0.3s ease",
  },
  img: {
    maxWidth: "160px",
    height: "auto",
    objectFit: "contain",
  },
};

export default Clientes;
