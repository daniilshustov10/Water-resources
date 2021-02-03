<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal-card card">
            <div class="modal-head">
                <div class="modal-title">
                    <slot name="title">
                        <h4>Заголовок</h4>
                    </slot>
                </div>
                <div class="modal-close" @click="closeModal"><i class="tiny material-icons">close</i></div>                
            </div>
            <div class="modal-content card-content">
                <slot name="body">                
                    Контент модального окна                           
                </slot>
            </div>
            <div class="modal-footer card-action">
                <slot name="footer">                    
                   <a class="waves-effect waves-light btn" @click="closeModal">Oк</a>              
                </slot>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        name: "ModalWindow",
        data: function () {
            return {
                show: false
            }
        },
        methods: {
            closeModal: function () {
                this.show = false
            }
        }
    }
</script>
 
<style scoped>
    .modal-shadow {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;  
        background: rgba(0,0,0,0.5);
        z-index: 1050;
    }

    .modal-card {
        max-height: 80%;
        width: 600px;  
        margin: 0 auto;
        margin-top: 30px;
        overflow-y: auto;       
    }

    .modal-head {
        padding: 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    } 

    .modal-footer {
        text-align: right;
    }
</style>