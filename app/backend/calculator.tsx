import { Wrapper } from "@/lib/atoms";
import CalculatorForm from "./calculator-form";
import { FundAssetSplit } from "./fund-asset-split";
import GridMajor from "./grid-major";
// import { FundReturnGauge } from "./fund-return-guage";

type Props = {};

export default function Calculator({}: Props) {
  return (
    <Wrapper className="h-full flex border-t border-slate-200 px-0">
      <div className="flex w-full items-start justify-start divide-x divide-slate-200 min-h-full fillscreen">
        <div className="bg-slate-50 border-r border-slate-200 flex flex-col h-full p-8 min-w-1/3">
          <CalculatorForm />
        </div>
        <div className="grid grid-cols-2 w-full p-8 gap-4">
          <FundAssetSplit />
          <GridMajor />
          {/* <FundReturnGauge /> */}
        </div>
      </div>
    </Wrapper>
  );
}
