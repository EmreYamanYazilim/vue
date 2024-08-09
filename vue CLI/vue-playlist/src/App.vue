<template>
  <h1>style denemesi</h1>
  <app-header></app-header>
  <app-footer></app-footer>
  <app-nav></app-nav>
  <lokal-global></lokal-global>

</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
import Nav from './nav.vue';

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-nav": Nav,
  },
  data() {
    return {

    }
  },
}
</script>

<style>
h1 {
  color:red;
}
</style>