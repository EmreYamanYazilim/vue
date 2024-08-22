<template>
<div>
  <p>{{ name }} - {{ surname }}</p>
  <button @click="clicked">Click</button>

</div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = "emre";
    let surname = "Yaman";
    // aynı şekilde bir methodda kullanabilioruz  const olarak methodu belirleyerek 
    const clicked = () => {
      console.log("clicked");      
    }
    return{name,surname,clicked} //  constun altında olacak   değişkenlerimöizi burdan alarak yukarıda gösterebiliyoruz 
// data return yerine setup içinde değişkenlerimizi belirterek kullanabiliyoruz
  }
}

</script>
