<template>
<div>
  <p>{{ job.name }} - {{ job.job }}</p>
  <button @click="clicked" ref="info">Click</button> <!-- btn ile alakalı olan eventleri özellikleri bana getirir --> 
</div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: "HomeView",
  components: {},
  setup() {
    let job = reactive({
      name: "emre",
      job: "10x hızında öğrenen ve kodlayan bir yazılımcı",
    }); // bize direk yukarıda veriyi vermemize imkan sağlar 
    const clicked = () => {
      job.name = "Senior Developer Emre  YAMAN";
      job.job = "10x hızında öğrenen ve kodlayan bir yazılımcı  ve çok kazanan yazılımcı";
      //  obje olarak döndüğü için obje adı ve içindeki objeleri belirterek göstertiyoruz     
    }
    return{job,clicked,} //  constun altında olacak   değişkenlerimöizi burdan alarak yukarıda gösterebiliyoruz 
// data return yerine setup içinde değişkenlerimizi belirterek kullanabiliyoruz
  }
}

</script>
