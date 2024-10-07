import Link from "next/link";
import React from "react";

export default function LinkButton({ title, href }) {
  return (
    <Link
      className="bg-orange-500 text-white rounded-full py-2 px-6 hover:bg-orange-600 font-semibold hover:shadow-md"
      href={href}
    >
      {title}
    </Link>
  );
}
