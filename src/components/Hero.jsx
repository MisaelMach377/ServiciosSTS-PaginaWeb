import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// IMÁGENES
import fotoLogistica1 from "../assets/CAMION_6HD_PARADO.png";
import fotoLogistica2 from "../assets/CAMIONES_1HD.png";

// SLIDES
const slides = [
  {
    id: 1,
    subtitle: "SOLUCIONES LOGÍSTICAS & REEFER 24/7",
    title: "MONITOREO, TRANSPORTE Y MANTENIMIENTO DE CONTENEDORES REFRIGERADOS",
    description:
      "Especialistas en operaciones logísticas, mantenimiento reefer y transporte de carga para comercio exterior en los principales puertos del Perú.",
    image: fotoLogistica1,
  },
  {
    id: 2,
    subtitle: "OPERACIONES CERTIFICADAS",
    title: "SOPORTE TÉCNICO ESPECIALIZADO PARA EQUIPOS REEFER Y DRY",
    description:
      "Contamos con técnicos certificados por Carrier, Thermoking, Daikin y otras marcas líderes para garantizar operaciones seguras y eficientes.",
    image: fotoLogistica2,
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section style={styles.heroContainer}>
      {/* LEFT SIDE */}
      <motion.div
        key={`text-${index}`}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.textSide}
      >
        <span style={styles.subTitle}>{slides[index].subtitle}</span>

        <h1 style={styles.mainTitle}>{slides[index].title}</h1>

        <p style={styles.desc}>{slides[index].description}</p>

        <div style={styles.buttonContainer}></div>

        {/* INFO EXTRA */}
        <div style={styles.bottomInfo}>
          <span>ATENCIÓN 24/7</span>
          <span>LIMA • CALLAO • PAITA • SALAVERRY</span>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <div style={styles.imageSide}>
        <AnimatePresence mode="sync">
          <motion.img
            key={slides[index].id}
            src={slides[index].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: 7 },
            }}
            style={styles.heroImg}
          />
        </AnimatePresence>

        {/* OVERLAY */}
        <div style={styles.overlay}></div>

        {/* DOTS */}
        <div style={styles.dotContainer}>
          {slides.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === index ? 35 : 12,
                opacity: i === index ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
              style={styles.dot}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroContainer: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    flexWrap: "wrap",
    backgroundColor: "#0f172a",
  },

  // LEFT
  textSide: {
    flex: 1,
    minWidth: "320px",
    backgroundColor: "#0f172a",
    padding: "0 8%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
    position: "relative",
    zIndex: 2,
  },

  subTitle: {
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "3px",
    marginBottom: "20px",
    color: "#06b6d4",
    textTransform: "uppercase",
  },

  mainTitle: {
    fontSize: "clamp(38px, 5vw, 64px)",
    fontWeight: "900",
    lineHeight: "1.1",
    marginBottom: "25px",
    textTransform: "uppercase",
    maxWidth: "750px",
  },

  desc: {
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "40px",
    maxWidth: "620px",
    color: "rgba(255,255,255,0.85)",
  },

  buttonContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "60px",
  },

  ctaButton: {
    backgroundColor: "#06b6d4",
    color: "#fff",
    border: "none",
    padding: "18px 34px",
    borderRadius: "8px",
    fontWeight: "800",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    width: "fit-content",
    letterSpacing: "1px",
    boxShadow: "0 10px 25px rgba(6,182,212,0.25)",
    transition: "0.3s ease",
  },

  bottomInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "13px",
    color: "rgba(255,255,255,0.65)",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },

  // RIGHT
  imageSide: {
    flex: 1,
    minWidth: "320px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#000",
    minHeight: "100vh",
  },

  heroImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0,0,0,0.25), rgba(0,0,0,0.05))",
    zIndex: 1,
  },

  // DOTS
  dotContainer: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: 2,
  },

  dot: {
    height: "5px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
};

export default Hero;
