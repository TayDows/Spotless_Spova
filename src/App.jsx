import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import RegisterSection from "./components/RegisterSection";
import LoginSection from "./components/LoginSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import ContactDetails from "./components/ContactDetails";
import CustomerDashboard from "./components/CustomerDashboard";
import ProviderDashboard from "./components/ProviderDashboard";

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