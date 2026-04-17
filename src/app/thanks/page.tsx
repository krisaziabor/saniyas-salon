import PageShell from "@/components/PageShell";
import { specialThanks } from "@/data/specialThanks";

export default function Thanks() {
  return (
    <PageShell pathname="/thanks">
      <div className="max-w-4xl mx-auto">
        <div className="text-aor-title space-y-1.5 text-[0.8125rem]">
          {specialThanks.map((name) => (
            <p key={name} className="font-name font-bold uppercase">
              {name}
            </p>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
