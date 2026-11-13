import { text } from "stream/consumers";

const info = [
  { text: "Hei! Jeg heter Nora, jeg hadde lyst til å prøve meg på å lage en type portfolio nå som jeg er ferdig utdannet. Selvom den ikke er den mest fancy håper jeg den viser litt om hva jeg kan som utvikler. jeg er mest glad i kreativieten som kommer med teknologi og at det finnes i mange former og mulighetene er endeløse på hva du kan skape. ", style: "font-semibold text-2xl" },
  { text: "Jeg har erfaring med mange forskjellige kodespråk og digitale verktøy og vil gjerne lære meg flere. jeg syntes det er kjempe gøy og lære og utforskje nye ting.  ", style: "font-semibold text-2xl" },
  { text: "Mye av min motivasjon for design, frontend-teknologi og utvikling kommer fra et ønske om å forstå og være nyskjerrig på mennesker, jeg syntes det er spennende å få et lite innblikk i hvordan vi mennesker tenker og hva som gjør at vi liker en farge over den andre", style: "font-semibold text-2xl" },
  { text: "Derfor skal jeg fortsette å utforske og lære mer om disse emnene, og jeg håper å kunne bruke denne kunnskapen til å skape meningsfulle og brukervennlige løsninger.", style: "font-semibold text-2xl" }
];

export default function About() {
  return (
    <section id="om-meg" className="scroll-mt-24 py-20">
      <h2 className="font-heading text-5xl">Om meg</h2>
       <span className="mt-3 mb-5 block h-2 w-24 rounded-full bg-lime" />
          {info.map((item, index) => (
            <div key={index} className={` ${item.style}`}>
              {item.text}
            </div>
          ))}
    </section>
  );
}       
