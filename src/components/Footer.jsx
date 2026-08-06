import React from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

import logoBlanco from "../assets/LogoBlanco_ServicioSts.png";
import logoDev from "../assets/LogoMisael-MachDev-Sinfondo.png";

const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer id="contacto" style={styles.footer}>
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        {/* IZQUIERDA */}
        <div style={styles.brandColumn}>
          <img src={logoBlanco} alt="STS Logistics" style={styles.logo} />

          <p style={styles.description}>
            Soluciones modernas de transporte y logística orientadas a la
            eficiencia, seguridad y cumplimiento operativo en los principales
            puertos del Perú.
          </p>
        </div>

        {/* CENTRO */}
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

        {/* DERECHA */}
        <div style={styles.column}>
          <h3 style={styles.title}>CONTACTO</h3>

          <div style={styles.infoBox}>
            <div style={styles.contactItem}>
              <MapPin size={18} color="#4ed5e2" />

              <p style={styles.text}>
                Cal. Llumpa Nro. 1259 Urb. Parque Del Naranjal
              </p>
            </div>

            <div style={styles.contactItem}>
              <Phone size={18} color="#4ed5e2" />

              <p style={styles.text}>+51 995 391 926</p>
            </div>

            <div style={styles.contactItem}>
              <Phone size={18} color="#4ed5e2" />

              <p style={styles.text}>+51 975 644 321</p>
            </div>

            <div style={styles.contactItem}>
              <Mail size={18} color="#4ed5e2" />

              <p style={styles.text}>gerencia@servicios-sts.com</p>
            </div>

            <div style={styles.contactItem}>
              <Mail size={18} color="#4ed5e2" />

              <p style={styles.text}>tramitesdoc@servicios-sts.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div style={styles.bottomBar}>
        <p>© {anioActual} STS Logistics · Todos los derechos reservados</p>

        <a
          href="https://machiavellomisadev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.devLink,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginRight: "40px",
          }}
        >
          Diseñado y desarrollado por
          <img
            src={logoDev}
            alt="MachiavelloDev"
            style={{
              height: "30px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    position: "relative",
    background: "linear-gradient(to bottom, #0f172a 0%, #020617 100%)",
    color: "#fff",
    padding: "55px 5% 25px 5%",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    top: "-150px",
    right: "-150px",
    width: "350px",
    height: "350px",
    background: "rgba(78,213,226,0.08)",
    borderRadius: "50%",
    filter: "blur(90px)",
  },

  container: {
    position: "relative",
    zIndex: 2,

    maxWidth: "1280px",
    margin: "0 auto",

    display: "grid",

    gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1.2fr 0.9fr 1fr",

    gap: window.innerWidth < 768 ? "45px" : "60px",
  },

  brandColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  column: {
    display: "flex",
    flexDirection: "column",
  },

  logo: {
    width: "185px",
    marginBottom: "28px",
    filter: "brightness(0) invert(1)",
  },

  description: {
    color: "#94a3b8",
    lineHeight: "1.9",
    fontSize: "14px",
    maxWidth: "430px",
  },

  infoBox: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "24px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    backdropFilter: "blur(10px)",
  },

  title: {
    fontSize: "18px",
    fontWeight: "800",
    marginBottom: "28px",
    letterSpacing: "1px",
    color: "#fff",
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

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,

    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    color: "#cbd5e1",

    fontSize: "14px",

    paddingBottom: "14px",

    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },

  bottomBar: {
    position: "relative",
    zIndex: 2,

    maxWidth: "1280px",

    margin: "45px auto 0 auto",
    paddingTop: "25px",

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
