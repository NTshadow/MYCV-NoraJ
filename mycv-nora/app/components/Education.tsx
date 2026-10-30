const schools = [
  {
    name: "Høyskolen Kristiania",
    place: "Bergen, Vestland",
    title: "Bachelor i informasjonsteknologi, frontend- og mobilutvikling",
    period: "August 2023 – Juni 2026",
    color: "border-rose",
  },
  {
    name: "Sandefjord videregående skole",
    place: "Sandefjord, Vestfold og Telemark",
    title: "Studiespesialisering, samfunnsfaglig",
    period: "August 2019 – Juni 2022",
    color: "border-teal",
  },
];

export default function Education() {
  return (
    <section id="utdanning" className="scroll-mt-24 py-20">
      <h2 className="font-heading text-5xl">Utdanning</h2>
      <span className="mt-3 block h-2 w-24 rounded-full bg-rose" />
      <div className="mt-10 space-y-6">
        {schools.map((s) => (
          <article key={s.name} className={`${s.color} border-l-8 bg-white/60 p-6`}>
            <h3 className="font-heading text-2xl">{s.name}</h3>
            <p className="text-sm opacity-80">{s.place}</p>
            <p className="mt-3">{s.title}</p>
            <p className="mt-1 font-mono text-sm">{s.period}</p>
          </article>
        ))}
      </div>
      <a
        href="https://github.com/past-exams-education"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block rounded-full bg-foreground px-6 py-2 font-mono text-sm text-white transition hover:brightness-125"
      >
        Tidligere prosjekter fra studiet på GitHub
      </a>
    </section>
  );
}
