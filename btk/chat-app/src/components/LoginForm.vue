<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Email Adresinizi Giriniz" required v-model="email">
            <input type="password" placeholder="Sifrenizi Giriniz" required v-model="password">
            <div class="error" v-if="error"> {{  error }}</div>
            <button>Giriş yap</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import uselogin from '@/composables/useLogin'

export default {
    setup() {
        const email = ref('')
        const password = ref('')
        const {error ,login} = uselogin()
        const handleSubmit =  async () => {
            await login(email.value,password.value);
            if (!error.value) {
                console.log("login oldu");  
            }
        }
        return { email, password, handleSubmit,error }
    }
}
</script>

<style></style>