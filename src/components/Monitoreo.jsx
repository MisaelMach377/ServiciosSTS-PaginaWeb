import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Map as MapIcon,
  History,
  Database,
  ShieldCheck,
  Globe,
  Activity,
  Navigation,
} from "lucide-react";

// CAPTURAS
import dashboardMapa from "../assets/PruebaMapa-ServiciosSTS.jfif";
import pruebaCorreo from "../assets/PruebaCorreo-ServiciosSTS.jfif";
import Geocercas from "../assets/GEOCERCAS_STS.jpg";
import Historial from "../assets/Historial_STS.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MonitoreoReal = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* HERO */}
      <motion.section
        initial={{ backgroundColor: "#4ed5e2" }}
        animate={{
          backgroundColor: ["#4ed5e2", "#3bc2cf", "#4ed5e2"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={styles.heroSection}
      >
        <div style={styles.bgGridLight}></div>

        <div style={styles.container}>
          <div style={styles.heroCenterLayout}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={styles.heroContentCenter}
            >
              <div style={styles.heroBadgeWhite}>
                <Activity size={14} color="#000" />
                <span style={styles.heroBadgeTextDark}>
                  REAL-TIME CONTROL CENTER
                </span>
              </div>

              <h1 style={styles.heroTitleLarge}>
                Centro de{" "}
                <span style={styles.heroTitleStroke}>Control 360°</span>
              </h1>

              <p style={styles.heroSubtitleWhite}>
                Plataforma avanzada de monitoreo y trazabilidad diseñada para
                operaciones logísticas de alta exigencia, con control total en
                tiempo real.
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.5, duration: 1 }}
                style={styles.titleUnderlineWhite}
              />

              {/* STATS */}
              <div style={styles.statsRow}>
                <div style={styles.statItem}>
                  <h3 style={styles.statNumber}>24/7</h3>
                  <span style={styles.statLabel}>Monitoreo</span>
                </div>

                <div style={styles.statItem}>
                  <h3 style={styles.statNumber}>100%</h3>
                  <span style={styles.statLabel}>Trazabilidad</span>
                </div>

                <div style={styles.statItem}>
                  <h3 style={styles.statNumber}>GPS</h3>
                  <span style={styles.statLabel}>Tiempo Real</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div style={styles.heroCurve}></div>
      </motion.section>

      {/* METODOLOGÍA */}
      <section style={styles.methodologySection}>
        <div style={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={styles.methodologyCard}
          >
            <div style={styles.cardContent}>
              <div style={styles.badgeLine}>
                <span style={styles.methodTag}>METODOLOGÍA STS</span>

                <motion.div
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={styles.statusDot}
                />
              </div>

              <h2 style={styles.methodTitle}>¿Cómo trabajamos?</h2>

              <p style={styles.methodText}>
                Servicios STS opera mediante un sistema propietario de control
                logístico capaz de centralizar telemetría, monitoreo GPS,
                historial de eventos y automatización operativa en una sola
                plataforma.
              </p>
            </div>

            <div style={styles.cardVisual}>
              <Database size={34} color="#4ed5e2" strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section style={styles.dashboardSection}>
        <div style={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={styles.header}
          >
            <h2 style={styles.title}>
              OPERACIÓN EN <span style={styles.highlight}>VIVO 24/7</span>
            </h2>

            <p style={styles.proDescription}>
              Nuestra plataforma centraliza información crítica en tiempo real,
              permitiendo visibilidad absoluta sobre rutas, unidades y eventos
              estratégicos dentro de toda la operación logística.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={styles.mapCard}
          >
            <div style={styles.browserBar}>
              <div style={styles.dots}>
                <div
                  style={{ ...styles.dot, backgroundColor: "#ff5f57" }}
                ></div>

                <div
                  style={{ ...styles.dot, backgroundColor: "#febc2e" }}
                ></div>

                <div
                  style={{ ...styles.dot, backgroundColor: "#28c840" }}
                ></div>
              </div>

              <div style={styles.browserAddress}>
                Portal Interno de Servicios STS
              </div>
            </div>

            <img src={dashboardMapa} alt="Dashboard" style={styles.imgMain} />
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section style={styles.gridSection}>
        <div style={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={styles.gridIntro}
          >
            <h3 style={styles.gridStatement}>
              Tecnología aplicada al control operativo en tiempo real
            </h3>

            <div style={styles.shortDivider}></div>
          </motion.div>

          <div style={styles.secondaryGrid}>
            <Card
              delay={0.1}
              tag="AUTOMATIZACIÓN"
              title="Alertas Inteligentes"
              icon={<Mail size={18} color="#4ed5e2" />}
            >
              <img src={pruebaCorreo} alt="Aviso" style={styles.imgSmall} />

              <p style={styles.cardDesc}>
                Notificaciones automáticas mediante flujos inteligentes y
                alertas operativas en tiempo real.
              </p>
            </Card>

            <Card
              delay={0.2}
              tag="GEOCERCAS"
              title="Geocercas GPS"
              icon={<MapIcon size={18} color="#4ed5e2" />}
            >
              <img src={Geocercas} alt="Aviso" style={styles.imgSmall} />

              <p style={styles.cardDesc}>
                Supervisión perimetral con geocercas configurables para control
                de zonas estratégicas.
              </p>
            </Card>

            <Card
              delay={0.3}
              tag="HISTORIAL RUTAS"
              title="Historial Centralizado"
              icon={<History size={18} color="#4ed5e2" />}
            >
              <img src={Historial} alt="Aviso" style={styles.imgSmall} />

              <p style={styles.cardDesc}>
                Registro completo de eventos, rutas y telemetría para análisis
              </p>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={styles.footerStatus}
          >
            <div style={styles.statusGroup}>
              <Globe size={14} color="#94a3b8" />

              <span style={styles.statusText}>Cobertura Nacional</span>
            </div>

            <div style={styles.dividerDot}></div>

            <div style={styles.statusGroup}>
              <ShieldCheck size={14} color="#4ed5e2" />

              <span style={styles.statusText}>Seguridad Certificada</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ tag, title, icon, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{
      y: -8,
      boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
    }}
    style={styles.infoCard}
  >
    <div style={styles.cardHeader}>
      {icon}

      <span style={styles.cardTag}>{tag}</span>
    </div>

    <h4 style={styles.cardTitle}>{title}</h4>

    {children}
  </motion.div>
);

const styles = {
  pageWrapper: {
    backgroundColor: "#fff",
    paddingBottom: "60px",
    overflowX: "hidden",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },

  heroSection: {
    padding: "200px 0 150px 0",
    position: "relative",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  bgGridLight: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.3) 1.5px, transparent 1.5px)",
    backgroundSize: "50px 50px",
    zIndex: 0,
  },

  heroCenterLayout: {
    position: "relative",
    zIndex: 1,
    maxWidth: "900px",
  },

  heroContentCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  heroBadgeWhite: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#fff",
    padding: "10px 20px",
    borderRadius: "100px",
    marginBottom: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },

  heroBadgeTextDark: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#000",
    letterSpacing: "1px",
  },

  heroTitleLarge: {
    fontSize: "92px",
    fontWeight: "900",
    color: "#fff",
    letterSpacing: "-5px",
    lineHeight: "0.9",
    margin: 0,
  },

  heroTitleStroke: {
    color: "transparent",
    WebkitTextStroke: "1.5px white",
  },

  heroSubtitleWhite: {
    fontSize: "22px",
    color: "rgba(255,255,255,0.9)",
    marginTop: "30px",
    lineHeight: "1.6",
    fontWeight: "500",
    maxWidth: "760px",
  },

  titleUnderlineWhite: {
    height: "6px",
    backgroundColor: "#000",
    marginTop: "40px",
    borderRadius: "10px",
  },

  statsRow: {
    display: "flex",
    gap: "60px",
    marginTop: "55px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  statItem: {
    textAlign: "center",
  },

  statNumber: {
    fontSize: "34px",
    fontWeight: "900",
    color: "#fff",
    margin: 0,
  },

  statLabel: {
    color: "rgba(255,255,255,0.85)",
    fontSize: "14px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  heroCurve: {
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
    height: "80px",
    backgroundColor: "#fff",
    clipPath: "ellipse(70% 100% at 50% 100%)",
  },

  methodologySection: {
    padding: "100px 0",
    backgroundColor: "#fff",
  },

  methodologyCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "50px",
    borderRadius: "32px",
    border: "1px solid rgba(15,23,42,0.06)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.03)",
  },

  badgeLine: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },

  methodTag: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#94a3b8",
    letterSpacing: "2px",
  },

  statusDot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#4ed5e2",
    borderRadius: "50%",
  },

  methodTitle: {
    fontSize: "34px",
    fontWeight: "800",
    color: "#111",
    margin: "0 0 24px",
  },

  methodText: {
    fontSize: "18px",
    color: "#64748b",
    maxWidth: "680px",
    lineHeight: "1.8",
  },

  cardVisual: {
    width: "90px",
    height: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    borderRadius: "24px",
  },

  dashboardSection: {
    padding: "80px 0",
  },

  header: {
    textAlign: "center",
    marginBottom: "60px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#111",
    letterSpacing: "-1px",
  },

  highlight: {
    color: "#4ed5e2",
  },

  proDescription: {
    color: "#64748b",
    fontSize: "19px",
    marginTop: "20px",
    maxWidth: "800px",
    margin: "20px auto 0",
    lineHeight: "1.7",
  },

  mapCard: {
    borderRadius: "28px",
    border: "1px solid rgba(15,23,42,0.06)",
    overflow: "hidden",
    boxShadow: "0 40px 80px rgba(0,0,0,0.06)",
  },

  browserBar: {
    backgroundColor: "#fafafa",
    padding: "18px 28px",
    display: "flex",
    alignItems: "center",
    gap: "28px",
    borderBottom: "1px solid #eee",
  },

  dots: {
    display: "flex",
    gap: "8px",
  },

  dot: {
    width: "11px",
    height: "11px",
    borderRadius: "50%",
  },

  browserAddress: {
    fontSize: "13px",
    color: "#94a3b8",
    opacity: 0.7,
  },

  imgMain: {
    width: "100%",
    display: "block",
  },

  gridSection: {
    padding: "100px 0",
    backgroundColor: "#f8fafc",
  },

  gridIntro: {
    textAlign: "center",
    marginBottom: "60px",
  },

  gridStatement: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#111",
    maxWidth: "700px",
    margin: "0 auto",
  },

  shortDivider: {
    width: "35px",
    height: "4px",
    backgroundColor: "#4ed5e2",
    margin: "20px auto 0",
    borderRadius: "2px",
  },

  secondaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "35px",
  },

  infoCard: {
    padding: "35px",
    backgroundColor: "#fff",
    border: "1px solid rgba(15,23,42,0.06)",
    borderRadius: "28px",
    transition: "all 0.35s ease",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "25px",
  },

  cardTag: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#cbd5e1",
  },

  cardTitle: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#111",
    marginBottom: "18px",
  },

  cardDesc: {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: "1.6",
  },

  imgSmall: {
    width: "100%",
    borderRadius: "14px",
    marginBottom: "20px",
    border: "1px solid #f0f0f0",
  },

  geoPlaceholder: {
    height: "90px",
    backgroundColor: "#f9f9f9",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },

  historyList: {
    marginBottom: "20px",
  },

  historyItem: {
    fontSize: "13px",
    color: "#94a3b8",
    marginBottom: "8px",
  },

  footerStatus: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "100px",
    border: "1px solid rgba(15,23,42,0.06)",
    width: "fit-content",
    margin: "80px auto 0",
  },

  statusGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  statusText: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  dividerDot: {
    width: "4px",
    height: "4px",
    backgroundColor: "#e2e8f0",
    borderRadius: "50%",
  },
};

export default MonitoreoReal;
