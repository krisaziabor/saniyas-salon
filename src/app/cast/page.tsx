"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const castMembers = [
  {
    character: "RITU",
    actor: "LEILA HYDER",
    bio: "Leila Hyder (Ritu) is a sophomore in Davenport majoring in Ethnicity, Race, and Migration. At Yale, she has previously acted in \"Dance Nation,\" \"Gloria,\" \"Peachy: a sort of chekhovian traumedy,\" \"The Shape of Things,\" and will perform in the musical \"Once\" this April. Outside of theater, Leila is is in the musical improv group JAW  is the Co-Cultural Chair on the SAS board. She is infinitely grateful to this cast and crew, but especially to Aanika and Edie, for their talent in playwriting and directing, for pushing her deep into this role, and for being wonderful friends. Of course, Leila wouldn't be here without the most supportive friends and her loving family."
  },
  {
    character: "SANIYA",
    actor: "ZOYA HAQ",
    bio: "Zoya is a junior in Saybrook studying English and American Studies. Saniya's Salon is her first time on the stage, but she loves writing and storytelling in a wide array of forms for the Yale Daily News, the New Journal, and the New Haven Independent."
  },
  {
    character: "GEETHIKA",
    actor: "BAANI KAUR",
    bio: "Baani Kaur's mission is to connect cultures through art. She is an actor, writer, and director of films and commercials infused with comedy and activism. Baani currently studies at NYU Tisch and was a Rickshaw 2025 Feature Lab writing fellow. She loves making people smile and collaborating with creatives to create art that sparks conversations and ignites change."
  },
  {
    character: "HEMA",
    actor: "IMANE BOU-SABOUN",
    bio: "Imane attended acting school in her teens trained by Italian stage actor Andrea Lupo with the theatre company ‘Teatro delle Temperie’ who she thanks for opening up a world to her. In 2017 she joined the ADC theatre at Cambridge University and co-wrote and starred in a Footlights sketch show in 2019, ‘Second Generation: Integrated’. Shortly thereafter she starred in another show, ‘The Djinns of the Eidgah’ staged at the Edinburgh Fringe Festival of the same year. She joined Yale in 2025 and hopes to take part in many more plays."
  },
  {
    character: "CHANDRA",
    actor: "SHUBHAN MEHTA",
    bio: "Shubhan Mehta is a freshman in Silliman College. Saniya’s Salon is his first theater experience at Yale, and he hopes to help bring to life this wonderfully written story."
  },
  {
    character: "MAITREYI/KAVYA",
    actor: "KATYA AGRAWAL",
    bio: "Katya Agrawal is a painter, a theater maker, and a writer---currently preoccupied with idea of slow noticing. Among other theater endeavors, she directed Dance Nation and set designed Exclamation Point. Thank you Aanika and Edie for the care you put into this show!"
  },
  {
    character: "MEERA",
    actor: "DHRITI GUPTA",
    bio: "Pre-med student making her acting debut. Grateful to Saniya Mishra for encouraging me to audition, and to Aanika Eragam and Edie Lipsey for their constant support throughout this journey."
  },
  {
    character: "SHERRY",
    actor: "JULIA WESTON",
    bio: "Julia Weston is a sophomore and Theatre Studies major in Ezra Stiles hailing all the way from Hartford, Connecticut. Previous Yale productions include The Seagull (Polina), Orlando (Chorus), Skeleton Crew (Shanita), Machinal (Young Woman), as the short films including Tides, Paper Dreams, Trashley, Break, Nuh Uh, Cleo I/II, and St. George. Next semester, she will be studying abroad with the Royal Academy of Dramatic Art in London."
  },
  {
    character: "GEORGE",
    actor: "JOHN COLBERT",
    bio: "John is, among other things, a senior at Yale studying the Humanities. He is an actor, musician, and the recipient of many haircuts that went totally normally and were not weird or upsetting at all. It is well known that John is a very pleasant person to have in a hair salon; the cosmetology community raves about him!"
  }
];

export default function Cast() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Cast List */}
            <div className="text-[#FFE4C0]">
              <div className="space-y-2">
                {castMembers.map((member, index) => (
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
                      {member.character}
                    </p>
                    <p
                      className="font-semibold"
                      style={{
                        color: selectedIndex === index ? "#EEB363" : undefined
                      }}
                    >
                      {member.actor}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio Section */}
            <div className="text-[#FFE4C0] mt-8 lg:mt-0">
              <p className="leading-snug">{castMembers[selectedIndex].bio}</p>
            </div>
          </div>
        </main>

        {/* Navigation Menu */}
        <nav className="px-4 sm:px-6 lg:px-8 py-6">
          <ul
            className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 text-[#FFE4C0] uppercase"
            style={{ fontFamily: "var(--font-diatype)" }}
          >
            <li>
              <Link href="/" className="hover:opacity-70 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cast"
                className="hover:opacity-70 transition-opacity"
                style={{ color: "#EEB363" }}
              >
                Meet The Cast
              </Link>
            </li>
            <li>
              <Link href="/notes" className="hover:opacity-70 transition-opacity">
                Playwright+Directors Notes
              </Link>
            </li>
            <li>
              <Link href="/thanks" className="hover:opacity-70 transition-opacity">
                Special Thanks
              </Link>
            </li>
          </ul>
        </nav>

        {/* Title SVG at Bottom */}
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="w-full max-w-full">
            <Image
              src="/titlesvg.svg"
              alt="Saniya's Salon"
              width={1319}
              height={120}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
