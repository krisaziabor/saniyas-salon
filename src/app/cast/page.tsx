"use client";

import PageShell from "@/components/PageShell";
import { castMembers } from "@/data/cast";
import { useState } from "react";

export default function Cast() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <PageShell pathname="/cast">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Cast List */}
        <div className="text-[#EEB363]">
          <div className="space-y-2">
            {castMembers.map((member, index) => (
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
                  {member.character}
                </p>
                <p
                  className="font-semibold"
                  style={{
                    color: selectedIndex === index ? "rgba(238, 179, 99, 0.5)" : undefined
                  }}
                >
                  {member.actor}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Section */}
        <div className="text-[#EEB363] mt-8 lg:mt-0">
          <p className="leading-snug">{castMembers[selectedIndex].bio}</p>
        </div>
      </div>
    </PageShell>
  );
}
