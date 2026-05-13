import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import LogoSTS from "../assets/logosistemas.jpg";

const BarraSuperior = () => {
  const [hoveredPath, setHoveredPath] = useState(null);

  const navItems = [
    { name: "INICIO", path: "/#inicio" },
    { name: "NOSOTROS", path: "#nosotros" },
    { name: "CONTROL 360°", path: "/control360" },
    { name: "CLIENTES", path: "#clientes" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 18, stiffness: 100 }}
      style={styles.header}
    >
      {/* Sección Logo con Glow sutil */}
      <div style={styles.logoContainer}>
        <div style={styles.logoWrapper}>
          <img src={LogoSTS} alt="Servicios STS Logo" style={styles.logo} />
        </div>
        <div style={styles.brandText}>
          <span style={styles.mainName}>SERVICIOS STS</span>
          <span style={styles.tagline}>OPERACIONES LOGÍSTICAS EFICIENTES</span>
        </div>
      </div>

      {/* Navegación con Cápsula Flotante (The "Pro" Way) */}
      <nav style={styles.nav}>
        <ul style={styles.navList} onMouseLeave={() => setHoveredPath(null)}>
          {navItems.map((item) => (
            <li
              key={item.name}
              style={styles.navItem}
              onMouseEnter={() => setHoveredPath(item.path)}
            >
              {/* Esta es la cápsula que se mueve detrás del texto */}
              <AnimatePresence>
                {hoveredPath === item.path && (
                  <motion.div
                    layoutId="nav-glow"
                    style={styles.navGlow}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </AnimatePresence>

              {item.path.startsWith("#") ? (
                <a
                  href={item.path}
                  style={{
                    ...styles.link,
                    color: hoveredPath === item.path ? "#1a1a1a" : "#64748b",
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  style={{
                    ...styles.link,
                    color: hoveredPath === item.path ? "#1a1a1a" : "#64748b",
                  }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Acciones Finales con Efectos de Pulso */}
      <div style={styles.actions}>
        <motion.button
          style={styles.iconBtn}
          whileHover={{ rotate: 90, backgroundColor: "rgba(0,0,0,0.03)" }}
          whileTap={{ scale: 0.9 }}
        >
          <LayoutGrid size={22} color="#0f172a" strokeWidth={1.5} />
        </motion.button>

        <motion.button
          style={styles.quoteBtn}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(78, 213, 226, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
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
    height: "100px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(20px) saturate(180%)", // Efecto Apple ultra premium
    borderBottom: "1px solid rgba(0,0,0,0.04)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  logoWrapper: {
    padding: "4px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  logo: {
    height: "48px",
    borderRadius: "8px",
  },
  brandText: {
    display: "flex",
    flexDirection: "column",
  },
  mainName: {
    fontSize: "24px",
    fontWeight: "900",
    color: "#0f172a",
    letterSpacing: "-1px",
    lineHeight: "1.1",
  },
  tagline: {
    fontSize: "11px",
    color: "#94a3b8",
    fontWeight: "600",
    letterSpacing: "2px",
    marginTop: "2px",
  },
  nav: {
    background: "rgba(0,0,0,0.03)",
    padding: "6px",
    borderRadius: "20px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "8px",
    position: "relative",
  },
  navItem: {
    position: "relative",
    padding: "10px 24px",
    cursor: "pointer",
  },
  navGlow: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#fff",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    zIndex: -1,
  },
  link: {
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "13px",
    letterSpacing: "1px",
    position: "relative",
    zIndex: 2,
    transition: "color 0.3s ease",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "12px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quoteBtn: {
    background: "linear-gradient(135deg, #4ed5e2 0%, #3bc1ce 100%)", // Gradiente pro
    color: "#fff",
    border: "none",
    padding: "16px 36px",
    borderRadius: "16px",
    fontWeight: "900",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
};

export default BarraSuperior;
