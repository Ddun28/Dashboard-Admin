"use client"

import { useParams, useRouter } from "next/navigation"
import { FormContactProps } from "./FormContact.types"
import { z } from "zod"
import { formSchema } from "./FormContact.form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Toast } from "@/components/ui/toast"
import { toast } from "@/hooks/use-toast"
import axios from "axios"

export default function FormContact(props: FormContactProps) {
    const { setOpen } = props

    const params = useParams<{companyId: string}>()
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            role: "",
            email: "",
            phone: ""
        }
    })

    const onSubmit = async (values : z.infer<typeof formSchema>) => {
        try {
            axios.post(`/api/company/${params.companyId}/contact`, values)
            toast({
                title: "Contact created successfully",
            })
            router.refresh()
            setOpen(false)
        } catch (error) {
            toast({
                title: "There was an error",
                variant: "destructive"
            })
        }
        
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="md:grid-cols-2 grid gap-4">
            <FormField
             control={form.control}
             name="name"
             render={({field}) => (
                <FormItem>
                    Name
                <FormControl>
                    <Input {...field} type="text" placeholder="Dun"/>
                </FormControl>
                <FormMessage/>
                </FormItem>
                )}
            >

            </FormField>

            <FormField
             control={form.control}
             name="email"
             render={({field}) => (
                <FormItem>
                    Email
                <FormControl>
                    <Input {...field} type="text" placeholder="example@g.com"/>
                </FormControl>
                <FormMessage/>
                </FormItem>
                )}
            >

            </FormField>

            <FormField
             control={form.control}
             name="phone"
             render={({field}) => (
                <FormItem>
                    Phone
                <FormControl>
                    <Input {...field} type="number" placeholder="+58 000 0000000"/>
                </FormControl>
                <FormMessage/>
                </FormItem>
                )}
            >

            </FormField>

            <FormField
             control={form.control}
             name="role"
             render={({field}) => (
                <FormItem>
                <FormLabel>Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the role"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="Comercial">Comercial</SelectItem>
                    <SelectItem value="CEO">CEO</SelectItem>
                    <SelectItem value="Quality">Customer Service</SelectItem>
                    <SelectItem value="Analytics">Analytics</SelectItem>
                    <SelectItem value="Other">Other...</SelectItem>
                </SelectContent>
                <FormMessage/>
                </Select>
                </FormItem>
                )}
            >

            </FormField>

            <Button type="submit">Save Contact</Button>
        </form>
    </Form>
  )
}
