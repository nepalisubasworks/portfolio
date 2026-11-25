import ResumeCard from "./ResumeCard";
import { education, experience } from "@/constant/constant";

const Resume = () => {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2
          data-aos="fade-up"
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          My <span className="text-cyan-200">Resume</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <h3
              data-aos="fade-right"
              className="mb-6 text-2xl font-semibold text-white"
            >
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <ResumeCard
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    date={item.date}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3
              data-aos="fade-left"
              className="mb-6 text-2xl font-semibold text-white"
            >
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <ResumeCard
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    date={item.date}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
