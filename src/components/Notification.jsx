import React from "react";
import { notification1 } from "../assets";
import { notificationImages } from "../constant";
const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        alt="image"
        width={62}
        height={62}
        className="rounded-xl"
      />
      <div>
        <h6 className="nb-1 font-semibold text-base">{title}</h6>
        <div>
          <ul>
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  alt={item}
                  className="w-full"
                  height={20}
                  width={20}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
