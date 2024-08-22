<template>
  <div>
    <input type="text" v-model="search">
    <div v-for="day in finded" :key="day.id">
      {{ day }}
    </div>
    <button @click="stop">Stop</button>
  </div>
</template>
<script>
import { ref, computed, watch, watchEffect } from 'vue';

export default {
  name: "HomeView",
  components: {},
  setup() {
    const days = ref([
      "pazartesi",
      "salı",
      "çarsamba",
      "persembe",
      "cuma",
      "cumartesi",
      "pazar"]);
    const search = ref('');
    const finded = computed(() => days.value.filter((day) => day.includes(search.value)));

    const watchS = watch(search, () => {
      console.log("Watch çalıştı...");
      
    });
    const watchEfect = watchEffect(() => {
      console.log("WatchEffect days çalıştı...", days.value);
      console.log("WatchEffect search çalıştı...", search.value);
    });
    const stop = () => {
      watchS();
      watchEfect();
    }

    return { days, search, finded, stop }
  }
}
</script>
