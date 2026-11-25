import type { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay: number;
}

const ServiceCard = ({ title, description, icon: Icon, delay }: ServiceCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex h-full flex-col items-start rounded-xl bg-blue-950/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-950/60"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800 text-cyan-200">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
