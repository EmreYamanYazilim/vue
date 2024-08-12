<template>
  <!-- <form-one></form-one>
  <form-two></form-two> -->
  <!-- böylelikle  alt-bilesen.vue içiden referans larak App vue içindeki kodlaromızı form.vueler içne atarak onların taglarını altta belitiğimiz üzere
  import ederek  çağırıp dinamikleştirdik 
  -->

  <!--  şimdi yukarıda görüldüğü gibi böyle gerekli olanı çağırmak için kalıp olan bir component tagımız var bunun içinde is diyerek cağırmak istediğimiz tagı yazıyoruz  aşağıdaki gibi -->

<component is="form-one"></component>  <!-- diikkat  tag otomatik doldurken :is olarak iki noktalı yazıyor  2 noktayı  kaldırman gerek o noktanın amacı v-bind yada başka bişi önüne yazılabilir diye ototmatik geliyor  -->



<!-- şimdi bunu dinamik hala getirelim alttaki gibi  -->
 <!--  keep alive   yazılanları hafızada tutmaya yaruyor aşağıda  2 button ve 2 farklı sayfa oluşturduk tıkladığında o sayfalara gidicek 
   keep alive sayesinde  biz  1. sayfada bişi yazıp 2. sayfaya tıkladığımızda  yazdığımız verilerin  kaybolmadan orda tutulmasını  sağlıyor
   keep alive yazılmamış olsaydı button ile sayfa değiştirdiğimizde yazdıklarımız silinirdi
   dinamik compomentimizi onun içinde tutuyoruz-->
<keep-alive> 
  <component v-bind:is="compGidis"></component> 
 </keep-alive>
<!-- v-bind yaparak return daki veriyi çekmek için  istekte bulunuyorz  böylelikle compGidisi dinamik yaptık  alttaki hangi buttona tıklarsak ordaki veriyi otoaiatk olarak 
 yukarıdaki component içinde is içine bize verecek   is eşitliği bize -->

<button v-on:click="compGidis='form-one'">Form 1</button>
<button v-on:click="compGidis='form-two'">Form 2</button>

</template>

<script>
import formOne from './components/form-one.vue'
import formtwo from './components/form-two.vue'

export default {
  components: {
    "form-one": formOne,
    "form-two": formtwo
  },
  data() {
    return {
        compGidis:'form-one',
        compGidis:'form-two'
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
