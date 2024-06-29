import { FunctionComponent } from "react";
import TypeBlocks from "../_components/TypeBlocks";
import NudgeTooltip from "../_components/NudgeTooltip";
import CardGrid from "../_components/CardGrid";
import { Minus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGlobalState } from "@/lib/context/StateProvider";
interface Props {}

const DashboardTable: FunctionComponent<Props> = () => {
  const { state } = useGlobalState();
  return (
    <Tabs defaultValue="active">
      <div className="flex justify-between">
        <TabsList className="h-[auto] w-full justify-start mb-4 p-0 bg-transparent">
          <TabsTrigger
            className="relative text-3xl rounded-none shadow-none p-0 mr-1 text-foreground/40 data-[state=active]:shadow-none data-[state=active]:text-foreground data-[state=active]:font-medium"
            value="active"
          >
            Active Tasks
            {state.showNudge === "active" && <NudgeTooltip />}
          </TabsTrigger>
          <Minus color="#3e9392" size={26} />
          <TabsTrigger
            className="relative text-3xl rounded-none shadow-none p-0 mr-1 text-foreground/40 data-[state=active]:shadow-none data-[state=active]:text-foreground data-[state=active]:font-medium"
            value="paused"
          >
            Coming Up
            {state.showNudge === "paused" && <NudgeTooltip />}
          </TabsTrigger>{" "}
          <Minus color="#3e9392" size={26} />
          <TabsTrigger
            className="relative text-3xl rounded-none shadow-none p-0 text-foreground/40 data-[state=active]:shadow-none data-[state=active]:text-foreground data-[state=active]:font-medium"
            value="completed"
          >
            Completed
            {state.showNudge === "completed" && <NudgeTooltip />}
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="active">
        <>
          <TypeBlocks />
          <CardGrid status="active" />
        </>
      </TabsContent>
      <TabsContent value="paused">
        <>
          <TypeBlocks />
          <CardGrid status="paused" />
        </>
      </TabsContent>
      <TabsContent value="completed">
        <>
          <TypeBlocks />
          <CardGrid status="completed" />
        </>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTable;
