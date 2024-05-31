"use client";
import { FunctionComponent } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../public/lottie/girl-coding2.json";
import * as animationData2 from "../../../public/lottie/paper.json";

interface AnimmationProps {}

const createOptions = (file: any) => {
  return {
    loop: true,
    autoplay: true,
    animationData: file,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};
const Animation: FunctionComponent<AnimmationProps> = () => {
  return (
    <div className="flex justify-end">
      <div className="animation_holder w-[300px] absolute right-0 -bottom-[24px]">
        <Lottie
          options={createOptions(animationData)}
          height={300}
          width={300}
        />
      </div>
      <div className="animation_holder w-[350px] absolute left-0 -bottom-[55px]">
        <Lottie
          options={createOptions(animationData2)}
          height={350}
          width={350}
        />
      </div>

      <div className="animation_holder opacity-50 w-[350px] absolute -left-[0] top-[55px]">
        {/* <Lottie
          options={createOptions(animationData4)}
          height={250}
          width={250}
        /> */}
      </div>
    </div>
  );
};

export default Animation;
