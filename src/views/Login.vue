<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <span class="card-title">Авторизация</span>
            <div class="input-field">
                <input
                    id="email"
                    type="text"
                >
                <label for="email">Email</label>
                <!-- <small
                    class="helper-text invalid"
                >
                    Поле Email не должно быть пустым
                </small>
                <small
                    class="helper-text invalid"
                >
                    Введите корректный Email
                </small> -->
            </div>
            
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                >
                <label for="password">Пароль</label>
                <!-- <small
                    class="helper-text invalid"
                >
                    Введите пароль
                </small>
                <small
                    class="helper-text invalid"
                >
                    Пароль должен быть больше
                </small> -->
            </div>
        </div>
        
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                Войти
                <i class="material-icons right">send</i>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import messages from '@/utils/messages.js'

export default {
    name: 'login',
    methods: {
        submitHandler() {
            this.$router.push('/')
        }
    },
    mounted() {
        if (messages[this.$route.query.message]) {
            this.$message(messages[this.$route.query.message])
        }
    }
    
}
</script>