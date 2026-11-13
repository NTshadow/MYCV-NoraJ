const contactInfo = [
  { label: "E-post", value: "nora@example.com" },
  { label: "Telefon", value: "+47 123 45 678" },
  { label: "LinkedIn", value: "linkedin.com/in/norajellum" },
  { label: "GitHub", value: "github.com/norajellum" },
  { label: "Discord", value: "discord.com/Shadow1"}
]

export default function Contact() {
  return (
    <section id="ta-kontakt" className="scroll-mt-24 py-20">
        <h2 className="text-4xl font-bold">Ta kontakt!</h2>
        {contactInfo.map((item) => (
            <div key={item.label} className="p-2"> 
                <span className="font-bold">{item.label}</span> {item.value}
            </div>
        ))}
    </section>
  );
}       
