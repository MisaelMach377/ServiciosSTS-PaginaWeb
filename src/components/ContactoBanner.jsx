import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const ContactoBanner = () => {
  return (
    <section style={styles.section}>
      {/* El borde curvo superior se hace con un SVG o un clip-path */}
      <div style={styles.curveContainer}>
        <svg viewBox="0 0 1440 120" style={styles.svgCurve}>
          <path
            fill="#ffffff"
            d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div style={styles.content}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={styles.upperTitle}
        >
          CONVERSEMOS SOBRE TU PROYECTO
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={styles.mainHeading}
        >
          ¿NECESITAS <span style={styles.highlight}>TRANSPORTAR UNA CARGA</span>
          ?
        </motion.h2>

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
          ¡Póngase en contacto con nosotros hoy mismo para discutir sus
          requerimientos de transporte de carga pesada! Nuestro equipo de
          atención al cliente está disponible para responder a sus preguntas.
        </p>

        <div style={styles.contactCards}>
          <motion.a
            href="tel:+51951306987"
            whileHover={{ scale: 1.05 }}
            style={styles.phoneCard}
          >
            <Phone size={28} color="#fff" />
            <span style={styles.cardText}>+51 951 306 987</span>
          </motion.a>

          <motion.a
            href="mailto:d.alarcon@thlogistics.pe"
            whileHover={{ scale: 1.05 }}
            style={styles.emailCard}
          >
            <Mail size={28} color="#000" />
            <span style={{ ...styles.cardText, color: "#000" }}>
              d.alarcon@thlogistics.pe
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f9f9f9",
    paddingBottom: "100px",
    position: "relative",
    textAlign: "center",
  },
  curveContainer: {
    width: "100%",
    lineHeight: 0,
  },
  svgCurve: {
    width: "100%",
    height: "auto",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px",
  },
  upperTitle: {
    color: "#4ed5e2",
    fontSize: "13px",
    fontWeight: "700",
    textDecoration: "underline",
    letterSpacing: "1px",
  },
  mainHeading: {
    fontSize: "42px",
    fontWeight: "900",
    color: "#1a1a1a",
    margin: "25px 0",
  },
  highlight: {
    color: "#4ed5e2",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "30px",
  },
  line: {
    width: "60px",
    height: "1px",
    backgroundColor: "#333",
  },
  description: {
    color: "#666",
    lineHeight: "1.6",
    fontSize: "16px",
    marginBottom: "50px",
  },
  contactCards: {
    display: "flex",
    justifyContent: "center",
    gap: "0", // Pegados como en la imagen
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  phoneCard: {
    backgroundColor: "#4ed5e2",
    padding: "25px 40px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    textDecoration: "none",
    flex: 1,
  },
  emailCard: {
    backgroundColor: "#fff",
    padding: "25px 40px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    textDecoration: "none",
    flex: 1,
  },
  cardText: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "800",
  },
};

export default ContactoBanner;
