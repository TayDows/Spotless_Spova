import "./App.css";
import React, { useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutSection from "./Components/AboutSection";
import RegisterSection from "./Components/RegisterSection";
import LoginSection from "./Components/LoginSection";
import ServicesSection from "./Components/ServicesSection";
import PricingSection from "./Components/PricingSection";
import ContactDetails from "./Components/ContactDetails";
import CustomerDashboard from "./Components/CustomerDashboard";
import ProviderDashboard from "./Components/ProviderDashboard";

export default function App() {
  const [page, setPage] = useState("home");
  
  return (
    <div className="HomePage">

      <Hero setPage={setPage} />

      <Navbar setPage={setPage} />

      {page === "home" && <AboutSection />}
      {page === "register" && <RegisterSection setPage={setPage} />}
      {page === "login" && <LoginSection setPage={setPage} />}
      {page === "services" && <ServicesSection />}
      {page === "pricing" && <PricingSection />}
      {page === "contact" && <ContactDetails />}
      {page === "customerDashboard" && (
        <CustomerDashboard setPage={setPage} />
      )}
      {page === "providerDashboard" && (
        <ProviderDashboard setPage={setPage} />
      )}

    </div>
  );
}
