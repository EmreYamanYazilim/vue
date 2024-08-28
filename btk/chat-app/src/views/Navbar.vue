<template>
    <div class="">
        <nav>
            <div>
                <p>Merhaba 'DisplayName'</p>
                <p class="email">şu anda 'Email' ile oturum açıldı</p>
            </div>
            <button class="pointer" @click="handleClick">Çıkış</button>

        </nav>
    </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
export default {
    setup() {
        const { error, logout } = useLogout();
        const handleClick = async () => {
            await logout();
            if (!error.value) {
                console.log('güvenli çıkış yapıldı');
                
            }
        }
        return { error, handleClick }
    }

}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
    text-align: left;
}

nav p.email {
    font-size: 14px;
    color: #888;
}
.pointer{
    cursor: pointer;
}
</style>