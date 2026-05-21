import React from "react";
import { motion } from "framer-motion";

// IMPORTA TUS LOGOS
import logoAderbest from "../assets/logosistemas.jpg";
import logoAdv from "../assets/logosistemas.jpg";
import logoAustral from "../assets/logosistemas.jpg";
import logoCise from "../assets/logosistemas.jpg";
import logoEissa from "../assets/logosistemas.jpg";
import logoGeconse from "../assets/logosistemas.jpg";

const Clientes = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p style={styles.tag}>STS · EMPRESAS QUE CONFÍAN EN NOSOTROS</p>

          <h2 style={styles.mainTitle}>
            NUESTROS <span style={styles.highlight}>CLIENTES</span>
          </h2>

          <p style={styles.description}>
            Trabajamos junto a empresas que buscan eficiencia, seguridad y
            soluciones logísticas confiables para sus operaciones de transporte
            y distribución.
          </p>
        </motion.div>
      </div>

      <div style={styles.logoGrid}>
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            style={styles.logoCard}
          >
            <img src={logo.src} alt={logo.name} style={styles.img} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "110px 5%",
    background: "linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)",
    textAlign: "center",
  },

  header: {
    maxWidth: "820px",
    margin: "0 auto 70px auto",
  },

  tag: {
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: "999px",
    background: "rgba(78,213,226,0.10)",
    color: "#0891b2",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "22px",
  },

  mainTitle: {
    fontSize: "44px",
    fontWeight: "900",
    color: "#0f172a",
    lineHeight: "1.1",
    letterSpacing: "-1px",
    marginBottom: "22px",
  },

  highlight: {
    background: "linear-gradient(90deg, #4ed5e2, #0ea5e9)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  description: {
    color: "#64748b",
    fontSize: "16px",
    lineHeight: "1.9",
    maxWidth: "720px",
    margin: "0 auto",
  },

  logoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "28px",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "center",
  },

  logoCard: {
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(15,23,42,0.05)",
    borderRadius: "24px",
    padding: "35px 25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "150px",
    boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  },

  img: {
    maxWidth: "150px",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    filter: "grayscale(100%)",
    opacity: "0.75",
    transition: "all 0.3s ease",
  },
};

export default Clientes;
