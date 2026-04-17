export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-name text-aor-section-heading text-xs font-bold mb-3 uppercase tracking-wide">
      {children}
    </h2>
  );
}
