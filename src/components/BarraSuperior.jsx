import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import LogoSTS from "../assets/logosistemas.jpg";

const BarraSuperior = () => {
  const navItems = [
    { name: "INICIO", path: "/#inicio" },
    { name: "NOSOTROS", path: "#nosotros" },
    { name: "CONTROL 360°", path: "/control360" },
    { name: "CLIENTES", path: "#clientes" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={styles.header}
    >
      {/* Sección Logo */}
      <div style={styles.logoContainer}>
        <img src={LogoSTS} alt="Servicios STS Logo" style={styles.logo} />
        <div style={styles.brandText}>
          <span style={styles.mainName}>SERVICIOS STS</span>
          <span style={styles.tagline}>OPERACIONES LOGÍSTICAS EFICIENTES</span>
        </div>
      </div>

      {/* Navegación con Letras más Grandes y Pro */}
      <nav>
        <ul style={styles.navList}>
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.div
                whileHover={{ color: "#4ed5e2", y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.path.startsWith("#") ? (
                  <a href={item.path} style={styles.link}>
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.path} style={styles.link}>
                    {item.name}
                  </Link>
                )}
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Acciones Finales */}
      <div style={styles.actions}>
        <motion.button
          style={styles.iconBtn}
          whileHover={{
            rotate: 90,
            backgroundColor: "rgba(78, 213, 226, 0.1)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <LayoutGrid size={24} color="#4ed5e2" strokeWidth={2} />
        </motion.button>

        <motion.button
          style={styles.quoteBtn}
          whileHover={{
            backgroundColor: "#3bc1ce",
            boxShadow: "0px 8px 20px rgba(78, 213, 226, 0.3)",
            y: -2,
          }}
          whileTap={{ scale: 0.98 }}
        >
          COTIZAR »
        </motion.button>
      </div>
    </motion.header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 6%",
    height: "90px", // Un poco más alto para que respire el texto grande
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(15px)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
  },
  logo: {
    height: "50px", // Logo ligeramente más grande
    width: "auto",
  },
  brandText: {
    display: "flex",
    flexDirection: "column",
  },
  mainName: {
    fontSize: "22px", // Aumentado para más impacto
    fontWeight: "900",
    color: "#0f172a",
    lineHeight: 1,
    letterSpacing: "-0.8px",
  },
  tagline: {
    fontSize: "10px",
    color: "#64748b",
    fontWeight: "700",
    letterSpacing: "1.5px",
    marginTop: "5px",
    textTransform: "uppercase",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "45px", // Más separación entre items
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#1e293b",
    fontWeight: "700",
    fontSize: "14px", // Letra de navegación más legible
    letterSpacing: "0.8px",
    display: "inline-block",
    transition: "color 0.2s ease",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  quoteBtn: {
    backgroundColor: "#4ed5e2",
    color: "#fff",
    border: "none",
    padding: "14px 32px", // Botón más robusto
    borderRadius: "12px", // Bordes más suaves (modernos)
    fontWeight: "800",
    fontSize: "14px",
    letterSpacing: "0.5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default BarraSuperior;
