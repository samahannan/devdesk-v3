import { FunctionComponent } from "react";
import { blocks } from "@/lib/constants";
import CardList from "./CardList";
import { Button } from "@/components/ui/button";
import { FilePlus, Plus } from "lucide-react";
import { NewCard } from "./NewCard";
import CreateFreelanceCard from "@/app/(platform)/dashboard/_forms/CreateFreelanceCard";
import { Status } from "@/lib/types";

interface CardGridProps {
  status: Status;
}

const getRightForm = (type: string) => {
  switch (type) {
    case "freelance":
      return <CreateFreelanceCard />;
    default:
      return <CreateFreelanceCard />;
  }
};

const CardGrid: FunctionComponent<CardGridProps> = ({ status }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {blocks.map(({ id }) => (
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-4 mb-2  flex-1">
            <CardList type={id} status={status} />
          </div>
          {status === "active" && (
            <div className="grid grid-cols-1">
              <NewCard form={getRightForm(id)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
