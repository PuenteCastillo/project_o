"use client";
import Image from "next/image";
import Styles from "./header.module.scss";
import Link from "next/link";

export default function Header_Small() {
  return (
    <section className={Styles.profile_header_small}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Link href="/profile">
          <div className="flex ">
            <div className="image_conatiner h-20 w-20 rounded-full p-1 overflow-hidden bg-white ">
              <Image
                src="https://picsum.photos/400/410"
                width={136}
                height={136}
                alt={"profile_pic"}
                className=" h-full w-full object-cover rounded-full"
              />
            </div>

            {/* Name  */}
            <div className="ml-5 pt-4">
              <h1>Richard Foley</h1>
              <p> Doctor </p>
            </div>
          </div>
        </Link>
        <div className=" justify-items-end  hidden md:block">
          {/* links */}
          {/* button back to profile  */}
          <div className=" flex justify-end pt-4">
            <Link href="/profile" className="theme_btn">
              <div className={Styles.back_to_profile}>
                <span>View Profile</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={Styles.divider}></div>
    </section>
  );
}
