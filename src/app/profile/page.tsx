import Image from "next/image";
import Header from "./profile_components/header";
import Services from "./profile_components/Services";

export default function profile() {
  return (
    <main id="profile_page" className="">
      <Header />
      <Services />
    </main>
  );
}
