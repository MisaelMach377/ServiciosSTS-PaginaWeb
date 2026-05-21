import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Handshake,
  Truck,
  MonitorSmartphone,
  BadgeCheck,
} from "lucide-react";

const Beneficios = () => {
  const items = [
    {
      icon: <ShieldCheck size={34} strokeWidth={1.8} />,
      title: "Seguridad Operativa",
      text: "Contamos con estrictos protocolos de seguridad, monitoreo constante y bajos índices de incidentes en el transporte de carga.",
    },
    {
      icon: <Handshake size={34} strokeWidth={1.8} />,
      title: "Confianza y Cumplimiento",
      text: "Garantizamos entregas puntuales y un servicio confiable respaldado por nuestra experiencia en operaciones logísticas.",
    },
    {
      icon: <Truck size={34} strokeWidth={1.8} />,
      title: "Flota Moderna",
      text: "Nuestra flota se adapta a distintos tipos de carga y operaciones, ofreciendo soluciones flexibles para cada cliente.",
    },
    {
      icon: <MonitorSmartphone size={34} strokeWidth={1.8} />,
      title: "Tecnología en Tiempo Real",
      text: "Integramos rastreo GPS, monitoreo en tiempo real y plataformas digitales para una gestión eficiente y transparente.",
    },
    {
      icon: <BadgeCheck size={34} strokeWidth={1.8} />,
      title: "Servicio de Calidad",
      text: "Brindamos atención personalizada y soporte continuo para asegurar una experiencia logística eficiente y profesional.",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p style={styles.tag}>STS · TRANSPORTE Y LOGÍSTICA</p>

          <h2 style={styles.mainTitle}>
            ¿POR QUÉ TRABAJAR CON{" "}
            <span style={styles.highlight}>SERVICIOS STS </span>?
          </h2>

          <p style={styles.subText}>
            En STS Logistics ofrecemos soluciones modernas de transporte y
            distribución, combinando seguridad, tecnología y eficiencia
            operativa para cada cliente.
          </p>
        </motion.div>
      </div>

      <div style={styles.grid}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            style={styles.card}
          >
            <div style={styles.iconWrapper}>{item.icon}</div>

            <h3 style={styles.cardTitle}>{item.title}</h3>

            <p style={styles.cardText}>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "110px 5%",
    background: "linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)",
  },

  header: {
    maxWidth: "820px",
    margin: "0 auto 70px auto",
    textAlign: "center",
  },

  tag: {
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: "999px",
    background: "rgba(78,213,226,0.10)",
    color: "#0891b2",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "22px",
  },

  mainTitle: {
    fontSize: "44px",
    fontWeight: "900",
    color: "#0f172a",
    lineHeight: "1.1",
    letterSpacing: "-1px",
    marginBottom: "22px",
  },

  highlight: {
    background: "linear-gradient(90deg, #4ed5e2, #0ea5e9)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subText: {
    color: "#64748b",
    fontSize: "16px",
    lineHeight: "1.9",
    maxWidth: "720px",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    maxWidth: "1250px",
    margin: "0 auto",
  },

  card: {
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(15,23,42,0.05)",
    borderRadius: "28px",
    padding: "38px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    minHeight: "280px",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 35px rgba(15,23,42,0.05)",
  },

  iconWrapper: {
    width: "72px",
    height: "72px",
    borderRadius: "22px",
    background: "linear-gradient(135deg, #4ed5e2, #0f172a)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "26px",
    boxShadow: "0 10px 30px rgba(78,213,226,0.25)",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "14px",
    letterSpacing: "-0.4px",
  },

  cardText: {
    fontSize: "14px",
    color: "#64748b",
    lineHeight: "1.9",
  },
};

export default Beneficios;
