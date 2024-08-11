<template>
  <h1>
    Slot'lar
  </h1>

  <alt-bilesen>
    <template #icerik>
      <p>bu alt bilesene gönderilecek metindir</p>
    </template>
    <template #baslik>
      <h2>bu alt bilesene gönderilecek baslıktır</h2>    </template>
  </alt-bilesen>
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
