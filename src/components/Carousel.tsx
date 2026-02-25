import Marquee from "react-fast-marquee"
import abengoa from "../assets/abengoa.png"
import cocacola from "../assets/cocacola.png"
import raizen from "../assets/raizen.png"
import tigre from "../assets/tigre.png"
import volvo from "../assets/volvo.png"

const Carousel = () => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 my-10 md:my-16 bg-[#c2c0c0]">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
        Nossos Clientes
      </h2>

      <Marquee speed={50}>
        {[abengoa, cocacola, raizen, tigre, volvo].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Logo Cliente"
            className="mx-8 md:mx-12 h-16 sm:h-20 md:h-28 w-auto"
          />
        ))}
      </Marquee>
    </section>
  );
}

export default Carousel