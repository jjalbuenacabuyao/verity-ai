import React from "react";
import Subheading from "./Subheading";

const Contact = () => {
  const superAdmins = [
    {
      name: "Carl Darren M. Apelacion",
      email: "c4rlapelacion@gmail.com",
      img: "/sir-carl.jpg",
      designation: "Faculty",
    },

    {
      name: "Joel J. Cabuyao",
      email: "joelcabuyao1@gmail.com",
      img: "/joel.png",
      designation: "Researcher",
    },

    {
      name: "Nice L. Oabel",
      email: "niceoabel8@gmail.com",
      img: "/nice.jpg",
      designation: "Researcher",
    },

    {
      name: "Kristine Karmel V. Nacion",
      email: "nacionkristine309@gmail.com",
      img: "/nacion.jpg",
      designation: "Researcher",
    },
  ];

  return (
    <div className="relative mt-10 overflow-hidden pt-[4.5rem] lg:mt-0">
      <Subheading title="Contact us" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {superAdmins.map((admin) => (
          <div className="flex items-center gap-4 rounded-2xl border p-5 shadow">
            <img
              src={admin.img}
              alt={`Image of ${admin.name}`}
              className="h-14 w-14 rounded-full object-cover lg:h-16 lg:w-16"
            />
            <div>
              <p className="text-xl font-semibold">{admin.name}</p>
              <p className="text-sm">{admin.designation}</p>
              <p className="text-sm">SLSU Tayabas City Campus</p>
              <p className="text-sm font-medium">{admin.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
