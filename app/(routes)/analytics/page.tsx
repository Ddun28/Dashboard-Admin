import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import CompanyChart from "./components/CompaniesChart/CompanyChart"


export default async function PageAnalytics() {

      const { userId }: { userId: string | null } = await auth()

      if(!userId){
       return redirect("/")
      }

      const companies = await db.company.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: "desc"
        }
      })

      const events = await db.event.findMany({
        orderBy: {
            createdAt: "desc"
        }
      })

  return (
    <div className="bg-background shadow-md rounded-md p-4">
      <h2 className="text-2xl mb-4">Analytics page</h2>
      <div>
        <CompanyChart companies={companies} events={events}/>
      </div>
    </div>
  )
}
