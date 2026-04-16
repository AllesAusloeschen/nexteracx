interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {label && (
        <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
