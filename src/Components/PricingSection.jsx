import React from "react";

export default function PricingSection() {

  const prices = [
    {service: "Adults White Sneakers", price: "R70",},
    {service: "Adults Black Sneakers", price: "R55",},
    { service: "Adults Other Sneakers", price: "R60" },
    { service: "Adults Suede Sneakers", price: "R90" },
    { service: "Adults Nubuck Sneakers", price: "R80" },
    { service: "Kids White Sneakers", price: "R55" },
    { service: "Kids Black Sneakers", price: "R30" },
    { service: "Kids Other Sneakers", price: "R40" },
    { service: "Kids Suede Sneakers", price: "R70" },
    { service: "Kids Nubuck Sneakers", price: "R60" },
    { service: "Leather Boots", price: "R80" },
    { service: "Suede Boots", price: "R100" },
    { service: "Nubuck Boots", price: "R100" },
    { service: "Sole Unyellowing", price: "R100" },
    { service: "Color Restoration", price: "R130" },
    { service: "Collection & Delivery", price: "R100" }

  ];

  return (
    <section className="PricingSection">

      <h2 className="PricingTitle">
        Our Pricing
      </h2>
      <p className="PricingSubtitle">
        Affordable premium sneaker care services
      </p>

      {/* ONLY 5 APPEALING IMAGES */}
      <div className="PricingGallery">
        <img src="img17.jpg" alt="" />
        <img src="img16.jpg" alt="" />
        <img src="img13.jpg" alt="" />
        <img src="img18.jpg" alt="" />
        <img src="img14.jpg" alt="" />
      </div>


      <div className="PricingGrid">

        {prices.map((item, index) => (
          <div className="PriceCard" key={index}>

            <h3>{item.service}</h3>

            <p>{item.price}</p>

          </div>
        ))}

      </div>

    </section>
  );
}