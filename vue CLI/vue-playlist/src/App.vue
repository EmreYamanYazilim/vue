<template>
  <app-header v-bind:eleman="liste"></app-header>
  <app-nav></app-nav>
  <lokal-global v-bind:lokal="lg"></lokal-global>
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
  },
}
</script>
