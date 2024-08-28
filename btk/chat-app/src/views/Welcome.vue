<template>
    <div class="welcome container">

        <div v-if="showLogin">
            <h2>Giriş</h2>
            <LoginForm @login="enterChat"></LoginForm>
            <p>Hesabınız yok mu ? <span @click="showLogin = false">Kayıt ol</span></p>
        </div>
        <div v-if="!showLogin">
            <SingupForm @signup="enterChat"></SingupForm>
            <p>Hesabınız var mı ? <span @click="showLogin = true">Giriş yap</span></p>
        </div>
    </div>
</template>

<script>
import SingupForm from '@/components/SingupForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: { SingupForm, LoginForm },
    setup() {
        const showLogin = ref(true);
        const router = useRouter();
        const enterChat = () => {
            router.push({ name: 'chatroom' })
        }

        return { showLogin,enterChat }
    },


}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}

.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #ddd;
    font-weight: 600;
    outline: none;
    color: #777;
    margin: 10px auto;
}

.welcome span {
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button {
    margin: 20px auto;
}
</style>