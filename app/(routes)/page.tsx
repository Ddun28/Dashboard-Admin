import { CardSummary } from "./components/CardSummary";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import { LastCustomer } from "./components/LastCustomers";
import { SalesDistributor } from "./components/SalesDistributors";
import { TotalSuscribers } from "./components/TotalSuscribers";
import ListItengration from "./components/Listltengrations/ListItengration";


export default function Home() {
  return (
   <div className="mx-auto p-3">
       <h2 className="text-2xl mb-4">Dashboard</h2> 
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
         <CardSummary 
          icon={UserRound}
          total="12.450"
          average={15}
          title="Companies created"
          tooltipText="See all companies created"
         />
         <CardSummary 
          icon={Waypoints}
          total="86.5%"
          average={80}
          title="Total Revenue"
          tooltipText="See all of the sumary"
         />
         <CardSummary 
          icon={BookOpenCheck}
          total="363,95$"
          average={30}
          title="Bounce Rate"
          tooltipText="See all of the bounce rate"
         />
       </div>
       <div className="grid grid-cols-1 mt-12 xl:grid-cols-2 gap-y-2 md:gap-x-10">
        <LastCustomer/>
        <SalesDistributor/>
       </div>
       <div className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
          <TotalSuscribers/>
          <ListItengration/>
       </div>
   </div>
  );
}
