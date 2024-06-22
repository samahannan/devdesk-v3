import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Status } from "@/lib/types";
import { useMutation } from "convex/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowBigDownDash,
  CircleCheckBig,
  PackageOpen,
  PauseCircle,
  PlayCircle,
  RotateCcwIcon,
  Trash2,
  UndoIcon,
} from "lucide-react";
import localFont from "next/font/local";
import { FunctionComponent } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useGlobalState } from "@/lib/context/StateProvider";

const headingFont = localFont({
  src: "../../../../public/font/relative-faux-webfont.woff2",
});
interface Card {
  type: string;
  title?: string;
  status?: Status;
  id: Id<"card">;
}

const Card: FunctionComponent<Card> = ({ type, title = "", id, status }) => {
  const deleteCard = useMutation(api.card.deleteCard);
  const editCard = useMutation(api.card.editCard);

  const { dispatch } = useGlobalState();

  const onDelete = (id: Id<"card">) => {
    const promise = deleteCard({ id });
    toast.promise(promise, {
      loading: "Deleting task...",
      success: "Task Deleted!",
      error: "Failed to delete task.",
    });
  };

  const onChangeStatus = (
    id: Id<"card">,
    status: "paused" | "active" | "completed"
  ) => {
    const promise = editCard({ id, data: { status: status } }).then(() => {
      dispatch({ type: "SHOW_NUDGE", payload: status });
    });
    toast.promise(promise, {
      loading: "Pausing task...",
      success: `Task moved to ${status === "active" ? "active" : status === "completed" ? "completed" : "coming up"}!`,
      error: "Failed to edit task.",
    });
  };

  return (
    <motion.div
      transition={{ ease: "backInOut" }}
      layout
      initial={{
        y: -20,
        opacity: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
    >
      <div className={`card border rounded-sm relative bg-white `}>
        {/* <div
        className={`rounded-full absolute right-3 top-3 w-3 h-3 ${status === "green" ? "bg-[#5fdba7]" : status === "yellow" ? "bg-[#FEE771]" : "bg-[#FF8678]"}`}
      ></div> */}
        <h3 className={`${headingFont.className} p-3  text-lg`}>{title}</h3>
        <div className="p-3 text-[14px] flex gap-4 justify-between">
          <div className="flex gap-2">
            {(status === "active" || status === "paused") && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() =>
                        onChangeStatus(
                          id,
                          status === "active" ? "paused" : "active"
                        )
                      }
                    >
                      {status === "active" ? (
                        <PauseCircle size={16} />
                      ) : (
                        <PlayCircle size={16} />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{status === "active" ? "Pause" : "Play"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    size="sm"
                    onClick={() => onDelete(id)}
                    variant="link"
                    className="p-0 leading-3"
                  >
                    <Trash2 size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <Button
            size="sm"
            onClick={() =>
              onChangeStatus(
                id,
                status === "completed" ? "paused" : "completed"
              )
            }
            variant="link"
            className="p-0 leading-3 hover:no-underline"
          >
            <div className="flex gap-1 items-center cursor-pointer">
              {status === "completed" ? (
                <RotateCcwIcon size={16} />
              ) : (
                <CircleCheckBig size={16} />
              )}
              <p>{status === "completed" ? "Revisit" : "Complete"}</p>
            </div>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
