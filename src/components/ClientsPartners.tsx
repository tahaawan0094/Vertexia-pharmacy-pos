const logos = [
  { name: "Aurelis", file: "astra.svg" },
  { name: "Lindholm", file: "blackwell.svg" },
  { name: "Taho", file: "flux.svg" },
  { name: "Wendrich", file: "numeriq.svg" },
  { name: "Obliqon", file: "quantum.svg" },
  { name: "Logisync", file: "vortex.svg" },
];

export default function ClientsPartners() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-600">Clients & Partners</h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Brands who trusted us to help shape their next chapter.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="w-32 h-12 flex items-center justify-center opacity-80">
              <img
                src={`/logos/${logo.file}`}
                alt={logo.name}
                className="max-h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
