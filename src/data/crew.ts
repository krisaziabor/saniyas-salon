export type CrewMember = {
  role: string;
  name: string;
  /** Omitted when no biography is available yet. */
  bio?: string;
};

export type CrewMemberWithBio = CrewMember & { bio: string };

function hasCrewBio(member: CrewMember): member is CrewMemberWithBio {
  return Boolean(member.bio?.trim());
}

export const crewMembers: CrewMember[] = [
  {
    role: "PLAYWRIGHT",
    name: "AARON MAGLOIRE",
    bio: "Aaron Magloire is from Queens, and is a second-year MFA Playwriting candidate at the David Geffen School of Drama. He sends his thanks to this entire incredible team, especially Thomas, and, as always, to his mother.",
  },
  {
    role: "DIRECTOR",
    name: "EMILIANO CÁCERES MANZANO",
    bio: "Emiliano Cáceres Manzano directs Austria of Rome.",
  },
  {
    role: "PRODUCER",
    name: "GBEMIGA SALU",
    bio: "Gbemiga Salu (he/him, Producer) is grateful to Victoria for being the best co-producer ever, and to the entire Austria of Rome team for making his first time producing a show at Yale so much fun!",
  },
  {
    role: "PRODUCER",
    name: "VICTORIA MNATSAKANYAN",
    bio: "Victoria has been to both Austria and Rome, but neither quite compare to working with this phenomenal team.",
  },
  {
    role: "STAGE MANAGER",
    name: "JACK DOZIER",
    bio: "Jack Dozier (Stage Manager) comes to Austria of Rome as a first-time stage manager. Jack has served as a director (Conversations Après un Enterrement), producer (Merrily We Roll Along), and through a variety of assistant and associate-level roles (Skeleton Crew, Orlando, Exclamation Point and an Act Without Words, and The 25th Putnam County Spelling Bee). He is studying towards a Bachelor's and Master's in Political Science, with a concentration in American Politics, and authors a biannual, national public opinion poll on young adults' political attitudes: the Yale Youth Poll. Jack is a junior in Saybrook College from North Garden, VA, and will produce the 2026 Yale Dramat Commencement Musical, Mean Girls.",
  },
  {
    role: "DRAMATURG",
    name: "MIA VAN DELOO",
    bio: "Mia Van Deloo is a second-year M.F.A. candidate in Dramaturgy and Dramatic Criticism at the David Geffen School of Drama where she is a Managing Editor for Theater magazine, the Associate Managing Director for the Yale Cabaret, and a Digital Marketing Assistant for Yale Repertory Theatre. Before coming to Yale, Mia worked at La Jolla Playhouse in various departments including Marketing, Artistic, and Front of House and was the Assistant Dramaturg on The Untitled Unauthorized Hunter S. Thompson Musical. She was most recently the Yale Fellow at Berkeley Repertory Theatre's Ground Floor Summer Residency Lab. Mia is originally from the San Francisco Bay Area and holds a B.A. in Theatre and History from the University of California, San Diego.",
  },
  {
    role: "SET DESIGNER",
    name: "KAREN LOEWY MOVILLA",
    bio: "Karen Loewy Movilla she/her/ella is a Colombian multi-hyphenated artist and set designer. She received her bachelor's degree in Film and T.V. from Boston University, and is graduating with an M.F.A from David Geffen School of Drama at Yale.\n\nHer recent design credit include Spunk (Yale Repertory Theatre), Macbeth (DGSD), Kilele (DGSD), Aya Ogawa's Meat Suit (Mercury Lounge), Nani (Yale Cabaret), Twink Death (Yale Cabaret), New England Summer Storms (Columbia University), Our Bodies like Dams (Mabou Mines, The Brick), and The Night Alive (Chain Theatre). Select film credits: August at Twenty-Two (dir. Sophia Castuera), And Along Came Lily (dir. Danielle Hope Diamond).",
  },
  {
    role: "COSTUME DESIGNER",
    name: "ISABELLE RUPPE",
  },
  {
    role: "PROPS DESIGNER",
    name: "ANGELICA PERUZZI",
  },
  {
    role: "SOUND DESIGNER",
    name: "DOROTHY HA",
    bio: "Dorothy Ha (Sound Designer, she/her) is a sophomore majoring in History of Art. She's very grateful to have worked on this wonderful production, with an equally wonderful team.",
  },
  {
    role: "LIGHTING DESIGNER",
    name: "DORA FIELDS",
    bio: "Dora Fields (Lighting Designer) is a first-year in Hopper College and is excited to be designing lights for Austria of Rome. At Yale, she served as Lighting Designer for Skeleton Crew, Machinal, and Arcadia, and has assisted with lighting on several other productions. She is grateful to the Austria of Rome team for their collaboration and support.",
  },
  {
    role: "GRAPHIC DESIGNER",
    name: "MATEO FELIX CASTILLO",
  },
  {
    role: "GRAPHIC DESIGNER",
    name: "KRISTOPHER AZIABOR",
  },
  {
    role: "TECHNICAL DIRECTOR",
    name: "DHRUV BALLA",
  },
];

/** Full credits on Home; Meet the Crew page only lists people with a bio. */
export const crewMembersWithBio: CrewMemberWithBio[] = crewMembers.filter(hasCrewBio);
