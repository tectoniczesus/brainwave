import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";
import PricingList from "./PricingList";

const Priciing = () => {
  return (
    <Section className="overflow-hidden " id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="sphere"
            height={255}
            width={255}
            className="relative z-1"
          />
        </div>
        <div className=" absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img src={stars} alt="stars" width={950} className="w-full" />
        </div>

        <Heading
          tag="get started with Brainwave"
          title="Pay once, use forever"
        />
        <div>
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div>
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Priciing;
