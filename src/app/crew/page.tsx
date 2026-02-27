"use client";

import PageShell from "@/components/PageShell";
import { useState } from "react";

const crewMembers = [
  {
    role: "PLAYWRIGHT & ASST DIRECTOR",
    name: "AANIKA ERAGAM",
    bio: "Aanika Eragam is a senior English major from Alpharetta, GA. Outside of Saniya’s Salon, her other writing credits include her thesis play, which was in the Yale Playwrights Festival last weekend.  She loves plays because they’re created in community; she’s very grateful for hers — the family, friends, professors, and mentors whom she writes towards."
  },
  {
    role: "DIRECTOR & SET DESIGNER",
    name: "EDIE WOLFE LIPSEY",
    bio: "Edie is a senior double majoring in Humanities and Studio Art. She's worked on many other productions as a set designer, producer, and assistant director, and is so grateful to have directed this brilliant show. Aaanika, cast, crew, everyone--I love you guys and am so, so proud of all of you. Thank you!"
  },
  {
    role: "STAGE MANAGER",
    name: "LILLY PRICE",
    bio: "Thank you to everyone who worked on this show! It was such a pleasure and I’ve learned so much from everybody."
  },
  {
    role: "PRODUCER",
    name: "VICTORIA MNATSAKANYAN",
    bio: "Victoria is a junior at Yale who mostly spends her time in various theatres on campus. She extends so much love to Aanika and Edie for inviting her to be part of an immensely special project."
  },
  {
    role: "LIGHTING DESIGNER",
    name: "E WENTZEL",
    bio: "Elio is an enormous fan of Saniya’s Salon and all the wonderful people they have met through it. Zey especially give flowers to Aanika for being a great friend through all of Yale and an incredible writer to boot!"
  },
  {
    role: "COSTUME DESIGNER",
    name: "KAMINI PURUSHOTHAMAN",
    bio: "Kamini Purushothaman is a junior majoring in Archaeology and Anthropology with a focus on South Asia. This is her first time working on a show at Yale, and she has enjoyed helping the cast and production team to bring it to life. She'd like to thank her co-costume designer, Kavya Gupta. "
  },
  {
    role: "ASST STAGE MANAGER",
    name: "DEVIN WONG",
    bio: "Shoutout Aanika 🗣️"
  },
  {
    role: "ASSISTANT PRODUCER",
    name: "MURTAZA KITABWALLA",
    bio: "Murtaza is a double major in Economics and History at Yale who served as the Assistant Producer for Saniya’s Salon. He’s had a blast bridging the Yale community with local South Asian businesses, finding it incredibly rewarding to foster these local connections while supporting such a talented, majority South Asian crew."
  },
  {
    role: "ASSISTANT PRODUCER",
    name: "MAYA MOLINA",
    bio: "Maya Molina (Assistant Producer) is a sophomore in JE majoring in environmental studies. Outside of class, she dances on Yale Jashan Bhangra with Kavya, Murtaza & Dhriti, and is the Yale Dramatic Association's production officer. Past credits include Miss Molly (Producer), The 25th Annual Putnam County Spelling Bee (Technical Director), and Intimate Apparel (Production Electrician)."
  },
  {
    role: "ASST COSTUME DESIGNER & CHOREOGRAPHER",
    name: "KAVYA GUPTA",
    bio: "Kavya is a Junior in Benjamin Franklin College studying Molecular Biology and is the Assitant Costume designer and Dance Choreographer for Saniya's Salon. On campus she is also a member of the Indian traditional folk dance team, Yale Jashan Bhangra and loves to bake in her free time :)"
  }
];

export default function Crew() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <PageShell pathname="/crew">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="text-[#FFE4C0]">
          <div className="space-y-2">
            {crewMembers.map((member, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-x-3 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => setSelectedIndex(index)}
              >
                <p
                  style={{
                    color: selectedIndex === index ? "#EEB363" : undefined
                  }}
                >
                  {member.role}
                </p>
                <p
                  className="font-semibold"
                  style={{
                    color: selectedIndex === index ? "#EEB363" : undefined
                  }}
                >
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[#FFE4C0] mt-8 lg:mt-0">
          <p className="leading-snug">{crewMembers[selectedIndex].bio}</p>
        </div>
      </div>
    </PageShell>
  );
}
