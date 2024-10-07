import React from "react";
import LinkButton from "./LinkButton";
import Image from "next/image";

export default function HeroSection() {
  // default(320) sm(480)   md(769)   lg xl (1024)
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto bg-slate-900  text-slate-50 rounded-3xl p-16 gap-4">
      <div className="w-full md:w-1/2">
        <h2 className="py-4 text-4xl md:text-6xl font-bold ">
          The Social Sepherd Podcast
        </h2>
        <p className="py-4 text-sm text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          assumenda excepturi obcaecati distinctio asperiores animi. Quod
          tenetur ea, ex suscipit dolor non? Consequuntur, dolorem consectetur
          accusantium impedit rerum velit voluptatibus.
        </p>
        <div className="py-8">
          <LinkButton title="Learn More" href="/learn-more" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="https://pbs.twimg.com/media/FuiDFcuXgAIEwcA?format=jpg&name=large"
          alt="JB"
          width={1000}
          height={800}
          className="h-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}
