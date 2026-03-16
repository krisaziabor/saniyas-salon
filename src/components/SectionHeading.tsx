export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-sm font-bold mb-4 uppercase"
      style={{ fontFamily: "var(--font-diatype)", color: "rgba(238, 179, 99, 0.5)" }}
    >
      {children}
    </h2>
  );
}
