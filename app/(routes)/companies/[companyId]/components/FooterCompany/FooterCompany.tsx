"use client"

import { useRouter } from "next/navigation";
import { FooterCompanyProps } from "./FooterCompany.types";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

export default function FooterCompany(props : FooterCompanyProps) {

  const { companyId } = props;
  const router = useRouter()
  const onDeleteCompany = async () => {
    try {
      axios.delete(`/api/company/${companyId}`)
      toast({
        title: "Company deleted successfully",
      })
      router.push('/companies')
    } catch (error) {
      toast({
        title: "Error deleting company",
        variant: "destructive"
      })
    }
  }

  return (

    <div className="flex justify-end mt-5">
      <Button variant="destructive" onClick={onDeleteCompany}>
        <Trash className="h-4 w-4 mr-2"/>
        Remove Company
      </Button>
    </div>
  )
}
