<template>
  <div>
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

export default {
  components: {
    "show-blog": ShowBlog,
    "add-blog": AddBlog,
    "app-headerIki": HeaderIki,
    "pratik-bilgiler": pratikBilgiler
  },
  data() {
    return {

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
