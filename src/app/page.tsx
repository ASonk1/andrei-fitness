const navigation = [
  { label: "Coaching", href: "#coaching" },
  { label: "Method", href: "#method" },
  { label: "Progress", href: "#progress" },
  { label: "About", href: "#about" },
];

const coachingCards = [
  {
    number: "01",
    title: "Personalized Training",
    description:
      "Your sessions are shaped around your current ability, goals, movement, and schedule—not a generic template.",
  },
  {
    number: "02",
    title: "Strength & Technique",
    description:
      "Learn how to perform each movement with control while building practical, well-rounded strength.",
  },
  {
    number: "03",
    title: "Progress & Accountability",
    description:
      "Train with a clear plan, focused feedback, and consistent support to keep your effort moving in the right direction.",
  },
];

const methodSteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We start with your goals, training background, movement, and current capacity to establish the right starting point.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "A focused training plan turns that starting point into purposeful sessions with exercises selected for you.",
  },
  {
    number: "03",
    title: "Progress",
    description:
      "Your training evolves through regular review, thoughtful adjustments, and steady increases in challenge when appropriate.",
  },
];

const trackedAreas = [
  {
    label: "Training",
    detail: "Sessions, exercise selection, and workload stay organized around a clear plan.",
  },
  {
    label: "Technique",
    detail: "Movement quality is observed and coached with practical, specific feedback.",
  },
  {
    label: "Strength",
    detail: "Loads, repetitions, and exercise progressions are recorded over time.",
  },
  {
    label: "Consistency",
    detail: "Attendance and training rhythm help guide realistic adjustments to the plan.",
  },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ff32]";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#111311] text-[#f4f5ed] selection:bg-[#c8ff32] selection:text-[#111311]">
      <header className="relative z-20 border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className={`group flex items-center gap-3 ${focusRing}`}
            aria-label="Andrei Stoica Coaching home"
          >
            <span className="grid size-9 shrink-0 place-items-center bg-[#c8ff32] text-sm font-black text-[#111311] transition-transform group-hover:-rotate-6">
              AS
            </span>
            <span className="hidden text-sm font-semibold tracking-[0.15em] uppercase min-[390px]:block">
              Andrei Stoica <span className="hidden text-white/50 sm:inline">/ Coaching</span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-white/65 transition-colors hover:text-[#c8ff32] focus-visible:text-[#c8ff32] focus-visible:outline-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#coaching"
            className={`border border-[#c8ff32] px-4 py-2.5 text-xs font-bold tracking-[0.14em] text-[#c8ff32] uppercase transition-colors hover:bg-[#c8ff32] hover:text-[#111311] sm:px-5 ${focusRing}`}
          >
            View Services
          </a>
        </div>
      </header>

      <main id="top">
        <section
          aria-labelledby="hero-heading"
          className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24"
        >
          <div className="pointer-events-none absolute top-0 left-[64%] hidden h-full w-px bg-white/10 lg:block" />
          <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-[#c8ff32]/10 blur-[120px]" />

          <div className="relative z-10">
            <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#c8ff32] uppercase sm:text-sm">
              <span className="h-px w-10 bg-[#c8ff32]" />
              In-person 1-to-1 personal training
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
              Build strength, improve your technique, and create a consistent approach
              to training that fits your goals and experience.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#coaching"
                className={`inline-flex min-h-14 items-center justify-center gap-3 bg-[#c8ff32] px-7 text-sm font-extrabold text-[#111311] transition-colors hover:bg-[#dcff7a] ${focusRing}`}
              >
                Explore Coaching
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="#method"
                className={`inline-flex min-h-14 items-center justify-center gap-3 border border-white/20 px-7 text-sm font-bold transition-colors hover:border-white/60 hover:bg-white/5 ${focusRing}`}
              >
                See The Method
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside aria-label="One-to-one coaching focus" className="relative lg:pl-12">
            <div className="relative min-h-[390px] overflow-hidden border border-white/10 bg-[#191c19] p-6 sm:min-h-[480px] sm:p-8">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="absolute -right-20 bottom-0 h-[80%] w-72 -skew-x-12 bg-[#c8ff32]" />
              <div className="absolute right-10 bottom-0 h-[58%] w-24 -skew-x-12 bg-[#111311]" />
              <div className="absolute right-28 bottom-0 h-[36%] w-16 -skew-x-12 border-l-2 border-[#111311]" />

              <div className="relative flex h-full min-h-[340px] flex-col justify-between sm:min-h-[416px]">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-bold tracking-[0.18em] text-white/50 uppercase">
                    Coaching focus
                  </p>
                  <span className="size-2 rounded-full bg-[#c8ff32] shadow-[0_0_18px_#c8ff32]" />
                </div>

                <div className="w-fit max-w-xs border border-white/15 bg-[#111311]/95 p-5 backdrop-blur sm:p-6">
                  <p className="text-4xl font-black tracking-[-0.05em] uppercase sm:text-5xl">
                    1:1 Coaching
                  </p>
                  <p className="mt-2 text-sm font-bold tracking-[0.12em] text-[#c8ff32] uppercase">
                    Training built around you
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Coaching priorities">
                    {["Technique", "Strength", "Consistency"].map((item) => (
                      <li key={item} className="border border-white/15 px-3 py-2 text-xs font-semibold text-white/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="coaching" aria-labelledby="coaching-heading" className="scroll-mt-20 border-y border-white/10 bg-[#151815] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-6 border-b border-white/10 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.22em] text-[#c8ff32] uppercase">Coaching</p>
                <h2 id="coaching-heading" className="mt-4 text-4xl font-black tracking-[-0.04em] uppercase sm:text-5xl">
                  Coaching that fits the individual.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-white/55 md:justify-self-end">
                In-person sessions combine individual attention, considered programming,
                and direct feedback so you always understand what you are doing and why.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {coachingCards.map((card) => (
                <article key={card.number} className="group min-h-64 border border-white/10 bg-[#111311] p-6 transition-colors hover:border-[#c8ff32]/50 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#c8ff32]">{card.number}</span>
                    <span className="h-px w-10 bg-white/20 transition-all group-hover:w-16 group-hover:bg-[#c8ff32]" />
                  </div>
                  <h3 className="mt-16 text-xl font-bold tracking-tight">{card.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/50">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="method" aria-labelledby="method-heading" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.22em] text-[#c8ff32] uppercase">The method</p>
              <h2 id="method-heading" className="mt-4 text-4xl font-black tracking-[-0.04em] uppercase sm:text-5xl">
                A clear process. No guesswork.
              </h2>
            </div>

            <ol className="mt-14 grid border-t border-white/15 md:grid-cols-3 md:divide-x md:divide-white/10">
              {methodSteps.map((step) => (
                <li key={step.number} className="border-b border-white/10 py-8 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
                  <span className="text-6xl font-black tracking-[-0.06em] text-white/10">{step.number}</span>
                  <h3 className="mt-8 text-2xl font-bold text-[#c8ff32]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/55">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="progress" aria-labelledby="progress-heading" className="scroll-mt-20 border-y border-white/10 bg-[#c8ff32] py-20 text-[#111311] sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase">Progress</p>
              <h2 id="progress-heading" className="mt-4 text-4xl font-black tracking-[-0.04em] uppercase sm:text-5xl">
                What gets tracked gets understood.
              </h2>
              <p className="mt-6 max-w-lg leading-7 text-[#111311]/70">
                Progress is more than a single number. We keep a practical record of
                your training and use what we observe in each session to make informed
                decisions about what comes next.
              </p>
            </div>

            <dl className="grid gap-px overflow-hidden border border-[#111311]/20 bg-[#111311]/20 sm:grid-cols-2">
              {trackedAreas.map((area) => (
                <div key={area.label} className="bg-[#c8ff32] p-6 sm:p-8">
                  <dt className="flex items-center gap-3 text-lg font-black uppercase">
                    <span className="size-2 bg-[#111311]" aria-hidden="true" />
                    {area.label}
                  </dt>
                  <dd className="mt-4 text-sm leading-6 text-[#111311]/65">{area.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
            <div className="relative min-h-72 overflow-hidden border border-white/10 bg-[#191c19]" aria-hidden="true">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:40px_40px]" />
              <div className="absolute -bottom-24 -left-16 size-72 rounded-full border-[48px] border-[#c8ff32]" />
              <span className="absolute right-6 bottom-4 text-8xl font-black tracking-[-0.08em] text-white/10">AS</span>
            </div>

            <div className="lg:py-8">
              <p className="text-xs font-bold tracking-[0.22em] text-[#c8ff32] uppercase">About</p>
              <h2 id="about-heading" className="mt-4 text-4xl font-black tracking-[-0.04em] uppercase sm:text-5xl">
                Meet Andrei Stoica.
              </h2>
              <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-white/60">
                <p>
                  Andrei provides focused, one-to-one personal training. His coaching is
                  centered on purposeful practice, clear communication, and training that
                  respects the individual in front of him.
                </p>
                <p>
                  The aim is straightforward: help you understand your training, improve
                  how you move, build strength, and develop the consistency to keep going.
                  Every session has a reason, and every plan is adjusted to the person doing it.
                </p>
              </div>
              <a href="#coaching" className={`mt-9 inline-flex items-center gap-3 text-sm font-bold text-[#c8ff32] ${focusRing}`}>
                Explore the coaching approach <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="closing-heading" className="border-t border-white/10 bg-[#191c19]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.22em] text-[#c8ff32] uppercase">Train with intent</p>
                <h2 id="closing-heading" className="mt-4 max-w-4xl text-5xl leading-[0.95] font-black tracking-[-0.055em] uppercase sm:text-7xl">
                  READY TO TRAIN WITH PURPOSE?
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/55">
                  Discover a focused personal-training approach built around clear goals,
                  thoughtful progression, and consistent effort.
                </p>
              </div>
              <a
                href="#coaching"
                className={`inline-flex min-h-16 items-center justify-center gap-3 bg-[#c8ff32] px-8 text-sm font-extrabold text-[#111311] transition-colors hover:bg-[#dcff7a] lg:justify-self-end ${focusRing}`}
              >
                Explore Coaching <span aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0c0e0c]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center bg-[#c8ff32] text-xs font-black text-[#111311]">AS</span>
            <p className="font-semibold tracking-[0.12em] text-white/70 uppercase">Andrei Stoica Coaching</p>
          </div>
          <p>Personal training concept · Built for purposeful progress</p>
          <a href="#top" className={`font-bold text-white/60 transition-colors hover:text-[#c8ff32] ${focusRing}`}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
