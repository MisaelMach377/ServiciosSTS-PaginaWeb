import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react"; // Un icono pro para certificaciones
import fotoSobreNosotros from "../assets/logosistemas.jpg";

const Nosotros = () => {
  const [tabActiva, setTabActiva] = useState("mision");

  const contenidoTabs = {
    mision:
      "Ofrecer soluciones logísticas integrales de valor excediendo sus expectativas y atender eficientemente los requerimientos de nuestros clientes enfocados en el desarrollo y fortalecimiento del país.",
    vision:
      "Ser la empresa líder en soluciones logísticas estratégicas a nivel nacional, reconocida por nuestra innovación, seguridad y compromiso con la excelencia operativa.",
    valores:
      "Compromiso, Seguridad, Integridad y Eficiencia en cada kilómetro recorrido.",
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Lado Izquierdo: Texto y Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={styles.textSide}
        >
          <span style={styles.sub}>ACERCA DE SERVICIOS STS</span>
          <h2 style={styles.title}>
            SOMOS ESPECIALISTAS EN TRANSPORTE DE CARGA PESADA...
          </h2>

          <p style={styles.mainPara}>
            SERVICIOS STS nace al identificar las necesidades del mercado
            respecto a los requerimientos de diversos clientes para transportar
            sus cargamentos, equipos y maquinarias a diversos puntos del Perú.
          </p>

          {/* Sistema de Tabs Estilo Premium */}
          <div style={styles.tabsWrapper}>
            <div style={styles.tabHeaders}>
              {Object.keys(contenidoTabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTabActiva(tab)}
                  style={{
                    ...styles.tabBtn,
                    color: tabActiva === tab ? "#4ed5e2" : "#999",
                    borderBottom:
                      tabActiva === tab
                        ? "2px solid #4ed5e2"
                        : "2px solid transparent",
                  }}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
            <div style={styles.tabContent}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={tabActiva}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {contenidoTabs[tabActiva]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <motion.button whileHover={{ scale: 1.05 }} style={styles.btnCotizar}>
            COTIZAR AHORA »
          </motion.button>
        </motion.div>

        {/* Lado Derecho: Imagen con capas (Layered Design) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={styles.imageSide}
        >
          <div style={styles.imgWrapper}>
            <img
              src={fotoSobreNosotros}
              alt="Operaciones STS"
              style={styles.mainImg}
            />

            {/* Cuadro de Experiencia (Arriba Derecha) */}
            <div style={styles.expBox}>
              <span style={styles.expNum}>8</span>
              <span style={styles.expText}>
                AÑOS DE
                <br />
                EXPERIENCIA
              </span>
            </div>

            {/* Certificado (Abajo Izquierda) */}
            <div style={styles.certBox}>
              <CheckCircle2 color="#4ed5e2" size={30} />
              <div>
                <span style={styles.certTitle}>CONTAMOS CON CERTIFICADO</span>
                <span style={styles.certSub}>DE HOMOLOGACIÓN</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "100px 5%", backgroundColor: "#fff" },
  container: {
    display: "flex",
    gap: "60px",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "center",
  },
  textSide: { flex: 1.2 },
  sub: {
    color: "#4ed5e2",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "900",
    color: "#4ed5e2",
    margin: "20px 0",
    lineHeight: "1.2",
  },
  mainPara: {
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "30px",
    fontSize: "15px",
  },

  // Estilos Tabs
  tabsWrapper: { marginBottom: "40px" },
  tabHeaders: {
    display: "flex",
    gap: "25px",
    borderBottom: "1px solid #eee",
    marginBottom: "20px",
  },
  tabBtn: {
    background: "none",
    border: "none",
    padding: "10px 0",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "13px",
    transition: "0.3s",
  },
  tabContent: {
    minHeight: "80px",
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.6",
  },

  btnCotizar: {
    backgroundColor: "#4ed5e2",
    color: "#fff",
    border: "none",
    padding: "15px 30px",
    borderRadius: "5px",
    fontWeight: "800",
    cursor: "pointer",
  },

  // Estilos Imagen y Capas
  imageSide: { flex: 1, position: "relative" },
  imgWrapper: {
    position: "relative",
    borderRadius: "15px",
    overflow: "visible",
  },
  mainImg: {
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },

  expBox: {
    position: "absolute",
    top: "-20px",
    right: "-20px",
    backgroundColor: "#4ed5e2",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 10px 20px rgba(78, 213, 226, 0.3)",
  },
  expNum: { fontSize: "40px", fontWeight: "900", lineHeight: "1" },
  expText: {
    fontSize: "10px",
    fontWeight: "700",
    textAlign: "center",
    marginTop: "5px",
  },

  certBox: {
    position: "absolute",
    bottom: "-30px",
    left: "-30px",
    backgroundColor: "#fff",
    padding: "15px 25px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    border: "1px solid #eee",
  },
  certTitle: {
    display: "block",
    fontSize: "11px",
    fontWeight: "800",
    color: "#333",
  },
  certSub: {
    display: "block",
    fontSize: "11px",
    fontWeight: "800",
    color: "#4ed5e2",
  },
};

export default Nosotros;
