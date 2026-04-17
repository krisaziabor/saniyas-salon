"use client";

import PageShell from "@/components/PageShell";
import { castMembers } from "@/data/cast";
import { useState } from "react";

export default function Cast() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <PageShell pathname="/cast">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-[0.8125rem]">
        <div className="text-aor-title">
          <div className="space-y-2">
            {castMembers.map((member, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-x-3 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => setSelectedIndex(index)}
              >
                <p
                  className="font-name"
                  style={{
                    color: selectedIndex === index ? "var(--aor-title-muted)" : undefined,
                  }}
                >
                  {member.character}
                </p>
                <p
                  className="font-name"
                  style={{
                    color: selectedIndex === index ? "var(--aor-title-muted)" : undefined,
                  }}
                >
                  {member.actor}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="font-body text-aor-body mt-8 lg:mt-0">
          <p className="leading-snug whitespace-pre-line">{castMembers[selectedIndex].bio}</p>
        </div>
      </div>
    </PageShell>
  );
}
