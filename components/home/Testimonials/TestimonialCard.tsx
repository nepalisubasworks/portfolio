import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

const TestimonialCard = ({ name, role, quote, initials }: TestimonialCardProps) => {
  return (
    <div className="mx-3 flex h-full min-h-[300px] flex-col rounded-xl bg-[#131332] p-6 shadow-lg">
      <FaQuoteLeft className="h-6 w-6 text-cyan-300" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-300">{quote}</p>
      <div className="mt-6 flex items-center space-x-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-800 text-sm font-bold text-cyan-200">
          {initials}
        </div>
        <div>
          <h4 className="text-base font-semibold text-white">{name}</h4>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
