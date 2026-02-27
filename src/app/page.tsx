import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell pathname="/">
      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Synopsis Column */}
        <div className="text-[#FFE4C0]">
          <h2
            className="text-sm font-bold mb-4 uppercase opacity-80"
            style={{ fontFamily: "var(--font-diatype)", color: "#EEB363" }}
          >
            Synopsis
          </h2>
          <p className="leading-snug w-full lg:w-1/2">
            In suburban Georgia, Ritu runs a waxing salon while raising her teenage daughter, Saniya. As customers, neighbors, and love interests drift in and out, the salon becomes a crossroads of love and hurt for the brown women who enter it. When Saniya begins to question the beauty rituals her mother depends on, both women must ask what legacies they&apos;re willing to keep— and what they&apos;re ready to leave behind.
          </p>
        </div>

        {/* Cast List Column (2-column layout within) */}
        <div className="text-[#FFE4C0]">
          <h2
            className="text-sm font-bold mb-4 uppercase opacity-80"
            style={{ fontFamily: "var(--font-diatype)", color: "#EEB363" }}
          >
            Cast
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-x-6">
              <p>RITU</p>
              <p className="font-semibold">LEILA HYDER</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>SANIYA</p>
              <p className="font-semibold">ZOYA HAQ</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>GEETHIKA</p>
              <p className="font-semibold">BAANI KAUR</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>HEMA</p>
              <p className="font-semibold">IMANE BOU-SABOUN</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>CHANDRA</p>
              <p className="font-semibold">SHUBHAN MEHTA</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>MAITREYI/KAVYA</p>
              <p className="font-semibold">KATYA AGRAWAL</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>MEERA</p>
              <p className="font-semibold">DHRITI GUPTA</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>SHERRY</p>
              <p className="font-semibold">JULIA WESTON</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>GEORGE</p>
              <p className="font-semibold">JOHN COLBERT</p>
            </div>
          </div>
        </div>

        {/* Crew List Column (2-column layout within) */}
        <div className="text-[#FFE4C0]">
          <h2
            className="text-sm font-bold mb-4 uppercase opacity-80"
            style={{ fontFamily: "var(--font-diatype)", color: "#EEB363" }}
          >
            Crew
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-x-6">
              <p>PLAYWRIGHT</p>
              <p className="font-semibold">AANIKA ERAGAM</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>DIRECTOR</p>
              <p className="font-semibold">EDIE WOLFE LIPSEY</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>ASSISTANT DIRECTOR</p>
              <p className="font-semibold">AANIKA ERAGAM</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>STAGE MANAGER</p>
              <p className="font-semibold">LILLY PRICE</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>PRODUCER</p>
              <p className="font-semibold">VICTORIA MNATSAKANYAN</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>SET DESIGNER</p>
              <p className="font-semibold">EDIE WOLFE LIPSEY</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>PROPS DESIGNER</p>
              <p className="font-semibold">ADELL ATESHIM</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>SOUND DESIGNER</p>
              <p className="font-semibold">KEERTAN VENKATESH</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>LIGHTING DESIGNER</p>
              <p className="font-semibold">DHRUV BHALLA</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>LIGHTING DESIGNER</p>
              <p className="font-semibold">E WENTZEL</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>COSTUME DESIGNER</p>
              <p className="font-semibold">KAMINI PURUSHOTHAMAN</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>ASSISTANT COSTUME DESIGNER</p>
              <p className="font-semibold">KAVYA GUPTA</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>GRAPHIC DESIGNER</p>
              <p className="font-semibold">MATEO FELIX CASTILLO</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>GRAPHIC DESIGNER</p>
              <p className="font-semibold">KRIS AZIABOR</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>CHOREOGRAPHER</p>
              <p className="font-semibold">KAVYA GUPTA</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>ASSISTANT STAGE MANAGER</p>
              <p className="font-semibold">DEVIN WONG</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>ASSISTANT PRODUCER</p>
              <p className="font-semibold">MURTAZA KITABWALLA</p>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <p>ASSISTANT PRODUCER</p>
              <p className="font-semibold">MAYA MOLINA</p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
