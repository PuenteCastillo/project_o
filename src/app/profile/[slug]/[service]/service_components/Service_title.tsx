import React from "react";

export default function Service_title({
  title,
  location,
}: {
  title: string;
  location: string;
}) {
  return (
    <div className="title_row grid grid-cols-2 max-w-6xl m-auto">
      <div>
        <h2 className="-mb-2">{title}</h2>
        <small>{location}</small>
      </div>
      <div className="">
        <button className="float-right theme_btn">Book Now</button>
      </div>
    </div>
  );
}
