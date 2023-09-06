import React from "react";
import TitleRow from "../headers/Title_row";
import Image from "next/image";
import Link from "next/link";

const featuredItems = [
  {
    name: "Tio Puente",
    role: "Barber",
    featuredImage: "https://picsum.photos/200/300",
    url: "/profile",
  },
  {
    name: "John Doe",
    role: "Lawyer",
    featuredImage: "https://picsum.photos/200/350",
    url: "/profile",
  },
  {
    name: "Al Pastor",
    role: "Doctor",
    featuredImage: "https://picsum.photos/200/400",
    url: "/profile",
  },
  {
    name: "Tio Puente",
    role: "Barber",
    featuredImage: "https://picsum.photos/200/300",
    url: "/profile",
  },
  {
    name: "John Doe",
    role: "Lawyer",
    featuredImage: "https://picsum.photos/200/350",
    url: "/profile",
  },
  {
    name: "Al Pastor",
    role: "Doctor",
    featuredImage: "https://picsum.photos/200/400",
    url: "/profile",
  },
];

export default function FeaturedResults() {
  return (
    <section className="max-w-sm md:max-w-4xl m-auto pt-8 px-4">
      <TitleRow title="Featured Results" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 mt-5">
        {featuredItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <div className="item mt-4" key={index}>
              <div className="img_container w-full h-72 overflow-hidden rounded-2xl">
                <Image
                  src={item.featuredImage}
                  width={500}
                  height={500}
                  alt="img"
                  className="rounded-2xl w-full h-full object-cover "
                />
              </div>
              <div className="mt-3">
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
