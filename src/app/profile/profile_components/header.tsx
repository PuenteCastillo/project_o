"use client";
import Image from "next/image";
import Styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <section className={Styles.profile_header}>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className=" col-span-12 lg:col-span-5 ">
          <div className={Styles.title_row}>
            <h1 className=" text-slate-800 dark:text-white">Richard Foley</h1>
            <p className="text-slate-600 dark:text-slate-300 "> Doctor </p>
          </div>
          <div className={Styles.avatar}>
            <div className="grid grid-cols-3">
              <div className=" flex ">
                <div className=" m-auto">
                  <h3 className=" text-slate-800 dark:text-white">18K</h3>
                  <p className="text-slate-600 dark:text-slate-300 ">
                    Services
                  </p>
                </div>
              </div>
              <div className=" grow">
                <Link href="/profile">
                  <div className={Styles.avatar_container}>
                    <Image
                      src="https://picsum.photos/400/410"
                      width={136}
                      height={136}
                      alt={"profile_pic"}
                    />
                  </div>
                </Link>
              </div>
              <div className=" flex ">
                <div className=" m-auto">
                  <h3 className=" text-slate-800 dark:text-white">30</h3>
                  <p className="text-slate-600 dark:text-slate-300 ">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-7">
          <div className={Styles.bio}>
            <h2 className=" text-slate-800 dark:text-white">Bio</h2>
            <p className="">
              I&apos;m a 24 years old Embedded Systems Engineer currently
              working as a Freelance designer. I love to travel and share the
              great things I visit with you guys. I&apos;m a 24 years old
              Embedded Systems Engineer currently working as a Freelance
              designer. I love to travel and share the great things I visit with
              you guys.
            </p>
          </div>
          <div className=" mt-10 flex justify-between lg:justify-center px-5 ">
            <button className="">
              <span>Book Now</span>
            </button>
            <button>
              <span>Message</span>
            </button>
            <button>
              <span>Follow</span>
            </button>
          </div>
        </div>
      </div>

      <div className={Styles.divider}></div>
    </section>
  );
}
