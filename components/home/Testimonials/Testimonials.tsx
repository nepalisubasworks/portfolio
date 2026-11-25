"use client";

import Carousel from "react-multi-carousel";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/constant/constant";

// 3 items on desktop, 2 on tablet, 1 on mobile
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const Testimonials = () => {
  return (
    <section id="endorsements" className="py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2
          data-aos="fade-up"
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          <span className="text-cyan-200">Endorsements</span> &amp; Mentorship Notes
        </h2>

        <div data-aos="fade-up" className="mt-12 pb-10">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3500}
            transitionDuration={600}
            arrows={false}
            showDots
            pauseOnHover
            itemClass="py-2"
            containerClass="pb-10"
          >
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                role={item.role}
                quote={item.quote}
                initials={item.initials}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
