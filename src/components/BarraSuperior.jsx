import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";

const BarraSuperior = () => {
  const navItems = [
    { name: "INICIO", path: "/" },
    { name: "SERVICIOS", path: "/" },
    { name: "CONTROL 360°", path: "/control360" },
    { name: "CLIENTES", path: "/" },
    { name: "CONTACTOS", path: "/" },
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
        <img
          src="/src/assets/Logo_ServiciosSTS.png"
          alt="Servicios STS Logo"
          style={styles.logo}
        />
        <div style={styles.brandText}>
          <span style={styles.mainName}>SERVICIOS STS</span>
          <span style={styles.tagline}>OPERACIONES LOGÍSTICAS EFICIENTES</span>
        </div>
      </div>

      {/* Navegación con Hovers Animados */}
      <nav>
        <ul style={styles.navList}>
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.div whileHover={{ color: "#4ed5e2", scale: 1.05 }}>
                <Link to={item.path} style={styles.link}>
                  {item.name}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Acciones Finales */}
      <div style={styles.actions}>
        <motion.button
          style={styles.iconBtn}
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <LayoutGrid size={22} color="#4ed5e2" strokeWidth={2.5} />
        </motion.button>

        <motion.button
          style={styles.quoteBtn}
          whileHover={{
            backgroundColor: "#3bc1ce",
            boxShadow: "0px 4px 15px rgba(78, 213, 226, 0.4)",
            scale: 1.02,
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
    padding: "0 5%",
    height: "80px", // Altura fija para mayor orden
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)", // Efecto glassmorphism moderno
    boxShadow: "0 1px 0 rgba(0,0,0,0.05)", // Línea sutil en vez de sombra pesada
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
  },
  logo: {
    height: "45px",
    width: "auto",
    filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.05))",
  },
  brandText: {
    display: "flex",
    flexDirection: "column",
  },
  mainName: {
    fontSize: "18px",
    fontWeight: "900",
    color: "#1a1a1a",
    lineHeight: 1,
    letterSpacing: "-0.5px",
  },
  tagline: {
    fontSize: "9px",
    color: "#888",
    fontWeight: "600",
    letterSpacing: "1.2px",
    marginTop: "4px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "35px", // Más espacio para respirar
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#444",
    fontWeight: "700",
    fontSize: "12px",
    letterSpacing: "0.5px",
    display: "inline-block",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quoteBtn: {
    backgroundColor: "#4ed5e2",
    color: "#fff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "8px",
    fontWeight: "800",
    fontSize: "13px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};

export default BarraSuperior;
