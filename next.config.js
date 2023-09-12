/** @type {import('next').NextConfig} */

//  include https://picsum.photos
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "robohash.org",
      "dummyimage.com",
      "tailwindui.com",
      "i.pravatar.cc",
    ],
  },
};

module.exports = nextConfig;
