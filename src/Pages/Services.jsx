import ServiceCard from "../components/ServiceCard";
import React from "react";

const services = [
  { id: 1, title: "Web Development", desc: "Building responsive websites." },
  { id: 2, title: "UI/UX Design", desc: "Creative and user-friendly layouts." },
  { id: 3, title: "API Integration", desc: "Seamless backend connectivity." }
];

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <div className="service-list">
        {services.map(s => <ServiceCard key={s.id} title={s.title} desc={s.desc} />)}
      </div>
    </div>
  );
}
export default Services;
