import { motion } from "framer-motion";
import LoginPortal from "../assets/PortalServiciosSTS.jpg";
import {
  ArrowUpRight,
  ShieldCheck,
  MonitorSmartphone,
  Clock3,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: <MapPinned size={22} />,
    title: "Seguimiento en tiempo real",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Acceso seguro",
  },
  {
    icon: <Clock3 size={22} />,
    title: "Disponible 24/7",
  },
];

export default function PortalSTS() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.left}
        >
          <span style={styles.badge}>PLATAFORMA DIGITAL</span>

          <h2 style={styles.title}>
            ¿Ya eres <span style={styles.blue}>cliente?</span>
          </h2>

          <p style={styles.description}>
            Accede al <strong>Portal STS</strong> para consultar el estado de
            tus operaciones, realizar seguimiento de servicios, visualizar
            información en tiempo real y gestionar tus procesos desde una única
            plataforma segura.
          </p>

          <div style={styles.features}>
            {features.map((item) => (
              <div key={item.title} style={styles.feature}>
                <div style={styles.icon}>{item.icon}</div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="https://sistemasts.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            style={styles.button}
          >
            INGRESAR AL PORTAL
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>

        {/* DERECHA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          style={styles.right}
        >
          <div style={styles.glow}></div>

          <div style={styles.card}>
            <div style={styles.cardTop}>
              <MonitorSmartphone size={34} color="#38bdf8" />

              <div>
                <h3 style={styles.cardTitle}>Portal STS</h3>
                <span style={styles.online}>● Plataforma Operativa</span>
              </div>
            </div>

            <motion.img
              src={LoginPortal}
              alt="Portal STS"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.7,
              }}
              style={{
                width: "100%",
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,.1)",
                boxShadow: "0 40px 80px rgba(0,0,0,.45)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#07111f",
    padding: "120px 8%",
    color: "#fff",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "70px",
    maxWidth: "1450px",
    margin: "auto",
  },

  left: {
    flex: 1,
    minWidth: "340px",
  },

  badge: {
    display: "inline-block",
    background: "rgba(14,165,233,.15)",
    color: "#38bdf8",
    padding: "8px 18px",
    borderRadius: "999px",
    fontWeight: 700,
    letterSpacing: "2px",
    fontSize: "12px",
    marginBottom: "22px",
  },

  title: {
    fontSize: "clamp(40px,5vw,62px)",
    lineHeight: 1.1,
    fontWeight: 900,
    marginBottom: "25px",
  },

  blue: {
    color: "#38bdf8",
  },

  description: {
    fontSize: "18px",
    color: "rgba(255,255,255,.78)",
    lineHeight: "1.9",
    maxWidth: "650px",
  },

  features: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    marginTop: "45px",
    marginBottom: "45px",
  },

  feature: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontWeight: 700,
    fontSize: "16px",
  },

  icon: {
    width: "50px",
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(56,189,248,.12)",
    color: "#38bdf8",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "18px 34px",
    borderRadius: "16px",
    background: "linear-gradient(135deg,#06b6d4,#0284c7)",
    color: "#fff",
    fontWeight: 800,
    textDecoration: "none",
    fontSize: "15px",
    boxShadow: "0 20px 40px rgba(6,182,212,.30)",
  },

  right: {
    flex: 1,
    minWidth: "360px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  glow: {
    position: "absolute",
    width: "340px",
    height: "340px",
    borderRadius: "50%",
    background: "#06b6d4",
    filter: "blur(140px)",
    opacity: 0.15,
  },
  loginImage: {
    width: "100%",
    display: "block",
    borderRadius: "18px",
    objectFit: "cover",
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    background: "rgba(255,255,255,.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: "28px",
    padding: "28px",
    position: "relative",
    zIndex: 2,
  },

  cardTop: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "30px",
  },

  cardTitle: {
    margin: 0,
    fontSize: "28px",
    fontWeight: 900,
  },

  online: {
    color: "#4ade80",
    fontSize: "14px",
    fontWeight: 700,
  },

  mockup: {
    background: "#0f172a",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.08)",
  },

  topbar: {
    display: "flex",
    gap: "8px",
    padding: "14px",
    borderBottom: "1px solid rgba(255,255,255,.05)",
  },

  circle: {
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    background: "#64748b",
  },

  dashboard: {
    display: "flex",
    height: "330px",
  },

  sidebar: {
    width: "90px",
    background: "#111827",
  },

  content: {
    flex: 1,
    padding: "20px",
  },

  map: {
    height: "120px",
    borderRadius: "14px",
    background: "linear-gradient(135deg,#0ea5e9,#38bdf8)",
    marginBottom: "18px",
  },

  row: {
    display: "flex",
    gap: "14px",
    marginBottom: "18px",
  },

  box: {
    flex: 1,
    height: "70px",
    borderRadius: "12px",
    background: "#1e293b",
  },

  table: {
    height: "70px",
    borderRadius: "12px",
    background: "#1e293b",
  },
};
