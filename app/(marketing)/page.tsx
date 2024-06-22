import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { FunctionComponent } from "react";
import Animation from "./components/Animation";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../../public/font/relative-faux-webfont.woff2",
});

interface Props {}

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MarktetingPage: FunctionComponent<Props> = () => {
  return (
    <div className="flex items-center justify-center flex-col md:h-screen overflow-hidden relative">
      <h1>TEST PAGE</h1>
      <div className="hero">
        <div className="hero_content flex items-center justify-center flex-col">
          <div className="flex items-center justify-center flex-col mb-6">
            <h2
              className={`${headingFont.className} text-3xl font-bold md:text-6xl bg-gradient-to-r mb-3 text-black p-0 rounded-md w-fit`}
            >
              a control room
            </h2>
            <h1
              className={`${headingFont.className} text-3xl font-bold md:text-6xl bg-gradient-to-r mb-2 text-black px-4 p-2 rounded-md pb-4 w-fit`}
            >
              made for{" "}
              <span className="gradient_text">frontend developers</span>
            </h1>
            <h1 className="text-sm md:text-xl text-center text-neutral-800"></h1>
          </div>
          <div className="elevated_text mb-8 text-sm md:text-xl text-neutral-400  rounded-lg p-4  max-w-xs md:max-w-2xl text-center mx-auto">
            a tool designed to keep track of your workload from <br />
            <span className="font-medium text-neutral-600">freelance</span> gigs
            to <span className="font-medium text-neutral-600">personal</span>{" "}
            projects,{" "}
            <span className="font-medium text-neutral-600">study</span> plans,{" "}
            <br />
            and <span className="font-medium text-neutral-600">
              interview
            </span>{" "}
            prep.
          </div>

          <Button>Get Started</Button>
        </div>

        <Animation />
      </div>
    </div>
  );
};

export default MarktetingPage;
