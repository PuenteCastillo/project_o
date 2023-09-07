import React from "react";
import TitleRow from "@/app/components/headers/Title_row";
import Styles from "./services.module.scss";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const servicesData = [
  { src: "https://picsum.photos/250/300", title: "Men's Haircut" },
  { src: "https://picsum.photos/550/500", title: "Woman's haircut" },
  { src: "https://picsum.photos/350/300", title: "Hair Coloring" },
  { src: "https://picsum.photos/450/300", title: "Hair Styling" },
  { src: "https://picsum.photos/350/300", title: "Hair Coloring" },
];

export default function Services() {
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

          {servicesData.map((service, index) => (
            <Link href="/profile/service" key={index}>
              <div className={Styles.content_container}>
                <div className={Styles.img_container}>
                  <Image
                    src={service.src}
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
