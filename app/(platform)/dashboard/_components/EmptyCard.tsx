import { Status } from "@/lib/types";
import localFont from "next/font/local";
import { FunctionComponent } from "react";

const headingFont = localFont({
  src: "../../../../public/font/relative-faux-webfont.woff2",
});
interface EmptyCard {}

const EmptyCard: FunctionComponent<EmptyCard> = () => {
  return (
    <>
      <div
        className={`card border rounded-sm relative bg-white flex justify-center items-center`}
      >
        <h3 className={`${headingFont.className} p-3  text-sm text-gray-400`}>
          Empty
        </h3>
      </div>
    </>
  );
};

export default EmptyCard;
