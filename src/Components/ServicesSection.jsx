import React from "react";

export default function ServicesSection() {

  const services = [
 {
      title: "Standard Deep Wash",
      icon: "👟",
      details: [
        "Full deep cleaning of the sneaker",
        "Midsole cleaning",
        "Lace cleaning",
        "Inside cleaning",
        "Deodorizing",
        "Basic revive / finishing",
        "Air drying & quality check",
      ],
    },
    {
      title: "Suede Cleaning",
      icon: "✨",
      details: [
        "Special suede-safe cleaning process",
        "Suede brushing & texture restoration",
        "Stain treatment",
        "Deodorizing",
        "Basic revive / finishing",
      ],
    },
    {
      title: "Nubuck Cleaning",
      icon: "🧼",
      details: [
        "Careful nubuck-safe cleaning",
        "Texture preservation",
        "Spot treatment",
        "Deodorizing",
        "Basic finishing",
      ],
    },
    {
      title: "Sole Unyellowing",
      icon: "⚪",
      details: [
        "Deep sole treatment",
        "Oxidation reduction",
        "Whitening process",
        "Final clean & polish",
      ],
    },
    {
      title: "Color Restoration",
      icon: "🎨",
      details: [
        "Color touch-up / restoration",
        "Faded area correction",
        "Sneaker repainting where needed",
        "Protective finishing",
      ],
    },
    {
      title: "Boot Cleaning",
      icon: "🥾",
      details: [
        "Deep exterior cleaning",
        "Sole cleaning",
        "Leather conditioning (for leather boots)",
        "Deodorizing",
        "Finishing treatment",
      ],
    },
  ];


  return (
    <section className="ServicesSection">

      <h2 className="ServicesTitle">
        Our Services
      </h2>

      <p className="ServicesSubtitle">
        Premium sneaker and boot care with professional attention to detail
      </p>

      <div className="ServicesGrid">
        {services.map((service, index) => (
          <div className="ServiceCard" key={index}>
            <h3>
              <span>{service.icon}</span> {service.title}
            </h3>

            <ul>
              {service.details.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

  );
}