"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../profile_components/header_small";
import Services from "../profile_components/Services";
import Styles from "./service.module.scss";
import { Calendar } from "@/app/modules/ui/calendar";

export default function Service() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main id="service_page">
      <Header />
      {/* <Services /> */}
      <section
        id={Styles.service_page}
        className="  py-3 w-full overflow-hidden m-auto mt-10 pb-40"
      >
        <div className="grid grid-cols-12 gap-5">
          <div className=" col-span-12 lg:col-span-5">
            <div className="  ">
              <div className="title_row grid grid-cols-2 max-w-6xl m-auto">
                <div>
                  <h2 className="-mb-2">Men&apos;s Haircut</h2>
                  <small> Costa Mesa, CA</small>
                </div>
                <div className="">
                  <button className="float-right theme_btn">Book Now</button>
                </div>
              </div>
              {/* discription  */}
              <div className=" mt-5">
                <p>
                  Located in Xiahe in the south of Gansu province in China,
                  miniature Tibet and home to the most comprehensive Tibetan
                  university monastery in the world. Located in Xiahe in the
                  south of Gansu province in China, miniature Tibet and home to
                  the most comprehensive Tibetan university monastery in the
                  world.
                  <br />
                  <br />
                  Located in Xiahe in the south of Gansu province in China,
                  miniature Tibet and home to the most comprehensive Tibetan
                  university monastery in the world.
                </p>
              </div>
            </div>
            <div className="img_container h-80 w-full  m-auto rounded-md  overflow-hidden  mt-3 ">
              <Image
                src="https://picsum.photos/600/600"
                width={500}
                height={500}
                alt={"featured_image"}
                className=" h-full w-full object-cover"
              />
            </div>

            {/* gallaery  */}
            <div className=" mt-3 ">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className=" h-44 w-full rounded-md overflow-hidden">
                    <Image
                      src="https://picsum.photos/400/450"
                      width={400}
                      height={410}
                      alt=""
                      className=" h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className=" h-20 w-full rounded-md overflow-hidden">
                    <Image
                      src="https://picsum.photos/500/590"
                      width={400}
                      height={410}
                      alt=""
                      className=" h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className=" h-20 w-full rounded-md overflow-hidden">
                      <Image
                        src="https://picsum.photos/500/600"
                        width={400}
                        height={410}
                        alt=""
                        className=" h-full w-full object-cover"
                      />
                    </div>
                    <div className=" h-20 w-full rounded-md overflow-hidden">
                      <Image
                        src="https://picsum.photos/500/540"
                        width={400}
                        height={410}
                        alt=""
                        className=" h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-12 lg:col-span-7">
            <h2 className="mb-5"> Calander</h2>
            <div className={Styles.Cal_wrapper}>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
