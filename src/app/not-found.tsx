import Link from "next/link";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ff32]";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#111311] px-5 py-16 text-[#f4f5ed] selection:bg-[#c8ff32] selection:text-[#111311]">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-[#c8ff32]/10 blur-[120px]" />

      <section className="relative z-10 w-full max-w-3xl border border-white/10 bg-[#191c19]/95 p-8 sm:p-12 lg:p-16" aria-labelledby="not-found-heading">
        <p className="text-[clamp(6rem,22vw,13rem)] leading-[0.72] font-black tracking-[-0.08em] text-[#c8ff32]">
          404
        </p>
        <h1 id="not-found-heading" className="mt-10 text-4xl font-black tracking-[-0.04em] uppercase sm:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
          The page you were looking for is unavailable. Return to the coaching concept
          homepage to keep exploring.
        </p>
        <Link
          href="/"
          className={`mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-[#c8ff32] px-7 text-sm font-extrabold text-[#111311] transition-colors hover:bg-[#dcff7a] ${focusRing}`}
        >
          Back to Home <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
