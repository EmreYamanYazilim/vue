<template>
  <div>
    <h3>Öğrenci Bilgi Sayfası</h3>
    <p>öğrenci ID : {{ $route.params.id }}</p>
    <!-- sadece  $route yazarsak içinde yazabiliceğimiz tüm parametreleri bize gösterir  paramstan id vererek biz routeden gelen idsini yakalyabiliyoruz -->
     <p>Öğrenci ID: 2. yöntem {{ studentsID }}</p>
     <!-- 2. yöntem olarak  data içinden değişken tanımlayarak this ile yukrıda yazdılarımızı çekebiliriz -->
     <p>Öğrenci ID: 3. yöntem {{ id }}</p> 
     <!-- props ile yakalama  -->
  </div>
</template>

<script>
export default {
    props: ["id"],  // datadan yakalayabilidğimiz gibi direk burdan props ilede yakalayabiliriz bunun için index.js içindeki yere props:true yapmamız gerek
    data() {
        return {
            // studentsID: this.$route.params.id,
        }
    },
}
</script>

<style>

</style>