const jobs = [
  {
    company: "COOP EXTRA",
    role: "Låseansvarlig",
    place: "Bergen storsenter, Bergen",
    period: "April 2024 – d.d",
    tasks: ["Kasseekspeditør", "Varehåndtering", "Låseansvarlig"],
    color: "border-teal",
  },
  {
    company: "ENVIDAN",
    role: "Assistent",
    place: "Avd. Sandefjord, Vestfold og Telemark",
    period: "Mars 2023 – Juni 2025",
    tasks: ["Markedsføring", "Ansvarlig for sosiale medier", "Oppdatering av nettside i WordPress"],
    color: "border-orange",
  },
  {
    company: "MCDONALD'S NORGE",
    role: "Kjøkkensjef",
    place: "Foksrød, Sandefjord",
    period: "Juni 2022 – Juni 2025",
    tasks: ["Kjøkkensjef", "Kundebehandling", "Restaurantmedarbeider"],
    color: "border-rose",
  },
  {
    company: "JYSK",
    role: "Ekspeditør",
    place: "Larvik, Vestfold og Telemark",
    period: "Juli 2020 – August 2022",
    tasks: ["Lageroversikt", "Kundebehandling", "Kasse"],
    color: "border-lime",
  },
];

export default function Experience() {
  return (
    <section id="erfaring" className="scroll-mt-24 py-20">
      <h2 className="font-heading text-5xl">Erfaring</h2>
      <span className="mt-3 block h-2 w-24 rounded-full bg-teal" />
      <div className="mt-10 space-y-6">
        {jobs.map((j) => (
          <article key={j.company} className={`${j.color} border-l-8 bg-white/60 p-6`}>
            <h3 className="font-heading text-2xl">{j.company} – {j.role}</h3>
            <p className="text-sm opacity-80">{j.place}</p>
            <p className="mt-1 font-mono text-sm">{j.period}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {j.tasks.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
