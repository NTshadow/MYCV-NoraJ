import Image from "next/image";

type ContactItem = {
  file: string;
  label: string;
  href: string;
};

const contactInfo: ContactItem[] = [
  { file: "icons8-discord.svg", label: "Discord", href: "https://discord.com/users/DIN-ID" },
  { file: "icons8-github.svg", label: "GitHub", href: "https://github.com/norajellum" },
  { file: "icons8-linkedin.svg", label: "LinkedIn", href: "https://linkedin.com/in/norajellum" },
  { file: "icons8-gmail.svg", label: "E-post", href: "mailto:nora@example.com" },
];

export default function Contact() {
  return (
    <section id="ta-kontakt" className="scroll-mt-24 py-20">
      <h2 className="font-heading text-5xl">Ta kontakt!</h2>
      <span className="mt-3 mb-5 block h-2 w-24 rounded-full bg-lime" />

      <p className="max-w-prose leading-relaxed">
        Send en e-post om du lurer på noe, eller bare vil prate om noe.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        {contactInfo.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="rounded-2xl bg-white/50 p-4 transition hover:scale-110"
            {...(item.href.startsWith("http") && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            <Image src={`/${item.file}`} alt="" width={48} height={48} />
          </a>
        ))}
      </div>
    </section>
  );
}