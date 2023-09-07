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
    <div className=" my_container">
      <section className="  m-auto  mt-7 flex md:flex-none overflow-x-scroll md:overflow-auto pb-10 hide-scroll-bar">
        {CategoriesArray.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="py-2 px-3  text-zinc-100 bg-theme_color  rounded-xl m-2 inline-block cat_link hover:bg-opacity-40  flex-shrink-0  "
          >
            {item.name}
          </Link>
        ))}
      </section>
    </div>
  );
}
