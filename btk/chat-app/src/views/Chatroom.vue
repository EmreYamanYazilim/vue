<template>
  <div class="chatroom container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/views/Navbar.vue';
export default {
  components: { Navbar }
}
</script>

<style scoped>
.chatroom {
  text-align: center;
  padding: 20px 0;
}
</style>