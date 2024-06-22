import { Button } from "@/components/ui/button";
import {
  ArrowBigDownDash,
  FilePlus2,
  PlusIcon,
  PlusSquareIcon,
} from "lucide-react";
import { FunctionComponent } from "react";

interface NewCardInlineProps {
  newCardHandler: () => void;
}

const NewCardInline: FunctionComponent<NewCardInlineProps> = ({
  newCardHandler,
}) => {
  return (
    <Button
      size="sm"
      variant="link"
      className="flex gap-2 opacity-50 hover:opacity-100"
      onClick={() => newCardHandler()}
    >
      <PlusIcon size={18} />
      {/* <FilePlus2 size={18} /> */}
      {/* New Task */}
    </Button>
  );
};

export default NewCardInline;
