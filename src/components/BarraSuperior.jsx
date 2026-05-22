import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ArrowUpRight } from "lucide-react";

import LogoSTS from "../assets/ServiciosSTS_SinFondo.png";

const BarraSuperior = () => {
  const [hoveredPath, setHoveredPath] = useState(null);
  const isMobile = window.innerWidth < 768;

  const navItems = [
    { name: "INICIO", path: "/#inicio" },
    { name: "NOSOTROS", path: "/#nosotros" },
    { name: "CONTROL 360°", path: "/control360" },
    { name: "CLIENTES", path: "/#clientes" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        damping: 18,
        stiffness: 100,
      }}
      style={{
        ...styles.header,
        padding: isMobile ? "0 10px" : "0 5%",
        height: isMobile ? "72px" : "95px",
      }}
    >
      {/* LOGO */}
      <div style={styles.logoContainer}>
        <img
          src={LogoSTS}
          alt="STS Logistics"
          style={{
            ...styles.logo,
            height: isMobile ? "48px" : "72px",
          }}
        />
        <div style={styles.brandText}>
          <span
            style={{
              ...styles.mainName,
              fontSize: isMobile ? "16px" : "25px",
            }}
          >
            SERVICIOS STS
          </span>
          {!isMobile && (
            <span style={styles.tagline}>
              Más que un proveedor, un socio estratégico
            </span>
          )}
        </div>
      </div>

      {/* NAV */}
      <nav style={styles.nav}>
        <ul style={styles.navList} onMouseLeave={() => setHoveredPath(null)}>
          {navItems.map((item) => (
            <li
              key={item.name}
              style={styles.navItem}
              onMouseEnter={() => setHoveredPath(item.path)}
            >
              <AnimatePresence>
                {hoveredPath === item.path && (
                  <motion.div
                    layoutId="navbar-hover"
                    style={styles.navGlow}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.5,
                    }}
                  />
                )}
              </AnimatePresence>

              {item.path.includes("#") ? (
                <a
                  href={item.path}
                  style={{
                    ...styles.link,
                    color: hoveredPath === item.path ? "#0f172a" : "#64748b",
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  style={{
                    ...styles.link,
                    color: hoveredPath === item.path ? "#0f172a" : "#64748b",
                  }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* ACTIONS */}
      <div style={styles.actions}>
        {!isMobile && (
          <motion.button
            whileHover={{
              rotate: 90,
              backgroundColor: "rgba(15,23,42,0.05)",
            }}
            whileTap={{ scale: 0.92 }}
            style={styles.iconBtn}
          >
            <Menu size={22} color="#0f172a" strokeWidth={2} />
          </motion.button>
        )}

        {!isMobile && (
          <motion.a
            href="#contacto"
            whileHover={{
              y: -3,
              scale: 1.03,
              boxShadow: "0 18px 35px rgba(78,213,226,0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            style={styles.quoteBtn}
          >
            COTIZAR
            <ArrowUpRight size={18} />
          </motion.a>
        )}
      </div>
    </motion.header>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "0 5%",
    height: "95px",

    background: "rgba(255,255,255,0.72)",
    backdropFilter: "blur(18px) saturate(180%)",

    borderBottom: "1px solid rgba(15,23,42,0.05)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginRight: "14px",
  },

  logo: {
    height: "72px",
    width: "auto",

    objectFit: "contain",

    filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.12))",

    transition: "0.3s ease",
  },

  brandText: {
    display: "flex",
    flexDirection: "column",
  },

  mainName: {
    fontSize: "25px",
    fontWeight: "900",
    color: "#0f172a",
    letterSpacing: "-1px",
    lineHeight: "1",
  },

  tagline: {
    fontSize: "11px",
    color: "#94a3b8",
    fontWeight: "700",
    letterSpacing: "2px",
    marginTop: "4px",
  },

  nav: {
    background: "rgba(15,23,42,0.04)",
    padding: "7px",
    borderRadius: "22px",
    border: "1px solid rgba(15,23,42,0.04)",
    overflowX: "auto",
    maxWidth: "100%",
  },

  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "8px",
    position: "relative",
    WebkitOverflowScrolling: "touch",
    overflowX: "auto",
    whiteSpace: "nowrap",
    scrollbarWidth: "none",
  },

  navItem: {
    position: "relative",
    padding: "10px 14px",
    cursor: "pointer",
    flexShrink: 0,
  },

  navGlow: {
    position: "absolute",
    inset: 0,

    background: "#fff",

    borderRadius: "16px",

    boxShadow: "0 8px 20px rgba(15,23,42,0.06)",

    zIndex: -1,
  },

  link: {
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "13px",
    letterSpacing: "1px",

    transition: "0.3s ease",

    position: "relative",
    zIndex: 2,
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  iconBtn: {
    width: "48px",
    height: "48px",

    borderRadius: "16px",

    border: "1px solid rgba(15,23,42,0.05)",
    background: "transparent",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",

    transition: "0.3s ease",
  },

  quoteBtn: {
    background: "linear-gradient(135deg, #4ed5e2, #0ea5e9)",
    textDecoration: "none",
    color: "#fff",

    border: "none",

    padding: "15px 28px",

    borderRadius: "18px",

    fontWeight: "800",
    fontSize: "14px",
    letterSpacing: "0.5px",

    display: "flex",
    alignItems: "center",
    gap: "8px",

    cursor: "pointer",

    transition: "0.3s ease",
  },
};

export default BarraSuperior;
