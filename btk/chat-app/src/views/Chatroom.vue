<template>
  <div class="chatroom container">
    <Navbar />
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import Navbar from '@/views/Navbar.vue';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import NewChatForm from '@/components/NewChatForm.vue'; 
export default {
  components: { Navbar,NewChatForm },
  setup() {
    const {user} = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'welcome' })
      }
    })
  }
}
</script>

<style scoped>
.chatroom {
  text-align: center;
  padding: 20px 0;
}
</style>