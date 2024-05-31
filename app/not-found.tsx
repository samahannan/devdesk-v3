"use client";
import Lottie from "react-lottie";
import * as animationData from "../public/lottie/not-found.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
}
