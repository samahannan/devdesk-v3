import Lottie from "react-lottie";
import * as animationData from "../../public/lottie/loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Lottie options={defaultOptions} height={50} width={50} />
    </div>
  );
};
