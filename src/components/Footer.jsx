import React from "react";
import { color, motion } from "framer-motion";
import { MapPin, Phone, Mail, BookOpen } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logoBlanco from "../assets/logosistemas.jpg";

const Footer = () => {
  const anioActual = new Date().getFullYear();

  const SocialBtn = ({ children }) => (
    <motion.a
      whileHover={{ y: -3, backgroundColor: "#4ed5e2" }}
      href="#"
      style={styles.socialIcon}
    >
      {children}
    </motion.a>
  );

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Columna 1: Info y Redes */}
        <div style={styles.column}>
          <img src={logoBlanco} alt="TH Logistics" style={styles.logo} />
          <div style={styles.contactItem}>
            <MapPin size={18} color="#4ed5e2" style={styles.icon} />
            <p style={styles.text}>
              Javier Prado Oeste 757, oficina 1004, Magdalena del Mar, Lima –
              Perú
            </p>
          </div>
          <div style={styles.contactItem}>
            <Phone size={18} color="#4ed5e2" style={styles.icon} />
            <p style={styles.text}>+51 951 306 987</p>
          </div>
          <div style={styles.contactItem}>
            <Mail size={18} color="#4ed5e2" style={styles.icon} />
            <p style={styles.text}>d.alarcon@thlogistics.pe</p>
          </div>

          <div style={styles.socialWrapper}>
            <p style={styles.socialTitle}>Síguenos en:</p>
            <div style={styles.socialIcons}>
              <SocialBtn>
                <FaFacebookF />
              </SocialBtn>

              <SocialBtn>
                <FaLinkedinIn />
              </SocialBtn>
            </div>
          </div>
        </div>

        {/* Columna 2: Servicios */}
        <div style={styles.column}>
          <h4 style={styles.title}>SERVICIOS</h4>
          <ul style={styles.list}>
            {[
              "Transporte de carga pesada",
              "Carga sobredimensionada",
              "Transporte de carga peligrosa",
              "Transporte de carga refrigerada",
              "Conductores asignados",
            ].map((item) => (
              <li key={item} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Políticas */}
        <div style={styles.column}>
          <h4 style={styles.title}>POLÍTICAS DE COMPROMISO</h4>
          <ul style={styles.list}>
            {[
              "Responsabilidad Empresarial",
              "Sistema de Gestión SSOMA",
              "Seguridad, Salud y Bienestar",
              "Certificación de Homologación",
            ].map((item) => (
              <li key={item} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4: Consulta Gratuita */}
        <div style={styles.column}>
          <h4 style={styles.title}>CONSULTA GRATUITA</h4>
          <div style={styles.phoneBadge}>
            <div style={styles.phoneIconBox}>
              <Phone size={20} color="#fff" fill="#fff" />
            </div>
            <span style={styles.phoneNumber}>+51 951 306 987</span>
          </div>
          <p style={styles.consultText}>
            Si necesita recibir una propuesta a la brevedad posible, por favor,
            póngase en contacto con nosotros.
          </p>
          <div style={styles.reclamaciones}>
            <BookOpen size={30} color="#fff" />
            <span style={styles.reclamasText}>
              LIBRO DE RECLAMACIONES VIRTUAL
            </span>
          </div>
        </div>
      </div>

      {/* Barra Inferior de Copyright */}
      <div style={styles.bottomBar}>
        <p>
          Copyright ©{anioActual} | Todos los derechos reservados | TH Logistics
        </p>
        <p>
          Diseñado y desarrollado por
          <span style={{ color: "#4ed5e2" }}>MachiavelloDev</span>
        </p>
      </div>
    </footer>
  );
};

// Componente pequeño para botones sociales
const SocialBtn = ({ Icon }) => (
  <motion.a
    whileHover={{ y: -3, backgroundColor: "#4ed5e2" }}
    href="#"
    style={styles.socialIcon}
  >
    <Icon size={18} color="#fff" />
  </motion.a>
);

const styles = {
  footer: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "80px 5% 20px 5%",
    fontFamily: "sans-serif",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  column: { display: "flex", flexDirection: "column", gap: "15px" },
  logo: { width: "180px", marginBottom: "20px" },
  title: {
    fontSize: "16px",
    fontWeight: "800",
    marginBottom: "10px",
    letterSpacing: "1px",
  },
  contactItem: { display: "flex", gap: "10px", alignItems: "flex-start" },
  text: { fontSize: "13px", color: "#ccc", lineHeight: "1.5", margin: 0 },
  list: { listStyle: "none", padding: 0, margin: 0 },
  listItem: {
    fontSize: "13px",
    color: "#ccc",
    padding: "8px 0",
    borderBottom: "1px solid #333",
    cursor: "pointer",
  },
  socialWrapper: { marginTop: "20px" },
  socialTitle: { fontSize: "12px", fontWeight: "700", marginBottom: "10px" },
  socialIcons: { display: "flex", gap: "10px" },
  socialIcon: {
    backgroundColor: "#fdfbfb",
    color: "blue",
    padding: "8px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
  },
  phoneBadge: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #4ed5e2",
    borderRadius: "4px",
    overflow: "hidden",
  },
  phoneIconBox: { backgroundColor: "#4ed5e2", padding: "10px" },
  phoneNumber: { padding: "0 15px", fontWeight: "700", fontSize: "15px" },
  consultText: {
    fontSize: "13px",
    color: "#888",
    marginTop: "15px",
    fontStyle: "italic",
  },
  reclamaciones: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  reclamasText: { fontSize: "10px", fontWeight: "700", textAlign: "center" },
  bottomBar: {
    marginTop: "60px",
    borderTop: "1px solid #333",
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "11px",
    color: "#666",
    flexWrap: "wrap",
    gap: "10px",
  },
};

export default Footer;
