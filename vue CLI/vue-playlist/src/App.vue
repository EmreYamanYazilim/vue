
<template>
  <p>{{ title }}</p>
  <button v-on:click="baslikDegisir">değiştir</button>

</template>

<script>
export default{
  data() {
    return {
      title:"ilk Vue CLI çalışmam 10x hızında devam",
    }
  },methods: {
    baslikDegisir:function  () {
      this.title = "10x hızında Vue öğrenmeye devam";
    }
  },
}
</script>

