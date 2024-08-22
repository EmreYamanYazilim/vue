<template>
<div>
  <p>{{ name }} - {{ surname }}</p>
  <p ref="info">Deneme</p>  <!-- bize p tagıyla beraber deneme yazsının getirir -->
  <button @click="clicked" ref="info">Click</button> <!-- btn ile alakalı olan eventleri özellikleri bana getirir --> 

</div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = "emre";
    let surname = "Yaman";
    // aynı şekilde bir methodda kullanabilioruz  const olarak methodu belirleyerek 
    const clicked = () => {
      console.log(info, info.value);
      // info ile  bana bir obje döndürüyor  obje içinde direk null olduğunuda görebiliriz  info value direk null döndürüyor     
    }
    const info = ref(null)// varsayılan boş olarak belirkedim
    return{name,surname,clicked,info} //  constun altında olacak   değişkenlerimöizi burdan alarak yukarıda gösterebiliyoruz 
// data return yerine setup içinde değişkenlerimizi belirterek kullanabiliyoruz
  }
}

</script>
