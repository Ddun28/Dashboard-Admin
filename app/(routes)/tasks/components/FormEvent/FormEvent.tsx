"use client";

import { z } from "zod";
import { FormEventProps } from "./FormEvent.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  eventName: z.string().min(2),
  companieSelected: z.object({
    name: z.string().min(2),
    id: z.string()
  })
});

export default function FormEvent(props: FormEventProps) {
  const { companies, setNewEvent, setOnSaveNewEvent, setOpen } = props;
  const [selectedCompany, setSelectedCompany] = useState({
    name: "",
    id: ""
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      companieSelected: {
        name: "",
        id: ""
      }
    }
  });

  const handleCompanyChange = (newValue: string) => {
    const selectedCompany = companies.find((company) => company.name === newValue);
    form.setValue("companieSelected.id", selectedCompany?.id || "");
    form.setValue("companieSelected.name", newValue);
    setSelectedCompany({
      name: newValue,
      id: selectedCompany?.id || ""
    });
    setNewEvent((prev) => ({
      ...prev,
      companieSelected: {
        name: newValue,
        id: selectedCompany?.id || ""
      }
    }));
    console.log("Selected Company:", selectedCompany);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          setNewEvent((prev) => ({
            ...prev,
            eventName: data.eventName
          }));
          setOnSaveNewEvent(true);
          setOpen(false);
        })}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Event Name" />
              </FormControl>
              <FormDescription>This is the event name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companieSelected.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <Select
                onValueChange={(newValue) => {
                  field.onChange(newValue);
                  handleCompanyChange(newValue);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a company" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem key={company.id} value={company.name}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>This is the company name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create event</Button>
      </form>
    </Form>
  );
}