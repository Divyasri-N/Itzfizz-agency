"use client";

export default function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "Modern and user-friendly UI/UX design",
    },
    {
      title: "Development",
      desc: "Fast and scalable web applications",
    },
    {
      title: "Branding",
      desc: "Create strong and memorable brand identity",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}