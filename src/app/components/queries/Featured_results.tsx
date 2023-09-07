import React from "react";
import TitleRow from "../headers/Title_row";
import Image from "next/image";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchFeaturedResults = async () => {
  return prisma.user.findMany({
    // on users that have services

    take: 8,
    select: {
      first_name: true,
      last_name: true,
      occupation: true,
      url: true,
      services: {
        select: {
          title: true,
          featuredImage: true,
        },
      },
    },
  });
};

export default async function FeaturedResults() {
  const featuredResults = await fetchFeaturedResults();

  // only select users that have services
  const filteredResults = featuredResults.filter((item: any) => {
    return item.services.length > 0;
  });

  console.log(filteredResults);

  return (
    <section className="my_container ">
      <TitleRow title="Featured Results" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 mt-5">
        {filteredResults.map((item: any, index) => (
          <Link href={item.url} key={index}>
            <div className="item mt-4" key={index}>
              <div className="img_container w-full h-64  lg:h-72 overflow-hidden rounded-2xl">
                <Image
                  src={
                    item.services[0]?.featuredImage ||
                    "https://picsum.photos/500/500"
                  }
                  width={500}
                  height={500}
                  alt="img"
                  className="rounded-2xl w-full h-full object-cover "
                />
              </div>
              <div className="mt-3">
                <h4 className="text-xl font-bold">
                  {item.first_name + " " + item.last_name}
                </h4>
                <p className="text-sm text-gray-500">{item.occupation}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
