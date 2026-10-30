const info = [
  { text: "About Me", style: "bg-gray-200" },

];

export default function About() {
  return (
    <div className="p-4">
      {info.map((item, index) => (
        <div key={index} className={`p-2 ${item.style}`}>
          {item.text}
        </div>
      ))}
    </div>
  );
}       
