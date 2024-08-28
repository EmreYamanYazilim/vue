<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="displayName" required placeholder="Kullanıcı Adınızı Giriniz">
            <input type="email" placeholder="Email Adresinizi Giriniz" required v-model="email">
            <input type="password" placeholder="Sifrenizi Giriniz" required v-model="password">
            <div class="error" v-if="error">{{ error }}</div> 
            <button>Kayıt ol</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import useSignup from '@/composables/useSingup';

export default {
    setup() {
        const {error,signup} = useSignup() // composable useSingup.js içindeki fn ile  Auth işlemelerini vermek için çektik eroor ve signup'u useSignup içinden return ederek fn içinde yakladım
        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        const handleSubmit = async () => {
            await signup(email.value, password.value,displayName.value)

        }
        return { displayName, email, password, handleSubmit,error }
    }
}
</script>

<style>
</style>