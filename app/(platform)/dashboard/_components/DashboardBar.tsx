import { Button } from "@/components/ui/button";

import { SlidersHorizontal } from "lucide-react";
import { FunctionComponent } from "react";
import { NewCardButton } from "./NewCardButton";

interface DashboardBarProps {}

const DashboardBar: FunctionComponent<DashboardBarProps> = () => {
  return (
    <div className="flex justify-between  gap-2 mb-8">
      <div>
        <NewCardButton />
      </div>
      <div>
        <Button
          variant="secondary"
          size="sm"
          className="flex gap-2"
          onClick={() => console.log("change view")}
        >
          <SlidersHorizontal size={20} />
          Change View
        </Button>
      </div>
    </div>
  );
};

export default DashboardBar;
