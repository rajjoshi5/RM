// components/Services.js
import React from 'react';
import { Camera, Users, Truck, BarChart } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature 
          icon={Camera}
          title="Quality Sourcing"
          description="We source niche handloom cotton fabrics from skilled artisans across multiple states."
        />
        <Feature 
          icon={Users}
          title="Vendor Network"
          description="Connect with our extensive network of 75+ vendors for diverse textile needs."
        />
        <Feature 
          icon={Truck}
          title="Retailer Connections"
          description="We facilitate seamless transactions between manufacturers and 100+ retailers in South India."
        />
        <Feature 
          icon={BarChart}
          title="Market Intelligence"
          description="Gain valuable insights on market trends to stay ahead in the textile industry."
        />
      </div>
    </div>
  </section>
);

export default Services;