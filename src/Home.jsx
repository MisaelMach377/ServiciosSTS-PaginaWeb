import Hero from "./components/Hero.jsx";
import Nosotros from "./components/Nosotros.jsx";
import ContactoBanner from "./components/ContactoBanner.jsx";
import Beneficios from "./components/Beneficios.jsx";
import Clientes from "./components/Clientes.jsx";

export default function Home() {
  return (
    <>
      <section id="inicio">
        <Hero />
      </section>

      <section id="nosotros">
        <Nosotros />
      </section>

      <section id="contacto">
        <ContactoBanner />
      </section>

      <section id="beneficios">
        <Beneficios />
      </section>

      <section id="clientes">
        <Clientes />
      </section>
    </>
  );
}
