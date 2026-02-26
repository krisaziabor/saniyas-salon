import Image from "next/image";
import Link from "next/link";

export default function Thanks() {
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
          <div className="max-w-4xl mx-auto">
            <div className="text-[#FFE4C0] space-y-2">
              <p className="font-bold uppercase">Deb Margolin</p>
              <p className="font-bold uppercase">Bryanna Kim</p>
              <p className="font-bold uppercase">Mark Dionne</p>
              <p className="font-bold uppercase">Pierson College</p>
              <p className="font-bold uppercase">Just Add Water</p>
              <p className="font-bold uppercase">South Asian Society</p>
              <p className="font-bold uppercase">House of Naan</p>
              <p className="font-bold uppercase">Red Hot Poker</p>
              <p className="font-bold uppercase">Yale Artist&rsquo;s Cabaret</p>
              <p className="font-bold uppercase">Audrey Kolker</p>
              <p className="font-bold uppercase">Andrea Wolfe</p>
              <p className="font-bold uppercase">Jack Wolfe Lipsey</p>
              <p className="font-bold uppercase">Kirk Lipsey</p>
              <p className="font-bold uppercase">Jesse Nevins</p>
              <p className="font-bold uppercase">Brian Meacham</p>
              <p className="font-bold uppercase">The Sharif-Hyders</p>
              <p className="font-bold uppercase">Eli Osei</p>
              <p className="font-bold uppercase">Anouk Yeh</p>
              <p className="font-bold uppercase">Mandy Zhang</p>
              <p className="font-bold uppercase">Yashodhara Duddela</p>
              <p className="font-bold uppercase">Venkat Eragam</p>
              <p className="font-bold uppercase">Jayanth Eragam</p>
              <p className="font-bold uppercase">Tahira Haroon</p>
              <p className="font-bold uppercase">Samantha Liu</p>
              <p className="font-bold uppercase">The Micros</p>
              <p className="font-bold uppercase">The Village</p>
              <p className="font-bold uppercase">Kris Aziabor</p>
              <p className="font-bold uppercase">Saniya Mishra</p>
              <p className="font-bold uppercase">Maya Molina</p>
              <p className="font-bold uppercase">Dhruv Bhalla</p>
              <p className="font-bold uppercase">Malika El Aliani</p>
              <p className="font-bold uppercase">Sathvik Nair</p>
              <p className="font-bold uppercase">Abby Asmuth</p>
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
              <Link href="/cast" className="hover:opacity-70 transition-opacity">
                Meet The Cast
              </Link>
            </li>
            <li>
              <Link href="/notes" className="hover:opacity-70 transition-opacity">
                Playwright+Directors Notes
              </Link>
            </li>
            <li>
              <Link
                href="/thanks"
                className="hover:opacity-70 transition-opacity"
                style={{ color: "#EEB363" }}
              >
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
