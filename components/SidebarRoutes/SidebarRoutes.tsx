"use client";

import SidebarItem from "../SidebarItem/SidebarItem";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from "./SidebarRoutes.data";

export default function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-4">
            <p className="text-slate-500 mb-2">General</p>
            {dataGeneralSidebar.map((item) => (
                <SidebarItem key={item.label} item={item} />
            ))}
        </div>

        <Separator />

        <div className="p-2 md:p-4">
            <p  className="text-slate-500 mb-2">TOOLS</p>
            {dataToolsSidebar.map((item) => (
                <SidebarItem key={item.label} item={item} />
            ))}
        </div>

        <Separator />
        <div className="p-2 md:p-4">
            <p  className="text-slate-500 mb-2">SUPPORT</p>
            {dataSupportSidebar.map((item) => (
                <SidebarItem key={item.label} item={item} />
            ))}
        </div>
      </div>
      <div>
        <div className="text-center p-4">
            <Button variant="outline" className="w-full">Upgrade Plan</Button>
        </div>

        <Separator />

        <footer className="text-center p-1 mt-2">
            2025. All rights reserved
        </footer>
      </div>
    </div>
  )
}
