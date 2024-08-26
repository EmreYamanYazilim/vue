<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Email Adresinizi Giriniz" required v-model="email">
            <input type="password" placeholder="Sifrenizi Giriniz" required v-model="password">
            <button>Giriş yap</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'


export default {
    setup() {
        const email = ref('')
        const password = ref('')
        const handleSubmit = () => {
            console.log( email.value, password.value);

        }


        return { email, password, handleSubmit }
    }
}
</script>

<style></style>