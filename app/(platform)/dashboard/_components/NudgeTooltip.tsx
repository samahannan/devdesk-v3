import { FunctionComponent } from "react";

interface NudgeTooltipProps {}

const NudgeTooltip: FunctionComponent<NudgeTooltipProps> = () => {
  return (
    <div className="absolute left-0 -top-[36px] text-[16px] z-[51]">
      <button>Click Me!</button>
    </div>
  );
};

export default NudgeTooltip;
