<template>
    <div>
        <!-- <EventWindow v-if="isShowEventWindow" :event="selectedEvent" @close-window="toggleEventWindow" />       
        <AddEventForm v-if="isShowForm" @close-form="toggleForm" :calendar="calendar" /> -->
        <button @click="showModal">Показать окно</button>
        <ModalWindow ref="modal" />
        <div class="calendar">
            <FullCalendar :options="calendarOptions" ref="calendar" /> 
        </div>     
    </div>

</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/ru'
import AddEventForm from '@/components/AddEventForm'
import EventWindow from '@/components/EventWindow'
import ModalWindow from '@/components/ModalWindow'

export default {
    props: ['isOpenSidebar'],
    data() {
        return {
            isShowEventWindow: false,
            isShowForm: false,
            selectedEvent: null,
            calendarOptions: {
                plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                locale: esLocale,
                headerToolbar: {
                    start: 'addEvent today prev,next',
                    center: 'title',
                    end: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                customButtons: {
                    addEvent: {
                        text: 'Добавить событие',
                        click: this.toggleForm
                    }
                },
                events: [
                    {title: 'test', start: '2020-10-10', end: '2020-10-10', type: 'meeting', allDay: true}
                ],
                eventTimeFormat: {
                    hour: 'numeric',
                    minute: '2-digit',
                },
                dateClick: this.toggleForm,
                eventClick: info => {
                    this.toggleEventWindow(info.event)    
                    console.log(info.event)             
                }
            }
        }    
        
    },
    computed: {
        calendar() {
            return this.$refs.calendar.getApi()
        }
    },
    methods: {
        showModal: function () {
                this.$refs.modal.show = true
        },
        toggleForm() {
            this.isShowForm = !this.isShowForm
            // document.body.style.overflow = 'hidden'
        },
        toggleEventWindow(event = null) {
            this.isShowEventWindow = !this.isShowEventWindow
            this.selectedEvent = this.selectedEvent ? null : event
        }
    },
    components: {
        FullCalendar,
        AddEventForm,
        EventWindow,
        ModalWindow
    }    
}
</script>

