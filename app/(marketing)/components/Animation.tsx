"use client";
import { FunctionComponent } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../public/animation1-3.json";
import * as animationData2 from "../../../public/animation2.json";

interface AnimmationProps {}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Animation: FunctionComponent<AnimmationProps> = () => {
  return (
    <div className="flex justify-end">
      <div className="animation_holder w-[300px] absolute right-0 -bottom-[24px]">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      <div className="animation_holder w-[350px] absolute left-0 -bottom-[55px]">
        <Lottie options={defaultOptions2} height={350} width={350} />
      </div>
    </div>
  );
};

export default Animation;
