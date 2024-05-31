import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Status } from "@/lib/types";
import { useMutation } from "convex/react";
import { v } from "convex/values";
import { ArrowBigDownDash, CircleCheckBig, Trash2 } from "lucide-react";
import localFont from "next/font/local";
import { FunctionComponent } from "react";
import { toast } from "sonner";

const headingFont = localFont({
  src: "../../../../public/font/relative-faux-webfont.woff2",
});
interface Card {
  type: string;
  title?: string;
  isActive?: boolean;
  status?: Status;
  id: Id<"card">;
}

const Card: FunctionComponent<Card> = ({
  type,
  title = "",
  id,
  isActive = false,
}) => {
  const deleteCard = useMutation(api.card.deleteCard);

  const onDelete = (id: Id<"card">) => {
    const promise = deleteCard({ id });
    toast.promise(promise, {
      loading: "Deleting task...",
      success: "Task Deleted!",
      error: "Failed to delete task.",
    });
  };

  return (
    <div className={`${isActive ? "" : ""}`}>
      <div className={`card border rounded-sm relative bg-white `}>
        {/* <div
        className={`rounded-full absolute right-3 top-3 w-3 h-3 ${status === "green" ? "bg-[#5fdba7]" : status === "yellow" ? "bg-[#FEE771]" : "bg-[#FF8678]"}`}
      ></div> */}
        <h3 className={`${headingFont.className} p-3  text-lg`}>{title}</h3>
        <div className="p-3 text-[14px] flex gap-4 justify-between">
          <div className="flex gap-2">
            {isActive && (
              <div className="flex gap-1 items-center cursor-pointer">
                <ArrowBigDownDash size={22} />
              </div>
            )}
            <Button
              size="sm"
              onClick={() => onDelete(id)}
              variant="link"
              className="p-0 leading-3"
            >
              <Trash2 size={16} />
            </Button>
          </div>

          <div className="flex gap-1 items-center cursor-pointer">
            <CircleCheckBig size={16} />
            <span>Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
