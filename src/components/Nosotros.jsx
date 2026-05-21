import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import fotoSobreNosotros from "../assets/CAMION_8.jpeg";

const Nosotros = () => {
  const [tabActiva, setTabActiva] = useState("servicios");

  const contenidoTabs = {
    servicios:
      "Especialistas en monitoreo reefer, mantenimiento preventivo y correctivo, PTI, transporte dry & reefer y operaciones logísticas para comercio exterior.",

    certificaciones:
      "Nuestro equipo técnico está certificado por Carrier, Thermoking, Daikin, York y LG, garantizando operaciones seguras y eficientes.",

    cobertura:
      "Operamos en los principales puertos del Perú: Lima, Callao, Paita y Salaverry, brindando soporte técnico y atención 24/7 durante todo el año.",
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.textSide}
        >
          <span style={styles.sub}>
            EXPERTOS EN LOGÍSTICA & OPERACIONES REEFER
          </span>

          <h2 style={styles.title}>
            SOLUCIONES INTEGRALES EN LOGÍSTICA, TRANSPORTE Y SERVICIOS REEFER
          </h2>

          <p style={styles.mainPara}>
            SERVICIOS STS E.I.R.L. es una empresa peruana especializada en
            soluciones integrales de logística y comercio exterior. Contamos con
            amplia experiencia en monitoreo, mantenimiento y reparación de
            contenedores refrigerados, transporte de carga y soporte técnico
            especializado para operaciones portuarias.
          </p>

          {/* TABS */}
          <div style={styles.tabsWrapper}>
            <div style={styles.tabHeaders}>
              {Object.keys(contenidoTabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTabActiva(tab)}
                  style={{
                    ...styles.tabBtn,
                    color: tabActiva === tab ? "#06b6d4" : "#64748b",
                    borderBottom:
                      tabActiva === tab
                        ? "2px solid #06b6d4"
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

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#0891b2",
            }}
            whileTap={{ scale: 0.95 }}
            style={styles.btnCotizar}
          >
            SOLICITAR INFORMACIÓN
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.imageSide}
        >
          <div style={styles.imgWrapper}>
            <img
              src={fotoSobreNosotros}
              alt="Operaciones STS"
              style={styles.mainImg}
            />

            {/* EXPERIENCE BOX */}
            <div style={styles.expBox}>
              <span style={styles.expNum}>8+</span>

              <span style={styles.expText}>
                AÑOS OPERANDO
                <br />
                EN EL SECTOR LOGÍSTICO
              </span>
            </div>

            {/* CERTIFICATIONS */}
            <div style={styles.certBox}>
              <CheckCircle2 color="#06b6d4" size={32} />

              <div>
                <span style={styles.certTitle}>CERTIFICACIONES TÉCNICAS</span>

                <span style={styles.certSub}>
                  Carrier • Thermoking • Daikin
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "120px 5%",
    backgroundColor: "#f8fafc",
  },

  container: {
    display: "flex",
    gap: "80px",
    maxWidth: "1250px",
    margin: "0 auto",
    alignItems: "center",
    flexWrap: "wrap",
  },

  // LEFT
  textSide: {
    flex: 1.1,
    minWidth: "320px",
  },

  sub: {
    color: "#06b6d4",
    fontSize: "13px",
    fontWeight: "800",
    letterSpacing: "3px",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "clamp(36px, 4vw, 52px)",
    fontWeight: "900",
    color: "#0f172a",
    margin: "20px 0 25px",
    lineHeight: "1.15",
    maxWidth: "700px",
  },

  mainPara: {
    color: "#475569",
    lineHeight: "1.9",
    marginBottom: "40px",
    fontSize: "16px",
    maxWidth: "650px",
  },

  // TABS
  tabsWrapper: {
    marginBottom: "45px",
  },

  tabHeaders: {
    display: "flex",
    gap: "30px",
    borderBottom: "1px solid #e2e8f0",
    marginBottom: "25px",
    flexWrap: "wrap",
  },

  tabBtn: {
    background: "none",
    border: "none",
    padding: "12px 0",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "13px",
    transition: "0.3s",
    letterSpacing: "1px",
  },

  tabContent: {
    minHeight: "90px",
    color: "#475569",
    fontSize: "15px",
    lineHeight: "1.8",
    maxWidth: "600px",
  },

  // BUTTON
  btnCotizar: {
    backgroundColor: "#06b6d4",
    color: "#fff",
    border: "none",
    padding: "16px 34px",
    borderRadius: "6px",
    fontWeight: "800",
    cursor: "pointer",
    letterSpacing: "1px",
    fontSize: "14px",
    boxShadow: "0 10px 25px rgba(6,182,212,0.2)",
    transition: "0.3s",
  },

  // RIGHT
  imageSide: {
    flex: 1,
    minWidth: "320px",
    position: "relative",
  },

  imgWrapper: {
    position: "relative",
    borderRadius: "20px",
    overflow: "visible",
  },

  mainImg: {
    width: "100%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
  },

  // EXPERIENCE BOX
  expBox: {
    position: "absolute",
    top: "-25px",
    right: "-25px",
    backgroundColor: "#0f172a",
    color: "#fff",
    padding: "28px 24px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 20px 40px rgba(15,23,42,0.2)",
  },

  expNum: {
    fontSize: "52px",
    fontWeight: "900",
    lineHeight: "1",
    color: "#06b6d4",
  },

  expText: {
    fontSize: "11px",
    fontWeight: "700",
    textAlign: "center",
    marginTop: "8px",
    letterSpacing: "1px",
    lineHeight: "1.5",
  },

  // CERTIFICATIONS
  certBox: {
    position: "absolute",
    bottom: "-30px",
    left: "-30px",
    backgroundColor: "#fff",
    padding: "18px 24px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    boxShadow: "0 20px 40px rgba(15,23,42,0.12)",
    border: "1px solid #e2e8f0",
  },

  certTitle: {
    display: "block",
    fontSize: "12px",
    fontWeight: "800",
    color: "#0f172a",
    letterSpacing: "1px",
  },

  certSub: {
    display: "block",
    fontSize: "12px",
    fontWeight: "700",
    color: "#06b6d4",
    marginTop: "4px",
  },
};

export default Nosotros;
