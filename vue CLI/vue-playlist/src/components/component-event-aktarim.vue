<template>
    <div @click="$emit('cleann')"> <!--emit ile bir event oluşturduk bu artık @clik gibi App.vue içinde bize tıklanma sağlayacak  div içindeki sil buttonuna tıkladığımızda çalışacak
        app.vue içindeki diğer parametrelerle beraber 

    <cea  @cleann="temizle">asd</cea> 
    
    yeni oluşturduğum tag ile cleannn eventi oluşturdum bu eventi biz cea.vue içinden emit ile fırlatarak yakaladım  ve temizle adını verdim App.vue içinde moethods içinde
    bu onu yeni bir fn olarak tanımlayaraak refs vererek ref icerigi yakaladım ve silmesini sağladık
    <input type="text" ref="icerik">

        altında  temizle fn oluştararak  cea dışındaki app.vueye ait inputun içindekileri sildirmek içinde kullandım

        methods: {
    temizle() {
      this.$refs.icerik.value="" // refi içerik olan inputu boşaltmak için 
    }
  },
  
  
  
  -->
        <!-- kısa yolu  emiti yakalamk için  alttan methods vererek işlemi yapmak zorunda kalırdık-->
        <button>sil</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    
}
</script>

<style>

</style>