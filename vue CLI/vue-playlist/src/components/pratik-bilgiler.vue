<!-- 
v-bind:value=""  yada  :value="" ile aynı işi yapar
html tagına bir attrebutune  veri göndermek için kullanılıyor

v-on  
bir eventi dinlemek istediğimizde  misal v-on:click="" seklinde kullanılır  
@click  yapmamızda yeterlidir anı anlama gelir 


klasörlar  arasında gezmek için .. ./ kullanmak yerine 
öğrneğin asset klasörüne ulaşmak için  @/asset/ şeklinde direk oraya ulaşabiliriz

-->

<template>
    
    <div>
        <a v-bind:target="target" v-bind:href="link">asdasd</a>
        <br>
        <a :target="target" :href="link">asdad</a>
                <!-- vbind ile href içindeki link diye verdiğim değişken değerini yakalmak için verdim -->

        <button v-on:click="guncelle">Güncelle</button>
        <button v-on:click="guncelle2">Güncelle</button>
        <!-- click içine guncelle diye bir method belirledim  altta method içinde  this.link diyerek on yakladım eşitliği değiştirdim -->
    </div>

    <div>
        <img src="../assets/favicon.ico" alt="">
        <!--  yazmak yerine @ işareti koyarak direk ordan gösterebiir  @ işaretini hangi kök dizninin altına koyayrask ona göre kendi yolunu bulur  -->
          <img src="@/assets/favicon.ico" alt="">
     

    </div>
</template>


<script>
export default {
    data() {
        return {
            link: "https://www.google.com",
            target: "_blank"
        }
    },methods: {
        guncelle(){  // hem functionlu hem fn suz yazabiliriz
            this.link = "https://www.youtube.com"
        },
        guncelle2: function  () {
            this.target="self"
        }
    },
}
</script>