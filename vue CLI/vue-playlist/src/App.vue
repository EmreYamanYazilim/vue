<template>
  <div>
    <cea  @cleann="temizle">asd</cea> <!-- yeni oluşturduğum tag ile cleannn eventi oluşturdum bu eventi biz cea.vue içinden emit ile fırlatarak yakaladım  ve temizle adını verdim App.vue içinde moethods içinde
    bu onu yeni bir fn olarak tanımlayaraak refs vererek ref icerigi yakaladım ve silmesini sağladık-->
    <input type="text" ref="icerik">


    <Propsss :deneme="title1" :deneme2="title2"></Propsss>
    <app-headerIki></app-headerIki>
    <router-view></router-view>
    <!--  componentler içindeki tagları yazmak yerine artık bu tagı yazıyoruz hepsini gösteriyor -->
  </div>
</template>



<script>

import ShowBlog from './components/show-blog.vue'
import AddBlog from './components/show-blog.vue'
import HeaderIki from './components/headerheader.vue'
import pratikBilgiler from "./components/pratik-bilgiler.vue"
import Propsss from "./components/propsss.vue"
import cea from './components/component-event-aktarim.vue'

export default {
  components: {
    "show-blog": ShowBlog,
    "add-blog": AddBlog,
    "app-headerIki": HeaderIki,
    "pratik-bilgiler": pratikBilgiler,
    Propsss, // direk olarak  components içinden imiport ettiğimiz  adı verebiliriz takma at yukarıdakiler gibi bu direk o form öncesindeki takma adımızla yukarıda tag açabiliyoruz
    cea
  },
  data() {
    return {
      title1: "üst tarafa veri çekmek için kullanacağım ",
      title2:"burdai değişkeni üst tarafa yani propsss.vue içine veri çekmek ve kullanmak için  burdaki propsss tagı içinde bind sonrası değişken adımızıbelirttik= içinede burdaki değişkenimizi vererek bağladık  bind sonrası oluşan bu değişken adını propss.vue  içinde props:[] içinde tanımlayarak yakaladık ve o  componenttede burdan gelen değişkeni kullanabildik "
    }
  },
  methods: {
    temizle() {
      this.$refs.icerik.value="" // refi içerik olan inputu boşaltmak için 
    }
  },
}

</script>

<style></style>







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
