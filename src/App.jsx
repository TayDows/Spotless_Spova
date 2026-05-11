import './App.css';
import React, { useState } from "react";


export default function SpotlessSpovaHome(){
  const [page, setPage] = useState("home");

  return (
  <div className='HomePage' id="Home">

      {/* DARK OVERLAY */}
      <div className="HeroOverlay"></div>

    <div className="TopRightAuth">
      <button className="LoginBtn" onClick={() => setPage("login")}>
        Login
      </button>

      <button className="RegisterBtn" onClick={() => setPage("register")}>
        Register
      </button>
    </div>

    <div className='Logo'>
        <img className='Logo_img' src="Logo.png" alt="Spotless_logo" />
        <h1 className='AppName'>Spotless Spova</h1>    
    </div>
      <nav className='Navbar'>
        <div className='Home'>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("services")}>Services</button>
          <button onClick={() => setPage("pricing")}>Pricing</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
      </nav>
    
     {page === "home" && (
      <section className='About'>
        <div className='AboutText'>
          <h2>About Spotless Spova</h2>
          <h4>You like them clean, we like them dirty</h4>
          <p>Spotless Spova is a premium sneaker cleaning and restoration brand proudly based in Sharon Park, Springs.
            <br />Built from a passion for sneaker culture and the importance of clean presentation, Spotless Spova was founded to give every pair a second life through expert care, restoration, and unmatched attention to detail.
            <br /> We specialize in professional sneaker care services including deep cleaning, suede and nubuck treatment, sole unyellowing, color restoration, and boot cleaning. 
            <br />From everyday footwear to your most prized pairs, each shoe is handled with precision, care, and premium techniques designed to restore its best look.
            <br />At Spotless Spova, we believe sneakers are more than just footwear — they represent confidence, identity, and lifestyle. That’s why our mission is to deliver convenient, reliable, and high-quality service that leaves every customer stepping out with confidence.
            <br />We proudly service:
        <ul>
            <li>Adults: Sizes 5 – 13</li>
            <li>Kids: Sizes 1 – 4</li>
        </ul>
        </p>
        </div>

        <div className="AboutImage">
            <img
                src="img9.jpg"
                  alt="Sneaker cleaning"/>
        </div>
      </section>
     )}
           {/* OTHER PAGES */}
      {page === "register" && <RegisterSection />}    
      {page === "login" && <LoginSection />}
      {page === "services" && <ServicesSection />}
      {page === "pricing" && <PricingSection />}
      {page === "contact" && <ContactDetails />}
    
    </div>
    
  )
}

/* Register component */
function RegisterSection() {
  return (
    <section className="RegisterSection">
      <div className="RegisterCard">
        <h2>Create Account</h2>
        <p>Join Spotless Spova today</p>

        <div className="InputGroup">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter full name" />
        </div>

        <div className="InputGroup">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter email address" />
        </div>

        <div className="InputGroup">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Enter phone number" />
        </div>

        <div className="InputGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create password" />
        </div>

        <button className="RegisterButton">Create Account</button>
      </div>
    </section>
  );
}


/* Login Component */
function LoginSection() {
  return (
    <section className="LoginSection">
      <div className="LoginCard">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <div className="InputGroup">
          <label htmlFor="loginemail">Email Address</label>
          <input type="email" id="loginemail" placeholder="Enter email address" />
        </div>

        <div className="InputGroup">
          <label htmlFor="loginpassword">Password</label>
          <input type="password" id="loginpassword" placeholder="Enter password" />
        </div>

        <button className="LoginButton">Login</button>
      </div>
    </section>
  );
}


/* Contact details component */
function ContactDetails() {
  return (
    <section className="Contact_details" id="contact">
      <div className="ContactCard">
        <h6 className="HC_details">HOURS</h6>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>

        <h6 className="HC_details">CONTACT</h6>
        <p>Have questions? Reach out to us!</p>

        <p className="contact-item">
          📧 Email:{" "}
          <a href="mailto:info@spotlessspova.com">
            info@spotlessspova.com
          </a>
        </p>

        <p className="contact-item">📞 Phone: (068) 239-8407</p>

        <h6 className="HC_details">LOCATION</h6>
        <p>📍 5 Dekker Street, Sharon Park</p>

        <div className="MapContainer">
          <iframe
            title="Spotless Spova Location"
            src="https://www.google.com/maps?q=5%20Dekker%20Street%20Sharon%20Park%20Springs&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

/* Pricing Component */
function PricingSection() {
  const prices = [
    { service: "Adults White Sneakers", price: "R70" },
    { service: "Adults Black Sneakers", price: "R55" },
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
    <section className="PricingSection" id="pricing">

      <h2 className="PricingTitle">Our Pricing</h2>
      <p className="PricingSubtitle">
        Affordable premium sneaker care services
      </p>

      {/* ONLY 5 APPEALING IMAGES */}
      <div className="PricingGallery">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="" />
        <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772" alt="" />
        <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" alt="" />
        <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" alt="" />
        <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2" alt="" />
      </div>

      {/* PRICES */}
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

/* Services Component*/
function ServicesSection() {
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
    <section className="ServicesSection" id="services">
      <h2 className="ServicesTitle">Our Services</h2>
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

