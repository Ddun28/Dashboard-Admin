import { CustomIcon } from "@/components/Customicon";
import { BarChart } from "lucide-react";
import GraphicSuscribers from "../GraphicSuscribers/GraphicSuscribers";

export function SalesDistributor() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={BarChart}/>
        <p>Sales Distribution</p>
      </div>
      <GraphicSuscribers/>
    </div>
  )
}
