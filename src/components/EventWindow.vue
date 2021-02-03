<template>
    <div class="modal-event-window">
        <div class="modal-dialog">
            <div class="card modal-card">
                <div class="modal-content card-content">
                    <div class="modal-head">
                        <span class="modal-title card-title">Данные о событии</span>
                        <i class="tiny material-icons" @click="$emit('close-window')">close</i>
                    </div>
                        <div class="modal-body">
                            <ul>
                                <li>
                                    <label for="title">Название:</label>
                                    <span id="title">{{ event.title }}</span>
                                </li>
                                <li>
                                    <label for="type">Тип:</label>
                                    <span id="type">{{ event.extendedProps.type }}</span>
                                </li>
                                <li>
                                    <label for="description">Описание:</label>
                                    <span id="description">{{ event.extendedProps.description }}</span>
                                </li>
                                <li>
                                    <label for="allday">Событие на весь день:</label>
                                    <span id="allday">{{ event.allDay ? 'Да' : 'Нет' }}</span>
                                </li>
                                <li>
                                    <label for="eventStart">Дата начала:</label>
                                    <span id="eventStart">{{ event.start }}</span>
                                </li>
                                <li>
                                    <label for="eventEnd">Дата окончания:</label>
                                    <span id="eventEnd">{{ event.end }}</span>
                                </li>
                                <li>
                                    <label for="timeStart">Время начала:</label>
                                    <span id="timeStart">{{ event.start }}</span>
                                </li>
                                <li>
                                    <label for="timeEnd">Время окончания:</label>
                                    <span id="timeEnd">{{ event.end }}</span>
                                </li>
                                <li>
                                    <label for="participantList">Список участников:</label>
                                    <span id="participantList">{{ event.extendedProps.participantList }}</span>
                                </li>
                                
                            </ul>
                        </div>
                </div>
                           
        
                <div class="card-action">
                    <div class="card-buttons">
                        <button
                            class="btn btn-edit-event waves-effect waves-light"
                            type="button"
                        >
                        Редактировать
                        </button>
                        <button
                            class="btn light-blue accent-4 waves-effect waves-light"
                            type="button"
                        >
                        Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>         
    </div>
</template>

<script>
export default {
    props: ['event']
}
</script>

<style  scoped>
    .modal-event-window {
        position: absolute; 
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
        padding-top: 2rem;
    }

    .modal-card {
        width: 700px;
    }

    .modal-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-buttons {
        display: flex;
        justify-content: flex-end;
    }

    .btn-edit-event {
        margin-right: 10px;
    }
</style>