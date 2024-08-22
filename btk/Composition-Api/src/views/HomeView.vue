<template>
<div>
  <p>{{ name }}</p>
  <button @click="clicked" ref="info">Click</button> <!-- btn ile alakalı olan eventleri özellikleri bana getirir --> 
  <input type="text" v-model="name"> <!-- yine aynı şekilde input içindede click yaptığımda yazıyı değiştirebiliyoruz-->
</div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = ref("emre");
    const clicked = () => {
      name.value ="Senior Developer Emre YAMAN"; // veriyi dğeiştirmek istediğimizde  ve yukarıda göstermek istedğimide değşkene tanımlarken ref parantezinde tanımlayarak yukarıda göstermemiz içinde turn içinde değişkenin adını veriyoruz  akabinde değiştirmek istediğimiz dğeişkeni  clicked fn içinde name.value ="" yazarak değiştirmek istediğimiz değeri ekliyoruz  böylelikle button tıklandığında değişecek
      console.log(name, name.value);
      
      
    }
    return{name,clicked,} //  constun altında olacak   değişkenlerimöizi burdan alarak yukarıda gösterebiliyoruz 
// data return yerine setup içinde değişkenlerimizi belirterek kullanabiliyoruz
  }
}

</script>
