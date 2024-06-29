import { motion, useAnimation } from "framer-motion";
import { FunctionComponent, useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../../public/lottie/arrow.json";
interface NudgeTooltipProps { }

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

const NudgeTooltip: FunctionComponent<NudgeTooltipProps> = () => {
  return (
    <div
      // initial={{ scale: 0, opacity: 0 }}
      // animate={{ scale: 1, opacity: 1 }}
      // exit={{ scale: 0, opacity: 0 }}
      className="absolute -top-[32px] left-0 w-full h-full flex items-center justify-center !text-foreground"
    >
      <Lottie
          options={createOptions(animationData)}
          height={50}
          width={50}
        />
    </div>
  );
};

export default NudgeTooltip;
