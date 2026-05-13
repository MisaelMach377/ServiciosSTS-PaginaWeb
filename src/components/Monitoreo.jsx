import React from "react";
import { motion } from "framer-motion";
import { BellRing, ShieldCheck, Smartphone, Eye } from "lucide-react";

// 1. IMPORTA TUS CAPTURAS AQUÍ
import sistemaInterno from "../assets/PruebaCorreo-ServiciosSTS.jfif"; // La de image_1efc55.jpg
import alertaMovil from "../assets/PruebaMapa-ServiciosSTS.jfif";

const MonitoreoReal = () => {
  return (
    <section
      id="control 360°"
      style={{ ...styles.section, scrollMarginTop: "80px" }}
    >
      {" "}
      <div style={styles.container}>
        {/* Cabecera de la sección */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            NUESTRO <span style={styles.highlight}>SISTEMA DE CONTROL</span>
          </h2>
          <p style={styles.subtitle}>
            Transparencia total. Así es como vigilamos tu carga desde nuestro
            centro de mando hasta las notificaciones en tu bolsillo.
          </p>
        </div>

        <div style={styles.contentGrid}>
          {/* LADO IZQUIERDO: EXPLICACIÓN */}
          <div style={styles.infoCol}>
            <FeatureRow
              Icon={Eye}
              title="Panel de Control Central"
              desc="Visualizamos toda la flota en tiempo real con telemetría avanzada (ignición, velocidad y GPS)."
            />
            <FeatureRow
              Icon={BellRing}
              title="Alertas Automatizadas"
              desc="El sistema genera avisos automáticos de ingreso/salida de geocercas y paradas no autorizadas."
            />
            <FeatureRow
              Icon={Smartphone}
              title="Notificaciones al Cliente"
              desc="Recibe correos con el estado exacto, conductor y ubicación del evento en tiempo real."
            />
          </div>

          {/* LADO DERECHO: LAS IMÁGENES QUE MANDASTE */}
          <div style={styles.visualCol}>
            {/* Imagen del Sistema Interno (image_1efc55.jpg) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={styles.mainCard}
            >
              <span style={styles.tag}>SISTEMA INTERNO</span>
              <img
                src={sistemaInterno}
                alt="Dashboard de Monitoreo"
                style={styles.imgSistema}
              />
            </motion.div>

            {/* Imagen de la Alerta (image_1efc72.jpg) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={styles.overlayCard}
            >
              <span style={styles.tagAlerta}>ALERTA EN VIVO</span>
              <img
                src={alertaMovil}
                alt="Notificación de ingreso"
                style={styles.imgAlerta}
              />
              <p style={styles.imgRef}>
                * Imagen referencial del sistema de alertas
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-componente para las filas de texto
const FeatureRow = ({ Icon, title, desc }) => (
  <div style={styles.featureRow}>
    <div style={styles.iconBox}>
      <Icon size={24} color="#4ed5e2" />
    </div>
    <div>
      <h4 style={styles.fTitle}>{title}</h4>
      <p style={styles.fDesc}>{desc}</p>
    </div>
  </div>
);

const styles = {
  section: { padding: "100px 5%", backgroundColor: "#fff" },
  container: { maxWidth: "1200px", margin: "0 auto" },
  header: { textAlign: "center", marginBottom: "60px" },
  title: { fontSize: "36px", fontWeight: "900", color: "#1a1a1a" },
  highlight: { color: "#4ed5e2" },
  subtitle: { color: "#666", maxWidth: "600px", margin: "15px auto" },
  contentGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "60px",
    alignItems: "center",
  },
  infoCol: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  visualCol: { flex: "1.2 1 500px", position: "relative", minHeight: "500px" },

  // Estilos de las "Cards" de imagen
  mainCard: {
    backgroundColor: "#1a1a1a",
    padding: "10px",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  overlayCard: {
    position: "absolute",
    bottom: "-20px",
    right: "-10px",
    width: "280px",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    border: "2px solid #4ed5e2",
  },
  imgSistema: { width: "100%", borderRadius: "10px", display: "block" },
  imgAlerta: { width: "100%", borderRadius: "8px", display: "block" },
  tag: {
    fontSize: "10px",
    color: "#4ed5e2",
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
  },
  tagAlerta: {
    fontSize: "10px",
    color: "#1a1a1a",
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
  },
  imgRef: {
    fontSize: "9px",
    color: "#999",
    marginTop: "5px",
    textAlign: "center",
  },

  // Texto
  featureRow: { display: "flex", gap: "20px" },
  iconBox: {
    backgroundColor: "#f0fdfa",
    padding: "12px",
    borderRadius: "12px",
  },
  fTitle: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#1a1a1a",
    margin: "0 0 5px 0",
  },
  fDesc: { fontSize: "14px", color: "#555", margin: 0 },
};

export default MonitoreoReal;
