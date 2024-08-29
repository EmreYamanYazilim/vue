<template>
    <div class="">
        <nav v-if="user"> <!-- user varsayı koymazsam hata verip boş döndürüyor-->
            <div>
                <p>Merhaba <span>{{ user.displayName }}</span></p>
                <p class="email">şu anda <span>{{ user.email }}</span> ile oturum açıldı</p>
            </div>
            <button class="pointer" @click="handleClick">Çıkış</button>
        </nav>
    </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';
export default {
    setup() {
        const { error, logout } = useLogout();
        const {user} = getUser();
        const handleClick = async () => {
            await logout();
            if (!error.value) {
                console.log('güvenli çıkış yapıldı');
                
            }
        }
        return { error, handleClick,user }
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
p span {
    color: rgb(4, 3, 65);
    font-weight: 600;
}
</style>