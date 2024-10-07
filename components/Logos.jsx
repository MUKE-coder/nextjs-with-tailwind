import React from "react";

export default function Logos() {
  const logos = [
    {
      title: "Logo A",
    },
    {
      title: "Logo B",
    },
    {
      title: "Logo C",
    },
    {
      title: "Logo D",
    },
    {
      title: "Logo E",
    },
    {
      title: "Logo F",
    },
    {
      title: "Logo G",
    },
    {
      title: "Logo I",
    },
  ];
  return (
    <div className="p-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {logos.map((item, i) => {
        return (
          <h2
            className="cursor-pointer py-6 px-8 bg-slate-100 rounded-2xl"
            key={i}
          >
            {item.title}
          </h2>
        );
      })}
    </div>
  );
}
