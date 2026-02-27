import PageShell from "@/components/PageShell";

export default function Notes() {
  return (
    <PageShell pathname="/notes">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Playwright Column */}
        <div className="text-[#FFE4C0]">
          <h2
            className="text-sm font-bold mb-4 uppercase opacity-80"
            style={{ fontFamily: "var(--font-diatype)", color: "#EEB363" }}
          >
            Aanika Eragam, Playwright
          </h2>
          <p className="leading-snug w-full lg:w-1/2">
            Saniya Salon and Spa is a small shop off of I-85 in suburban Georgia. It&rsquo;s right next to Costco, and the Patel Brothers, and the Indian OB-GYN. I&rsquo;ve been going there forever, like most of the women there. Once you find a good spot, it&rsquo;s hard to let go of it.
            <br /><br />
            I grew up, to great fortune, surrounded by South Asian women— my aunts and cousins and best friends from home are brown. Coming to Yale, a PWI, was a shift. Like Maitreyi, I was taking classes about postcolonialism, gender in South Asia, feminist theory. Theoretically, I was learning about liberation, about how the practices I&rsquo;d come to take as a fixture of life— threading, waxing, lasering your upper lip— weed in a colonial history that might be coming at the erasure of myself. Then how come, all of freshman year, terrified in a new city in a new town with barely anyone who looked like me, I only felt at home at the salon? I used to walk to the one by CVS—iBrow— after class, sink into the chair, and feel an ease I felt nowhere else.
            <br /><br />
            The salon is a place where you are seen, witting or not. You are rendered vulnerable— at times naked under a robe, offering yourself up to be hurt in the hopes of some kind of wholeness. It is painful, healing, you will likely catch a stray insult, and also be asked how you are, and you&rsquo;ll answer like you mean it. It is a place of all these things. Damned if you do, damned if you don&rsquo;t.
            <br /><br />
            &ldquo;What hurt do you want?&rdquo; Ritu asks Saniya. I think that&rsquo;s maybe all I have to offer. The choice. It&rsquo;s yours.
          </p>
        </div>

        {/* Thank You Column */}
        <div className="text-[#FFE4C0]">
          <h2
            className="text-sm font-bold mb-4 uppercase opacity-80"
            style={{ fontFamily: "var(--font-diatype)", color: "#EEB363" }}
          >
            Thank You
          </h2>
          <p className="leading-snug w-full lg:w-1/2">
            Thank you for coming to see this show. Thank you to Edie for letting me accost you at the Hopper dining hall with this crazy idea about this play I wrote you might not remember but it&rsquo;s senior year and I wanna do it but I don&rsquo;t know how. You are a talent, a joy, and most excitingly, now a great friend. Thank you to the best stage manager in the world LILLY PRICE, an angel from above and the most capable person I know. Thank you to Victoria for signing on to a dream and making it happen with verve and grace! Thank you to the incredible cast, some who I beseeched and some who have never acted and all who took a leap of faith— Zoya, Shubhan, Imane, Katya, Dhriti, Baani (all the way from New York!), John, Julia, and the stupendous LEILA HYDER. You are all so talented. I cannot wait to see what&rsquo;s next. These past few months have been the time of my life, and I hope we see each other again soon.
            <br /><br />
            — Aanika Emy love and gratitude to this cast, this crew––Lilly, my rock!––and to the brilliant Aanika Eragam. Thank you for writing this show, and for asking me to direct it. To the audience: thank you for coming, and I hope you love this play as much as I do.
            <br /><br />
            — Edie Lipsey
          </p>
        </div>
      </div>
    </PageShell>
  );
}
