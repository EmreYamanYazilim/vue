<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <!-- <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink> -->

          <!-- attaki  örnek gibi routerlinklerimizideki indexjs içindeki route bölümündeki  namelerden yakalayarak kullanmak için ile  bind etmemiz gerekyior başlarına : koymamız kafi ve içlerine bind ettiğimiz için {name:'home'} şeklinde yine aynı linki çekebiliriz  -->
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>

          <!-- yukarıdaki gibi routerlinklerimizdeki indexjs içindeki route bölümünde routelerinden yakalyarak verebiliriz bunun için yine bind ederek name yerine path koyacağız -->
          <!-- <RouterLink :to="{ path: '/' }">Home</RouterLink>
          <RouterLink :to="{ path: '/about' }">About</RouterLink> -->

          <router-link :to="{ name: 'studentx' }">Öğrenciler</router-link>
        </nav>
<div>
  <span @click="anasayfa">Anasayfa</span>
  <span @click="geri">geri</span>
  <span @click="ileri">ileri</span>
</div>

      </div>
    </header>

    <RouterView />
  </div>
</template>

<script>
export default {
  methods: {
    anasayfa(){
      this.$router.push({name:'home'}) // yukarıdaki click eventleri ile  ana sayfaya direk yönlendireceğiz
    },
    geri(){
      this.$router.go(-1) // go -1 ile geri gecicek
    },
    ileri(){
      this.$router.go(1) // ileri sayfaya gidecek
    }
  },
}
</script>

<style scoped>
span{
  padding: 20px 10px;
  cursor: pointer;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
