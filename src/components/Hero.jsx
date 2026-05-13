import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// 1. Importa tus imágenes aquí (ajusta el nombre del archivo según tus assets)
import fotoLogistica1 from "../assets/hero.png";
import fotoLogistica2 from "../assets/logosistemas.jpg";

// 2. Ahora el array lee las variables importadas
const slides = [
  {
    id: 1,
    title: "TRANSPORTE DE CARGA PESADA Y ANCHA A NIVEL NACIONAL",
    subtitle: "OPERACIONES LOGÍSTICAS EFICIENTES",
    description:
      "Sabemos que para tu empresa, mover grandes volúmenes de mercancía es una tarea compleja que requiere experiencia y profesionalismo.",
    image: fotoLogistica1, // Variable de arriba
  },
  {
    id: 2,
    title: "SOLUCIONES INTEGRALES EN LOGÍSTICA TERRESTRE",
    subtitle: "SEGURIDAD Y PUNTUALIDAD",
    description:
      "Nos enfocamos en brindar soluciones a medida para tus necesidades de transporte de carga pesada en todo el país.",
    image: fotoLogistica2, // Variable de arriba
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={styles.heroContainer}>
      <motion.div
        key={`text-${index}`}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={styles.textSide}
      >
        <span style={styles.subTitle}>{slides[index].subtitle}</span>
        <h1 style={styles.mainTitle}>{slides[index].title}</h1>
        <p style={styles.desc}>{slides[index].description}</p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
          whileTap={{ scale: 0.95 }}
          style={styles.ctaButton}
        >
          COTIZAR AHORA <ChevronRight size={20} />
        </motion.button>
      </motion.div>

      <div style={styles.imageSide}>
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].id}
            src={slides[index].image} // Aquí lee la imagen del slide actual
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            style={styles.heroImg}
          />
        </AnimatePresence>

        <div style={styles.dotContainer}>
          {slides.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === index ? 35 : 12,
                opacity: i === index ? 1 : 0.5,
              }}
              style={styles.dot}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Los estilos se mantienen igual...
const styles = {
  heroContainer: {
    display: "flex",
    minHeight: "calc(100vh - 80px)", // Cambia 'height' por 'minHeight'
    width: "100%",
    overflow: "visible", // ¡IMPORTANTE! Cambia 'hidden' por 'visible'
  },
  textSide: {
    flex: 1,
    backgroundColor: "#4ed5e2",
    padding: "0 8%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
  },
  subTitle: {
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "2px",
    marginBottom: "20px",
    opacity: 0.9,
  },
  mainTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: "900",
    lineHeight: "1.1",
    marginBottom: "25px",
    textTransform: "uppercase",
  },
  desc: {
    fontSize: "17px",
    lineHeight: "1.6",
    marginBottom: "40px",
    maxWidth: "500px",
    opacity: 0.95,
  },
  ctaButton: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "18px 35px",
    borderRadius: "4px",
    fontWeight: "800",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    width: "fit-content",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  imageSide: {
    flex: 1,
    position: "relative",
    backgroundColor: "#222",
  },
  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  dotContainer: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
  },
  dot: {
    height: "5px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
};

export default Hero;
