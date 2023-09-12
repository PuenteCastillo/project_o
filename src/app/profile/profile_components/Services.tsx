import React from "react";
import TitleRow from "@/app/components/headers/Title_row";
import Styles from "./services.module.scss";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Services({ profile }: { profile: any }) {
  const filteredServices = profile.services;
  console.log(filteredServices);

  return (
    <section id={Styles.Services}>
      <div className={Styles.container}>
        <div className={Styles.contain}>
          <TitleRow title="Services" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-7 px-4 md:px-0">
          {/* only for admin  */}
          <div className={Styles.add_new}>
            <div className={Styles.add_container}>
              <PlusCircleIcon className="h-10 w-10 m-auto" />
            </div>
            <h3 className="text-center mt-3"> Add New</h3>
          </div>

          {filteredServices?.map((service: any, index: any) => (
            <Link
              href={`/profile/${profile?.slug}/${service?.slug}`}
              key={index}
            >
              <div className={Styles.content_container}>
                <div className={Styles.img_container}>
                  <Image
                    src={service.featuredImage}
                    width={160}
                    height={270}
                    alt="service"
                  />
                </div>

                <h3 className="text-center mt-3">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
