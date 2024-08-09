<template>
  <header>
  <h1>Sayfamızın başlığı</h1>
  <ul>
    <li v-for="eleman in liste">
      {{ eleman }}
    </li>
  </ul>
</header>
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
header {
  background-color: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
ul li{
  list-style-type: none;
  display: inline-block;
  margin: 5px 10px;
  padding: 5px 10px;

  font-size: 20px;
}
ul li:hover{
  margin: 5px 10px;
  padding: 5px 10px;
  background-color: aliceblue;
  color: #222;
  border-radius: 5px;
  
}
</style>