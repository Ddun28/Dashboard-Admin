import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export async function ListCompanies() {
    const { userId }: { userId: string | null } = await auth()

    if(!userId){
        return redirect('/')
    }

    const companies = await db.company.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    
    return (
    <div>
      <DataTable columns={columns} data={companies} />
    </div>
  )
}
