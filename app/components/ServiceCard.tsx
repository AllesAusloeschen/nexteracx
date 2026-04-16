interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-8 transition-all hover:border-teal/30 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-navy mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
