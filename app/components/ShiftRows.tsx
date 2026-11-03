const shifts = [
  { from: "Waiting for tickets", to: "Reaching customers first" },
  {
    from: "Answering everything by hand",
    to: "AI handling the routine, with people on what matters",
  },
  { from: "One-size-fits-all", to: "Service shaped by each customer" },
  { from: "A cost center", to: "A source of retention and insight" },
];

export default function ShiftRows() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {shifts.map((shift) => (
        <div
          key={shift.from}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-6 rounded-xl border border-gray-200 bg-white p-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
              From
            </p>
            <p className="text-gray-600 leading-relaxed">{shift.from}</p>
          </div>
          <span className="hidden md:block text-teal text-2xl" aria-hidden="true">
            &rarr;
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-1">
              To
            </p>
            <p className="font-semibold text-navy leading-relaxed">{shift.to}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
