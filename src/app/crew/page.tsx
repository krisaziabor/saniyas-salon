"use client";

import PageShell from "@/components/PageShell";
import { crewMembers } from "@/data/crew";
import { useState } from "react";

export default function Crew() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <PageShell pathname="/crew">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="text-[#EEB363]">
          <div className="space-y-2">
            {crewMembers.map((member, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-x-3 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => setSelectedIndex(index)}
              >
                <p
                  style={{
                    color: selectedIndex === index ? "rgba(238, 179, 99, 0.5)" : undefined
                  }}
                >
                  {member.role}
                </p>
                <p
                  className="font-semibold"
                  style={{
                    color: selectedIndex === index ? "rgba(238, 179, 99, 0.5)" : undefined
                  }}
                >
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[#EEB363] mt-8 lg:mt-0">
          <p className="leading-snug">{crewMembers[selectedIndex].bio}</p>
        </div>
      </div>
    </PageShell>
  );
}
