"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FormCreateCustomer } from "../FormCreateCustomer"

export default function HeaderCompanies() {

    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl">List of companies</h2>

      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
            <Button className="dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800">
              Create Company
              </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-x-[625px]">
            <DialogHeader>
                <DialogTitle>Create Customer</DialogTitle>
                <DialogDescription>Create and configure your customer</DialogDescription>
            </DialogHeader>

            <FormCreateCustomer setOpenModalCreate={setOpenModalCreate}/>
        </DialogContent>
      </Dialog>
    </div>
  )
}
