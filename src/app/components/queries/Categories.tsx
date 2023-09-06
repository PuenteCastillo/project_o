import React from "react";
import Link from "next/link";

const CategoriesArray = [
  {
    name: "Home Care",
    url: "/",
  },
  {
    name: "Personal Care",
    url: "/",
  },
  {
    name: "Legal Advice",
    url: "/",
  },
  {
    name: "LandScaping",
    url: "/",
  },
  {
    name: "Electrical",
    url: "/",
  },
  {
    name: "Plumbing",
    url: "/",
  },
  {
    name: "Cleaning",
    url: "/",
  },
  {
    name: "Mechanic",
    url: "/",
  },
  {
    name: "Barber",
    url: "/",
  },
];

export default function Categories() {
  return (
    <section className="max-w-sm md:max-w-4xl m-auto  mt-7 ">
      {CategoriesArray.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className="py-2 px-3 border border-zinc-600 bg-cyan-900 bg-opacity-20 rounded-xl m-2 inline-block cat_link hover:bg-opacity-40"
        >
          {item.name}
        </Link>
      ))}
    </section>
  );
}
