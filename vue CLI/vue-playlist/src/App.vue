<template>
  <add-blog></add-blog>
</template>


<script>

import addBlog from './components/add-blog.vue'

export default {
  components: {
    "add-blog": addBlog
  },
  data() {
    return {

    }
  },
}

</script>

<style>
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
