import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, {params} : {params: {companyId: string}}) {
    try {
        const { userId }: { userId: string | null } = await auth()
        const {companyId} = params;
        const values = await req.json();

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const company = await db.company.update({
            where: 
            { id: companyId,
                userId
             },
                data: {
                    ...values,
                }
        });

        return NextResponse.json(company)

    } catch (error) {
        console.log("[COMPANYID]", error);
        return new NextResponse("Internal Error", {status: 500})
        
    }
}

export async function DELETE(req: Request, {params} : {params: {companyId: string}}) {
    try {

        const {companyId} = params;
       const { userId }: { userId: string | null } = await auth()
       if(!userId){
        return new NextResponse("Unauthorized", { status: 401 });
       }

       const deletedComapny = await db.company.delete({
        where: {
            id: companyId,
        }
       })

       return NextResponse.json(deletedComapny)

    } catch (error) {
        console.log("Delete company Id",error);
        return new NextResponse("Internal Error", {status: 500})        
    }
}