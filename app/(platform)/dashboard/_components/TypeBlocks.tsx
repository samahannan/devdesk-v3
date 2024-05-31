import { blocks } from "@/lib/constants";
import { FunctionComponent } from "react";
import localFont from "next/font/local";

interface TypeBlocksProps {}

const headingFont = localFont({
  src: "../../../../public/font/relative-faux-webfont.woff2",
});
const TypeBlocks: FunctionComponent<TypeBlocksProps> = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {blocks.map(({ title, id, color, text, accent }) => (
        <div key={id}>
          <h4
            style={{
              backgroundColor: color,
              boxShadow: `2px 2px 0px 1px ${accent}`,
              color: text || "inherit",
            }}
            className={`column_title ${headingFont.className}`}
          >
            {title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default TypeBlocks;
