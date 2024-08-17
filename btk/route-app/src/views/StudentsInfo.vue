<template>
  <div>
    <h3>Öğrenci Bilgi Sayfası</h3>
    <p>öğrenci ID : {{ $route.params.id }}</p>
    <!-- sadece  $route yazarsak içinde yazabiliceğimiz tüm parametreleri bize gösterir  paramstan id vererek biz routeden gelen idsini yakalyabiliyoruz -->
     <p>Öğrenci ID: 2. yöntem {{ studentsID }}</p>
     <!-- 2. yöntem olarak  data içinden değişken tanımlayarak this ile yukrıda yazdılarımızı çekebiliriz -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            studentsID: this.$route.params.id,
        }
    },
}
</script>

<style>

</style>