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
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      title: "Seguridad",
      text: "Somos una empresa de transporte con un buen registro de seguridad, con muy bajos índices de accidentes y daños a la carga.",
    },
    {
      icon: <Handshake size={40} strokeWidth={1.5} />,
      title: "Confianza",
      text: "Somos una empresa de transporte que cumple con los plazos de entrega prometidos y un buen historial de cumplimiento de contratos.",
    },
    {
      icon: <Truck size={40} strokeWidth={1.5} />,
      title: "Flexibilidad",
      text: "Contamos con una flota importante de equipos que se adapta a la necesidad de cada cliente para transportar diversos tipos de carga.",
    },
    {
      icon: <MonitorSmartphone size={40} strokeWidth={1.5} />,
      title: "Tecnología",
      text: "Contamos con sistemas de seguimiento en tiempo real y software de gestión de flotas para mayor eficiencia y transparencia.",
    },
    {
      icon: <BadgeCheck size={40} strokeWidth={1.5} />,
      title: "Calidad",
      text: "Nos preocupamos por brindar un servicio de alta calidad con un trato amable y personalizado, así como una atención oportuna.",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.mainTitle}>
          ¿POR QUÉ TRABAJAR CON{" "}
          <span style={styles.highlight}>TH LOGISTICS</span>?
        </h2>
        <div style={styles.divider}>
          <div style={styles.line}></div>
          <div style={styles.arrowIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 12H17M17 12L13 8M17 12L13 16"
                stroke="#4ed5e2"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={styles.line}></div>
        </div>
        <p style={styles.subText}>
          En TH Logistics, nos esforzamos por ofrecer un servicio seguro,
          confiable, flexible, de alta calidad y con tecnología avanzada.
        </p>
      </div>

      <div style={styles.grid}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
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
    padding: "80px 5%",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  header: {
    marginBottom: "50px",
    maxWidth: "800px",
    margin: "0 auto 50px auto",
  },
  mainTitle: {
    fontSize: "32px",
    fontWeight: "900",
    color: "#1a1a1a",
    marginBottom: "15px",
  },
  highlight: {
    color: "#4ed5e2",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  line: {
    width: "50px",
    height: "2px",
    backgroundColor: "#1a1a1a",
  },
  subText: {
    color: "#666",
    fontSize: "15px",
    lineHeight: "1.6",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1px", // Minimalista, pegados por un borde fino
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#eee", // El color del "borde" entre tarjetas
    borderRadius: "15px",
    overflow: "hidden",
    border: "1px solid #eee",
  },
  card: {
    backgroundColor: "#f9f9f9",
    flex: "1 1 200px",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "300px",
  },
  iconWrapper: {
    color: "#1a1a1a",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: "15px",
  },
  cardText: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.5",
  },
};

export default Beneficios;
