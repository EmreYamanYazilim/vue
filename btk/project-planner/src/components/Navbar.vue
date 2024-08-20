<template>
  <div>
    <nav class="main-nav">
        <router-link :to="{name:'home'}">Projeler</router-link>
        <router-link :to="{name:'AddProject'}">Proje Ekleme</router-link>
    </nav>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.main-nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  
}

.main-nav a.router-link-exact-active {
  /* color: var(--color-text); */
  color: #864d02;
}



a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

a:first-of-type {
  border: 0;
}
</style>