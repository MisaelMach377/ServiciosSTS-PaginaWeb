import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactoBanner = () => {
  return (
    <section style={styles.section}>
      {/* TOP CURVE */}
      <div style={styles.curveContainer}>
        <svg viewBox="0 0 1440 120" style={styles.svgCurve}>
          <path
            fill="#f8fafc"
            d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={styles.upperTitle}
        >
          CONTACTA A SERVICIOS STS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.mainHeading}
        >
          ¿NECESITAS SOPORTE EN{" "}
          <span style={styles.highlight}>
            LOGÍSTICA, TRANSPORTE O SERVICIOS REEFER?
          </span>
        </motion.h2>

        {/* DIVIDER */}
        <div style={styles.divider}>
          <div style={styles.line}></div>

          <div style={styles.arrowIcon}>
            <ArrowRight size={24} color="#06b6d4" />
          </div>

          <div style={styles.line}></div>
        </div>

        {/* DESCRIPTION */}
        <p style={styles.description}>
          Nuestro equipo está preparado para brindarte soluciones rápidas y
          eficientes en operaciones logísticas, monitoreo reefer, mantenimiento
          y transporte especializado para comercio exterior.
        </p>

        {/* CONTACT CARDS */}
        <div style={styles.contactCards}>
          {/* PHONE */}
          <motion.a
            href="tel:+51995391926"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={styles.phoneCard}
          >
            <div style={styles.iconCircle}>
              <Phone size={24} color="#fff" />
            </div>

            <div>
              <span style={styles.cardLabel}>LLÁMANOS</span>

              <span style={styles.cardText}>+51 995 391 926</span>
            </div>
          </motion.a>

          {/* EMAIL */}
          <motion.a
            href="mailto:gerencia@servicios-sts.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={styles.emailCard}
          >
            <div style={styles.iconCircleLight}>
              <Mail size={24} color="#06b6d4" />
            </div>

            <div>
              <span style={styles.cardLabelDark}>ESCRÍBENOS</span>

              <span style={styles.cardTextDark}>
                gerencia@servicios-sts.com
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#0f172a",
    paddingBottom: "120px",
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
  },

  // CURVE
  curveContainer: {
    width: "100%",
    lineHeight: 0,
  },

  svgCurve: {
    width: "100%",
    height: "auto",
  },

  // CONTENT
  content: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
  },

  upperTitle: {
    color: "#06b6d4",
    fontSize: "13px",
    fontWeight: "800",
    letterSpacing: "3px",
    textTransform: "uppercase",
  },

  mainHeading: {
    fontSize: "clamp(36px, 5vw, 58px)",
    fontWeight: "900",
    color: "#fff",
    margin: "30px 0",
    lineHeight: "1.2",
  },

  highlight: {
    color: "#06b6d4",
  },

  // DIVIDER
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "18px",
    marginBottom: "35px",
  },

  line: {
    width: "80px",
    height: "1px",
    backgroundColor: "rgba(255,255,255,0.2)",
  },

  arrowIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // DESCRIPTION
  description: {
    color: "rgba(255,255,255,0.75)",
    lineHeight: "1.9",
    fontSize: "17px",
    maxWidth: "760px",
    margin: "0 auto 60px",
  },

  // CONTACT CARDS
  contactCards: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },

  // PHONE CARD
  phoneCard: {
    backgroundColor: "#06b6d4",
    padding: "28px 34px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    textDecoration: "none",
    minWidth: "320px",
    boxShadow: "0 20px 40px rgba(6,182,212,0.25)",
    transition: "0.3s",
  },

  // EMAIL CARD
  emailCard: {
    backgroundColor: "#fff",
    padding: "28px 34px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    textDecoration: "none",
    minWidth: "320px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    transition: "0.3s",
  },

  // ICONS
  iconCircle: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  iconCircleLight: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    backgroundColor: "#ecfeff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  // TEXT
  cardLabel: {
    display: "block",
    fontSize: "12px",
    fontWeight: "700",
    color: "rgba(255,255,255,0.8)",
    letterSpacing: "2px",
    marginBottom: "6px",
  },

  cardLabelDark: {
    display: "block",
    fontSize: "12px",
    fontWeight: "700",
    color: "#64748b",
    letterSpacing: "2px",
    marginBottom: "6px",
  },

  cardText: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "900",
  },

  cardTextDark: {
    color: "#0f172a",
    fontSize: "20px",
    fontWeight: "900",
  },
};

export default ContactoBanner;
