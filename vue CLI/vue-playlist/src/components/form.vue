<template>
  <form action="">
    <input type="text" v-model="text"> <!-- v model ile 2 yönlü bağlanma v model ile aynı zamanda bind etmiş olyporuz ve değişkeni input içine yazdırabiliyoruz-->
    <p>{{ text }}</p> <!-- inputta yazdıklarımız  p içindede yazılacak  direk value olarak alacak-->
  </form>
</template>

<script>
export default {
    data() {
        return {
            text:'deneme',
        }
    }
}
</script>

<style>

</style>