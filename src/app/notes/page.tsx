import PageShell from "@/components/PageShell";
import { directorNoteBody } from "@/data/directorNote";

export default function Notes() {
  return (
    <PageShell pathname="/notes">
      <div className="max-w-3xl">
        <h2 className="font-name text-aor-section-heading text-xs font-bold mb-3 uppercase tracking-wide">
          Emiliano Cáceres Manzano, Director
        </h2>
        <div className="font-body text-aor-body text-[0.8125rem] leading-snug space-y-3">
          <p>{directorNoteBody}</p>
        </div>
      </div>
    </PageShell>
  );
}
