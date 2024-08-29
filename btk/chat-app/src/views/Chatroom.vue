<template>
  <div class="chatroom container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/views/Navbar.vue';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: { Navbar },
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