<template>
  <app-header></app-header>
  <app-footer></app-footer>
  <app-nav></app-nav>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
import Nav from './nav.vue';

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-nav": Nav
  },
  data() {
    return {

    }
  },
}
</script>
