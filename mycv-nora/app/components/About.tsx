const info = [
  { text: "About Me", style: "bg-gray-200" },

];

export default function About() {
  return (
    <section id="om-meg" className="scroll-mt-24 py-20">
      <h2 className="text-4xl font-bold">Om meg</h2>
      <div className="p-4">
        {info.map((item, index) => (
          <div key={index} className={`p-2 ${item.style}`}>
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
}       
