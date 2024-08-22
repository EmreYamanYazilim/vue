<template>
  <div>
    <Contents :iceriklerim="icerik"></Contents>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue';
import  Contents  from '../components/Content.vue';

export default {
  name: "HomeView",
  components: { Contents },
  setup() {
    const icerik = ref([
      { id: 1, title: "Deneme1", details: "detay1" },
      { id: 2, title: "Deneme2", details: "detay2" },
      { id: 3, title: "Deneme3", details: "detay3" },
      { id: 4, title: "Deneme4", details: "detay4" }
    ]);
    return { icerik}
    
  }
}
</script>
