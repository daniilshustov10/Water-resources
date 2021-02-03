<template>
    <div class="modal-add-event">
        <div class="modal-dialog">
            <form class="card modal-card" @submit.prevent="submitHandler">
                <div class="modal-content card-content">
                    <span class="modal-title card-title">Добавить событие</span>
                        <div class="modal-body">
                            <div class="input-field">
                                <select ref="select" v-model="type">
                                    <option value="Видеоконференцсвязь">Видеоконференцсвязь</option>
                                    <option value="Совещание">Совещание</option>
                                    <option value="Встреча/переговоры">Встреча/переговоры</option>
                                    <option value="Прием выполненных работ">Прием выполненных работ</option>
                                    <option value="Отпуск/Отгул">Отпуск/Отгул</option>                                 
                                </select>
                                <label>Тип</label>
                            </div>

                            <div class="input-field">
                                <input id="title" type="text" class="validate" v-model="title">
                                <label for="title">Название</label>
                            </div>

                            <div class="input-field">
                                <input id="participants" type="text" class="validate" v-model="participant" v-on:keypress.enter.prevent="addParticipant(participant)">
                                <label for="participants">Участники</label>
                            </div>

                            <div class="participant-list" v-if="participantList.length">
                                <div 
                                    class="participant-item" 
                                    v-for="participant in participantList"
                                    :key="participant"                        
                                >
                                    <div class="participant-data">{{ participant }}</div>
                                    <i class="material-icons" @click="removeParticipant(participant)">delete</i>
                                </div>
                            </div>

                            <p>
                                <label>
                                    <input type="checkbox" class="filled-in" v-model="allDay" />
                                    <span>Событие на весь день</span>
                                </label>
                            </p>

                            <div class="date-event">
                                <label for="dateFrom">Дата начала</label>  
                                <input id="dateFrom" type="text" ref="datepickerFrom" class="datepicker">
                                                               
                                <label for="dateTo">Дата окончания</label> 
                                <input id="dateTo" type="text" ref="datepickerTo" class="datepicker">                                
                            </div>

                            <div class="time-event" v-if="!allDay">
                                <div class="input-field add-time">
                                    <input id="timeFrom" type="text" class="validate" v-model="timeStart">
                                    <label for="timeFrom">Время начала</label>
                                </div>

                                <div class="input-field add-time">
                                    <input id="timeTo" type="text" class="validate" v-model="timeEnd">
                                    <label for="timeTo">Время окончания</label>
                                </div>
                            </div>                           

                            <div class="input-field">
                                <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
                                <label for="description">Описание события</label>
                            </div>
                        </div>
                </div>
        
                <div class="card-action">
                    <div class="card-buttons">
                        <button
                            class="btn btn-add-event waves-effect waves-light"
                            type="submit"
                        >
                        Добавить
                        </button>
                        <button
                            class="btn btn-close-form light-blue accent-4 waves-effect waves-light"
                            type="button"
                            @click="$emit('close-form')"
                        >
                        Закрыть
                        </button>
                    </div>
                </div>
            </form>
        </div>         
    </div>
</template>

<script>
import colorsEvent from '@/utils/colorsEvent.js'
import dateFilter from '@/utils/dateFilter.js'

export default {
    props: ['calendar'],
    data: () => ({
        type: '',
        participant: '',
        participantList: [],
        allDay: true,
        title: '',
        description: '',
        dateStart: null,
        dateEnd: null,
        timeStart: '',
        timeEnd: '',
        i18nDatepicker: {
                cancel: 'Отмена',
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                monthsShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                weekdays: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
                weekdaysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                weekdaysAbbrev:	['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        i18nTimepicker: {
            cancel: 'Отмена',
            done: 'OK'
        }
    }),
    methods: {
        addParticipant(participant) {
            this.participantList.push(participant)
            this.participant = ''
        },
        removeParticipant(participant) {
            this.participantList = this.participantList.filter(p => p !== participant)
        },
        submitHandler() {
            this.calendar.addEvent({
                title: this.title,
                allDay: this.allDay,
                start: dateFilter(this.allDay, this.dateStart.date, this.timeStart),
                end: dateFilter(this.allDay, this.dateEnd.date, this.timeEnd),
                color: colorsEvent[this.type],
                participantList: this.participantList,
                description: this.description,
                type: this.type
            })
            this.$emit('close-form')          
        }
    },
    mounted() {
        M.FormSelect.init(this.$refs.select)

        this.dateStart = M.Datepicker.init(this.$refs.datepickerFrom, {
            i18n: this.i18nDatepicker
        })
        this.dateEnd = M.Datepicker.init(this.$refs.datepickerTo, {
            i18n: this.i18nDatepicker
        })       
    }
}
</script>

<style scoped>
    .modal-add-event {
        position: fixed; 
        overflow: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
        z-index: 1050;
    }
    .modal-dialog {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .modal-card {
        width: 700px;
    }

    .card-buttons {
        display: flex;
        justify-content: flex-end;
    }

    .btn-add-event {
        margin-right: 10px;
    }

    .modal-body {
        padding: 1.5rem;
    }

    .participant-list {
        padding: 1rem 0;
    }

    .participant-item, .date-event, .time-event {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .add-time {
        width: 48%;
    }
</style>

