import ServiceCard from "./ServiceCard";
import { services } from "@/constant/constant";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2
          data-aos="fade-up"
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          What I <span className="text-cyan-200">Do</span>
        </h2>
        <p
          data-aos="fade-up"
          className="mx-auto mt-3 max-w-2xl text-center text-gray-400"
        >
          Focus areas where I design, build and document software.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
