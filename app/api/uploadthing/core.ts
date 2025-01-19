import { auth } from '@clerk/nextjs/server'
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const  handleAuth = async () =>  {
    const { userId }: { userId: string | null } = await auth()

    if(!userId) throw new Error("Unauthorized");
    return {userId}
}

export const ourFileRouter = {
    profileImage: f({image: {maxFileSize: "4MB", maxFileCount: 1}})
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
}

export type OurFileRouter = typeof ourFileRouter;
