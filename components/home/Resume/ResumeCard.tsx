interface ResumeCardProps {
  title: string;
  subtitle: string;
  description?: string;
  date?: string;
}

const ResumeCard = ({ title, subtitle, description, date }: ResumeCardProps) => {
  return (
    <div className="rounded-xl border-l-4 border-blue-800 bg-blue-950/20 p-6 transition-all duration-300 hover:bg-blue-950/60">
      {date ? (
        <span className="mb-3 inline-block rounded-full bg-blue-800 px-4 py-1 text-xs font-semibold text-cyan-200">
          {date}
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm font-medium text-cyan-300">{subtitle}</p>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{description}</p>
      ) : null}
    </div>
  );
};

export default ResumeCard;
