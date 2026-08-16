const navigation = ["Coaching", "Method", "Results", "About"];

const principles = [
  {
    number: "01",
    title: "Personalized Training",
    description: "Every session is built around your body, goals, and experience.",
  },
  {
    number: "02",
    title: "Sustainable Progress",
    description: "A clear, progressive plan designed for results that last.",
  },
  {
    number: "03",
    title: "Real Accountability",
    description: "Focused coaching, honest feedback, and support at every step.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#111311] text-[#f4f5ed] selection:bg-[#c8ff32] selection:text-[#111311]">
      <header className="relative z-20 border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Andrei Stoica Coaching home">
            <span className="grid size-9 place-items-center bg-[#c8ff32] text-sm font-black text-[#111311] transition-transform group-hover:-rotate-6">
              AS
            </span>
            <span className="text-sm font-semibold tracking-[0.15em] uppercase">
              Andrei Stoica <span className="hidden text-white/50 sm:inline">/ Coaching</span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-white/65 transition-colors hover:text-[#c8ff32] focus-visible:text-[#c8ff32] focus-visible:outline-none"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#coaching"
            className="hidden border border-white/25 px-5 py-2.5 text-xs font-bold tracking-[0.14em] uppercase transition-colors hover:border-[#c8ff32] hover:text-[#c8ff32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ff32] sm:block"
          >
            Work with me
          </a>
        </div>
      </header>

      <main id="top">
        <section
          id="coaching"
          aria-labelledby="hero-heading"
          className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24"
        >
          <div className="pointer-events-none absolute top-0 left-[64%] hidden h-full w-px bg-white/10 lg:block" />
          <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-[#c8ff32]/10 blur-[120px]" />

          <div className="relative z-10">
            <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#c8ff32] uppercase sm:text-sm">
              <span className="h-px w-10 bg-[#c8ff32]" />
              1-to-1 personal training
            </p>
            <h1
              id="hero-heading"
              className="max-w-4xl text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.86] font-black tracking-[-0.065em] uppercase"
            >
              Build strength.
              <span className="mt-2 block text-[#c8ff32]">Earn confidence.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Structured, one-to-one coaching for people ready to train with purpose.
              Build lasting strength, move better, and become more capable—in and out
              of the gym.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:andrei@example.com?subject=Personal%20training%20enquiry"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#c8ff32] px-7 text-sm font-extrabold text-[#111311] transition-colors hover:bg-[#dcff7a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ff32]"
              >
                Start Your Transformation
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#method"
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/20 px-7 text-sm font-bold transition-colors hover:border-white/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ff32]"
              >
                See The Method
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside id="results" aria-label="Client performance results" className="relative lg:pl-12">
            <div className="relative min-h-[390px] overflow-hidden border border-white/10 bg-[#191c19] p-6 sm:min-h-[480px] sm:p-8">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="absolute -right-20 bottom-0 h-[80%] w-72 -skew-x-12 bg-[#c8ff32]" />
              <div className="absolute right-10 bottom-0 h-[58%] w-24 -skew-x-12 bg-[#111311]" />
              <div className="absolute right-28 bottom-0 h-[36%] w-16 -skew-x-12 border-l-2 border-[#111311]" />

              <div className="relative flex h-full min-h-[340px] flex-col justify-between sm:min-h-[416px]">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-bold tracking-[0.18em] text-white/50 uppercase">
                    Client performance
                  </p>
                  <span className="size-2 rounded-full bg-[#c8ff32] shadow-[0_0_18px_#c8ff32]" />
                </div>

                <div className="w-fit border border-white/15 bg-[#111311]/90 p-5 backdrop-blur sm:p-6">
                  <p className="text-5xl font-black tracking-[-0.05em] sm:text-6xl">+32%</p>
                  <p className="mt-1 text-xs font-bold tracking-[0.16em] text-[#c8ff32] uppercase">
                    Strength increase
                  </p>
                  <div className="mt-5 flex items-end gap-1" aria-hidden="true">
                    {[28, 38, 34, 52, 60, 72, 88].map((height, index) => (
                      <span
                        key={height}
                        className={index === 6 ? "w-4 bg-[#c8ff32]" : "w-4 bg-white/20"}
                        style={{ height: `${height / 2}px` }}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-white/40">Average over 12 weeks*</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="method" aria-labelledby="method-heading" className="border-y border-white/10 bg-[#151815]">
          <h2 id="method-heading" className="sr-only">The coaching method</h2>
          <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
            {principles.map((principle) => (
              <article key={principle.number} className="py-8 md:px-7 md:py-10 first:pl-0 last:pr-0">
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-xs font-bold text-[#c8ff32]">{principle.number}</span>
                  <div>
                    <h3 className="font-bold tracking-tight">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/50">{principle.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" aria-label="About Andrei Stoica Coaching" className="sr-only">
          Personal coaching by Andrei Stoica.
        </section>
      </main>
    </div>
  );
}
