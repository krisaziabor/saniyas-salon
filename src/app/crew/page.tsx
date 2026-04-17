"use client";

import PageShell from "@/components/PageShell";
import { crewMembersWithBio } from "@/data/crew";
import { useState } from "react";

export default function Crew() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = crewMembersWithBio[selectedIndex];

  return (
    <PageShell pathname="/crew">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-[0.8125rem]">
        <div className="text-aor-title">
          <div className="space-y-2">
            {crewMembersWithBio.map((member, index) => {
              const isSelected = selectedIndex === index;
              return (
                <div
                  key={`${member.role}-${member.name}`}
                  role="button"
                  tabIndex={0}
                  className="grid grid-cols-2 gap-x-3 cursor-pointer hover:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--aor-title-muted)]"
                  onClick={() => setSelectedIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedIndex(index);
                    }
                  }}
                >
                  <p
                    className="font-name"
                    style={{
                      color: isSelected ? "var(--aor-title-muted)" : undefined,
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="font-name"
                    style={{
                      color: isSelected ? "var(--aor-title-muted)" : undefined,
                    }}
                  >
                    {member.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="font-body text-aor-body mt-8 lg:mt-0">
          <p className="leading-snug whitespace-pre-line">{selected.bio}</p>
        </div>
      </div>
    </PageShell>
  );
}
