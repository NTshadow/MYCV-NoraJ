import Image from "next/image";


// `file` = filnavnet i public/svg-logos/, `label` = teksten som vises under logoen.
type Skill = { file: string; label: string };

const code: Skill[] = [
  { file: "icons8-python.svg", label: "Python" },
  { file: "icons8-typescript.svg", label: "TypeScript" },
  { file: "icons8-java.svg", label: "Java" },
  { file: "icons8-kotlin.svg", label: "Kotlin" },
  { file: "icons8-swift.svg", label: "Swift" },
  { file: "icons8-html-5.svg", label: "HTML5" },
  { file: "icons8-css3.svg", label: "CSS" },
  { file: "icons8-javascript.svg", label: "JavaScript" },
  { file: "icons8-react.svg", label: "React" },
  { file: "icons8-sql.svg", label: "SQL" },
  { file: "icons8-linux.svg", label: "Linux" },
  // { file: "navn-på-filen.svg", label: "Tekst under logoen" },
];

const tools: Skill[] = [
    { file: "icons8-figma.svg", label: "Figma" },
    { file: "icons8-adobe-photoshop.svg", label: "Photoshop" },
    { file: "icons8-wordpress.svg", label: "WordPress" },
    { file: "icons8-intelij.svg", label: "IntelliJ" },
    { file: "icons8-vscode.svg", label: "Visual Studio Code" },
    { file: "icons8-Xcode.svg", label: "Xcode" },
];

const competence = [
  "Interaksjonsdesign/UX",
  "AI/maskinlæring",
  "Prosjektledelse",
  "Algoritmer og datastrukturer",
  "Flytende norsk og engelsk, muntlig og skriftlig",
];

function Grid({ title, items }: { title: string; items: Skill[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mt-10">
      <h3 className="mb-4 font-heading text-2xl">{title}</h3>
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5">
        {items.map(({ file, label }) => (
          <li key={file} className="flex flex-col items-center gap-2 rounded-xl bg-white/60 px-2 py-4">
            <Image src={`/svg-logos/${file}`} alt={label} width={48} height={48} className="h-12 w-12" />
            <span className="text-center font-mono text-xs">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="ferdigheter" className="scroll-mt-24 py-20">
      <h2 className="font-heading text-5xl">Ferdigheter</h2>
      <span className="mt-3 block h-2 w-24 rounded-full bg-lime" />
      <Grid title="mine kodespråk" items={code} />
      <Grid title="Mine verktøy " items={tools} />
      <div className="mt-10">
        <h3 className="mb-4 font-heading text-2xl"> Generell kompetanse</h3>
        <ul className="flex flex-wrap gap-3">
          {competence.map((c) => (
            <li key={c} className="rounded-full bg-teal px-5 py-2 text-sm text-black">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
