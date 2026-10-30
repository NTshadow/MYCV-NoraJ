const links = [
  { label: "Om meg", href: "#om-meg", color: "bg-orange" },
  { label: "Utdanning", href: "#utdanning", color: "bg-rose" },
  { label: "Erfaring", href: "#erfaring", color: "bg-teal" },
  { label: "Ferdigheter", href: "#ferdigheter", color: "bg-lime" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex justify-end px-6 py-4">
      <nav className="flex flex-wrap justify-end gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
           className={`${link.color} rounded-full px-6 py-2 font-mono text-sm text-black transition hover:brightness-110`}
           >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}