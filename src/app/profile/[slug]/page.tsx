import Image from "next/image";
import Header from "../profile_components/header";
import Services from "../profile_components/Services";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ProfileType {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  occupation: string;
  slug: string;
  bio: string | null;
  services: Array<any>;
}

const fetchFeaturedResults = async (slug: string): Promise<ProfileType> => {
  const profile = await prisma.user.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      avatar: true,
      occupation: true,
      slug: true,
      bio: true,
      services: {
        select: {
          title: true,
          featuredImage: true,
          slug: true,
        },
      },
    },
  });
  if (!profile) {
    throw new Error("No restaurant found");
  }

  return profile;
};

export default async function Profile({
  params,
}: {
  params: { slug: string };
}) {
  const profile = await fetchFeaturedResults(params.slug);

  return (
    <main id="profile_page" className="">
      <Header
        name={profile.first_name + " " + profile.last_name}
        avatar={profile.avatar}
        occupation={profile.occupation}
        bio={profile.bio || "No bio yet"}
      />
      <Services profile={profile} />
    </main>
  );
}
