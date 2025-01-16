import { CustomIcon } from "@/components/Customicon";
import { Building } from "lucide-react";
import { CustomerTable } from "../CustomersTable";

export function LastCustomer() {
  return (
    <div className="shadow-xm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={Building}/>
        <p className="text-xl">Last Customers</p>
      </div>
      <div>
        <CustomerTable/>
      </div>
    </div>
  )
}
