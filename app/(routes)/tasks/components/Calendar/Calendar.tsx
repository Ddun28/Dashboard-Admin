"use client"

import { useRouter } from "next/navigation";
import { CalendarProps } from "./Calendar.types";
import { useEffect, useState } from "react";
import { DateSelectArg, EventAddArg, EventContentArg } from "@fullcalendar/core/index.js";
import { formatDate } from "@/lib/FormData";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import multiMonthPlugin from '@fullcalendar/multimonth'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import ModalAddEvent from "../ModalAddEvent/ModalAddEvent";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export default function Calendar(props : CalendarProps) {

    const {companies, events} = props;
    const router = useRouter();
    const [open, setOpen] = useState(false)
    const [onSaveNewEvent, setOnSaveNewEvent] = useState(false)
    const [selectedItem, setSelectedItem] = useState<DateSelectArg>()
    const [newEvent, setNewEvent] = useState({
        eventName: "",
        companieSelected: {
            name: "",
            id: ""
        }
    })

    const handleDateClick = async (selected: DateSelectArg) => {
        setOpen(true)
        setSelectedItem(selected)
    }

    const handleEventClick = async (selected: any) => {
        if(window.confirm(
            `Desea elimnar este evento ${selected.event.title}`
        )) {
            try {
                await axios.delete(`/api/event/${selected.event._def.publicId}`)
                toast({title: "Event deleted"})       
                router.refresh()         
            } catch (error) {
                toast({
                    title: "Something went wrong",
                    variant: "destructive"
                })
            }
        }
        
    }

    useEffect(() => {
        if (onSaveNewEvent && selectedItem?.view.calendar) {
            const calendarApi = selectedItem.view.calendar;
            calendarApi.unselect();
    
            const newEventPrisma = {
                companyId: newEvent.companieSelected.id,
                title: newEvent.eventName,
                start: new Date(selectedItem.start),
                allDay: false,
                timeFormat: 'H(:mm)'
            };
    
            axios.post(`/api/company/${newEvent.companieSelected.id}/event`, newEventPrisma)
                .then(() => {
                    toast({
                        title: "Evento creado",
                    });
                    router.refresh();
                })
                .catch(error => {
                    toast({
                        title: "Error",
                        variant: "destructive"
                    });
                });
    
            setNewEvent({
                eventName: "",
                companieSelected: {
                    name: "",
                    id: ""
                }
            });
            setOnSaveNewEvent(false);
        }
    }, [onSaveNewEvent, selectedItem, event]);

  return (
    <div>
      <div className="md:flex gap-x-3">
        <div className="w-[200px] relative">
            <div className="overflow-auto absolute left-0 top-0 h-full w-full">
                <p className="mb-3 text-xl">Listado de Tareas</p>
                {events.map((currentEvent) =>(
                    <div key={currentEvent.id} className="p-4 rounded-lg shadow-md mb-2 bg-slate-200 dark:bg-background">
                        <p className="font-bold">{currentEvent.title}</p>
                        <p>{formatDate(currentEvent.start)}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex-1 calendar-container">
            <FullCalendar 
            plugins={[dayGridPlugin, multiMonthPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridDay, timeGridWeek,dayGridMonth, multiMonthYear, ListMonth'
            }}
            height="80vh"
            initialView="dayGridMonth"
            weekends={false}
            events={events}
            eventContent={renderEventContent}
            editable={true}
            selectable={true}
            selectMirror={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            />
        </div>
      </div>
      <ModalAddEvent
        open={open}
        setOpen={setOpen}
        setOnSaveNewEvent={setOnSaveNewEvent}
        companies={companies}
        setNewEvent={setNewEvent}
      />
    </div>
  )
}

function renderEventContent(eventInfo: EventContentArg) {
    return(
        <div className="bg-slate-200 dark:bg-background w-full p-1">
            <i>{eventInfo.event.title}</i>
        </div>
    )
}
