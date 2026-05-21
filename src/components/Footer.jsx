import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, BookOpen, ArrowRight } from "lucide-react";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import logoBlanco from "../assets/logosistemas.jpg";

const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* LOGO + CONTACTO */}
        <div style={styles.column}>
          <img src={logoBlanco} alt="STS Logistics" style={styles.logo} />

          <p style={styles.description}>
            Soluciones modernas de transporte y logística orientadas a la
            eficiencia, seguridad y cumplimiento operativo.
          </p>

          <div style={styles.contactGroup}>
            <div style={styles.contactItem}>
              <MapPin size={18} color="#4ed5e2" />
              <p style={styles.text}>
                Javier Prado Oeste 757, Magdalena del Mar, Lima – Perú
              </p>
            </div>

            <div style={styles.contactItem}>
              <Phone size={18} color="#4ed5e2" />
              <p style={styles.text}>+51 923 220 859</p>
            </div>

            <div style={styles.contactItem}>
              <Mail size={18} color="#4ed5e2" />
              <p style={styles.text}>gerencia@servicios-sts.com</p>
            </div>
          </div>

          <div style={styles.socials}>
            <SocialBtn>
              <FaFacebookF />
            </SocialBtn>

            <SocialBtn>
              <FaLinkedinIn />
            </SocialBtn>
          </div>
        </div>

        {/* SERVICIOS */}
        <div style={styles.column}>
          <h3 style={styles.title}>SERVICIOS</h3>

          <ul style={styles.list}>
            {[
              "Transporte de carga pesada",
              "Carga sobredimensionada",
              "Carga refrigerada",
              "Distribución logística",
              "Operaciones especializadas",
            ].map((item) => (
              <li key={item} style={styles.listItem}>
                <ArrowRight size={15} color="#4ed5e2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPROMISO */}
        <div style={styles.column}>
          <h3 style={styles.title}>COMPROMISO</h3>

          <ul style={styles.list}>
            {[
              "Seguridad Operativa",
              "Gestión SSOMA",
              "Cumplimiento y Calidad",
              "Atención Personalizada",
              "Mejora Continua",
            ].map((item) => (
              <li key={item} style={styles.listItem}>
                <ArrowRight size={15} color="#4ed5e2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACTO */}
        <div style={styles.column}>
          <h3 style={styles.title}>CONTACTO DIRECTO</h3>

          <div style={styles.phoneCard}>
            <div style={styles.phoneIcon}>
              <Phone size={18} color="#fff" />
            </div>

            <div>
              <p style={styles.phoneLabel}>Llámanos</p>
              <span style={styles.phoneNumber}>+51 960 632 201</span>
            </div>
          </div>

          <p style={styles.consultText}>
            Nuestro equipo está listo para brindarte atención rápida y
            soluciones adaptadas a tus necesidades logísticas.
          </p>

          <motion.div whileHover={{ y: -4 }} style={styles.reclamaciones}>
            <BookOpen size={22} color="#fff" />

            <span style={styles.reclamasText}>LIBRO DE RECLAMACIONES</span>
          </motion.div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div style={styles.bottomBar}>
        <p>© {anioActual} STS Logistics · Todos los derechos reservados</p>

        <p>
          Diseñado y desarrollado por{" "}
          <a
            href="https://misaelmach377.github.io/MyPortafolio/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.devLink}
          >
            MachiavelloDev
          </a>
        </p>
      </div>
    </footer>
  );
};

const SocialBtn = ({ children }) => (
  <motion.a
    whileHover={{
      y: -4,
      backgroundColor: "#4ed5e2",
    }}
    href="#"
    style={styles.socialIcon}
  >
    {children}
  </motion.a>
);

const styles = {
  footer: {
    background: "linear-gradient(to bottom, #0f172a 0%, #020617 100%)",
    color: "#fff",
    padding: "90px 5% 25px 5%",
  },

  container: {
    maxWidth: "1250px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "45px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
  },

  logo: {
    width: "170px",
    marginBottom: "24px",
  },

  description: {
    color: "#94a3b8",
    lineHeight: "1.9",
    fontSize: "14px",
    marginBottom: "28px",
  },

  title: {
    fontSize: "17px",
    fontWeight: "800",
    marginBottom: "24px",
    letterSpacing: "0.5px",
    color: "#fff",
  },

  contactGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },

  text: {
    color: "#cbd5e1",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: 0,
  },

  socials: {
    display: "flex",
    gap: "12px",
    marginTop: "30px",
  },

  socialIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s ease",
    textDecoration: "none",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#cbd5e1",
    fontSize: "14px",
    transition: "0.3s ease",
    cursor: "pointer",
  },

  phoneCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "18px",
    marginBottom: "22px",
  },

  phoneIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #4ed5e2, #0ea5e9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  phoneLabel: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "13px",
  },

  phoneNumber: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#fff",
  },

  consultText: {
    color: "#94a3b8",
    lineHeight: "1.8",
    fontSize: "14px",
  },

  reclamaciones: {
    marginTop: "28px",
    background: "linear-gradient(135deg, #4ed5e2, #0891b2)",
    borderRadius: "18px",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
  },

  reclamasText: {
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "0.5px",
  },

  bottomBar: {
    maxWidth: "1250px",
    margin: "70px auto 0 auto",
    paddingTop: "24px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
    color: "#64748b",
    fontSize: "13px",
  },

  devLink: {
    color: "#4ed5e2",
    textDecoration: "none",
    fontWeight: "700",
  },
};

export default Footer;
