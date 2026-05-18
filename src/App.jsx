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
      {page === "customerDashboard" && <CustomerDashboard />}
      {page === "providerDashboard" && <ProviderDashboard />}
    
    </div>
    
  )
}

/* Register component */
function RegisterSection({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleRegister = () => {
    const user = { name, email, password, role };

    localStorage.setItem("spotlessUser", JSON.stringify(user));

    alert("Registered Successfully!");
    setPage("login");
  };

  return (
    <section className="RegisterSection">
      <div className="RegisterCard">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="provider">Service Provider</option>
        </select>

        <button onClick={handleRegister}>
          Register
        </button>
      </div>
    </section>
  );
}

/* Login component */
function LoginSection({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("spotlessUser"));

    if (
      savedUser &&
      email === savedUser.email &&
      password === savedUser.password
    ) {
      if (savedUser.role === "customer") {
        setPage("customerDashboard");
      } else {
        setPage("providerDashboard");
      }
    } else {
      alert("Wrong Login Details");
    }
  };

  return (
    <section className="LoginSection">
      <div className="LoginCard">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
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
        <img src="img17.jpg" alt="" />
        <img src="img16.jpg" alt="" />
        <img src="img13.jpg" alt="" />
        <img src="img18.jpg" alt="" />
        <img src="img14.jpg" alt="" />
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

/* CUSTOMER DASHBOARD */
function CustomerDashboard({ setPage }) {
  return (
    <div className="dashboard">
      <h1>Customer Dashboard</h1>

      <button className="card" onClick={() => setPage("bookCleaning")}>
        Book Shoe Cleaning
      </button>

      <button className="card" onClick={() => setPage("trackOrders")}>
        Track Orders
      </button>

      <button className="card" onClick={() => setPage("pricing")}>
        View Pricing
      </button>

      <button className="BackBtn" onClick={() => setPage("home")}>
        Back Home
      </button>
    </div>
  );
}

/* PROVIDER DASHBOARD */
function ProviderDashboard({ setPage }) {
  return (
    <div className="dashboard">
      <h1>Service Provider Dashboard</h1>

      <button className="card" onClick={() => setPage("pendingOrders")}>
        Pending Orders
      </button>

      <button className="card" onClick={() => setPage("pickupRequests")}>
        Pickup Requests
      </button>

      <button className="card" onClick={() => setPage("completedJobs")}>
        Completed Jobs
      </button>

      <button className="BackBtn" onClick={() => setPage("home")}>
        Back Home
      </button>
    </div>
  );
}

