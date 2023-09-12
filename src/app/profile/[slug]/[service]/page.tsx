import Image from "next/image";
import Header from "../../profile_components/header_small";
import Services from "../../profile_components/Services";
import Styles from "./service.module.scss";
import Service_title from "./service_components/Service_title";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchService = async (slug: string): Promise<any> => {
  const service = await prisma.service.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      featuredImage: true,
      description: true,
      price: true,
      duration: true,
      userId: true,
    },
  });

  // get user
  const user = await prisma.user.findUnique({
    where: {
      id: service?.userId,
    },
    select: {
      first_name: true,
      last_name: true,
      slug: true,
      avatar: true,
      occupation: true,
    },
  });

  const serviceData = {
    ...service,
    user: user,
  };

  if (!service) {
    throw new Error("No service found");
  }

  return serviceData;
};

export default async function Service({
  params,
}: {
  params: { service: string };
}) {
  const service = await fetchService(params.service);

  return (
    <main id="service_page">
      <Header
        name={service.user.first_name + " " + service.user.last_name}
        avatar={service.user.avatar}
        occupation={service.user.occupation}
        slug={service.user.slug}
      />
      {/* <Services /> */}
      <section
        id={Styles.service_page}
        className="  py-3 w-full overflow-hidden m-auto mt-10 pb-40"
      >
        <div className="grid grid-cols-12 gap-5">
          <div className=" col-span-12 lg:col-span-5">
            <div className="  ">
              <Service_title
                title={service.title}
                location={"London, United Kingdom"}
              />
              {/* discription  */}
              <div className=" mt-5">
                <p>{service.description}</p>
              </div>
            </div>
            <div className="img_container h-80 w-full  m-auto rounded-md  overflow-hidden  mt-3 ">
              <Image
                src={service.featuredImage}
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
              {/* <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
