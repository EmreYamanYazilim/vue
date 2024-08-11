<template>
  <h1>
    Slot'lar üzerindek Css işlemleri
  </h1>

  <alt-bilesen>
    asdasd
    <template #form-header>
      <h2>
        Giriş Formu
      </h2>
      <p>Giriş yapabilmek için lütfen formu doldurun</p>
    </template>

    <template #form-elements>
      <label  for="email">E-mail : </label>
      <input type="email" name="email" placeholder="E posta Adersinizi Giriniz">

      <label for="password">Şifre : </label>
      <input type="password" name="password" id="" placeholder="Şifrenizi Giriniz">
    </template>

    <template #form-controls>
      <button>Giriş Yap</button>
    </template>
  </alt-bilesen>




  <h3 v-bind:class="$style.blue">App.vue içinde style ile  module ile css verme  </h3>
  <h3 v-bind:class="xbilesen.green">Appvue içinde style ile  modüle takma isim vererek o takma isim ile  yakalayarak renk verme</h3>
</template>

<script>
import altBilesen from './components/alt-bilesen.vue'

export default {
  components:{
    "alt-bilesen": altBilesen
  },
  data() {
    return {
      
    }
  },
}

</script>

<style scoped>
:deep(input){
 /* sadece alt bileşendeki kodları etkileyen  Css içinde :deep Kullanoyoruz  aksi taktirde  App.vue ana Rotemiz olduğu için tüm sayfayı etkiler  */
}
:global(input){
  /* scoped olsada olmasada  her yerdeki inputu istediğimiz Css'i verir   */
}
</style>

<style module>
/* style içinde modüllerimiz var  bunu kullanabilmek için modül olarak belirtmemiz gerekecek 
v-bind:class="$style.blue"  style içinde bir module olduğunu yakalamk için $style.blue diyerek bağlayarak veriyoruz */
.blue{
  color: blue;
}
</style>

<style module="xbilesen">
      /* v-bind:class = "xbilesen.green"   vererek önce  modüldeki takma ismi sonra içindeki cssi nokta ile birleştirerek veriyoruz*/
  .green{
    color: green;
  }
</style>




<!-- <template>
  <app-header v-bind:eleman="liste"></app-header>
  <app-nav></app-nav>
  <lokal-global v-bind:lokal="lg" v-on:basligiDegistir="updateTitle($event)"></lokal-global>
  <app-footer></app-footer>


</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Nav from './components/nav.vue';

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-nav": Nav,
  },
  data() {
    return {
      liste: ["Anasayfa", "Hakkımızda", "Blog", "İletişim"],
      lg:"primitif değişken",
    }
  },methods: {
    updateTitle:function  (event) {
      this.lg=event
    }
  },
}
</script> -->
