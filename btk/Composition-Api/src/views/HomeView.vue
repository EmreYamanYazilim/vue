<template>
  <div>
    <input type="text" v-model="search">
    <div v-for="day in finded" :key="day.id">
      {{ day }}
    </div>
  </div>
</template>
<script>
import { ref,computed } from 'vue';

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
    const finded = computed(()=> days.value.filter((day) => day.includes(search.value)));
    return { days,search,finded }  
  }
}
</script>
