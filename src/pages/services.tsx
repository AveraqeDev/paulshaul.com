import { NextPage } from "next";
import Head from "next/head";
import CallToAction from "../components/CallToAction";
import ServiceCard from "../components/ServiceCard";
import type { Service } from "../interfaces/Service";

const Services: NextPage = () => {
  const services: Service[] = [
    {
      name: "HAULING",
      details: [
        "Junk Removal",
        "Trash Removal",
        "Yard Waste Removal",
        "Furniture Removal",
      ],
      finePrint: {
        heading: "No Hazardous Materials",
        text: "Hazardous waste includes pressure/chemical treated lumber, railroad ties, cans of paint or stain, etc. These types of waste need to be taken to the hazardous waste center at the San Bernardino International Airport. I do not haul this type of waste. ",
      },
    },
    {
      name: "HANDYMAN SERVICES",
      details: [
        "Washer/Dryer Repair",
        "Outlet/Lightswitch Replacement",
        "Ceiling Fan Installation/Replacement",
        "Drywall Repair",
        "Painting and Touch Up",
        "Deck Board Replacement",
        "Plumbing and Leak Repair",
      ],
    },
    {
      name: "TREE SERVICES",
      details: ["Branch Pruning", "Small Tree Removal", "New Tree Planting"],
    },
  ];
  return (
    <>
      <Head>
        <title>Services | paulshaul.com</title>
      </Head>
      <div className="mt-10 max-w-7xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Services
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:text-lg md:text-xl">
            Hauling • Handyman • Tree Service
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </ul>
        <CallToAction />
      </div>
    </>
  );
};

export default Services;
