<template>
  <h1>Header bölündeki h1 scoped özelliği ile headera özel renk atanacak </h1>
  <ul>
    <li v-for="eleman in liste">
      {{ eleman }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      liste: ["Anasayfa", "Hakkımızda", "Blog", "İletişim"],
    }
  },
}
</script>

<style scoped>
h1{
  color: green;
}
</style>