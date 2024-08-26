<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="displayName" required placeholder="Kullanıcı Adınızı Giriniz">
            <input type="email" placeholder="Email Adresinizi Giriniz" required v-model="email">
            <input type="password" placeholder="Sifrenizi Giriniz" required v-model="password">
            <button>Kayıt ol</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'


export default {
    setup() {
        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        const handleSubmit = () => {
            console.log(displayName.value, email.value, password.value);

        }


        return { displayName, email, password, handleSubmit }
    }
}
</script>

<style></style>