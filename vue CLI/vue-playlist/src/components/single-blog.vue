<script setup>
const vRainbow = { // vRainbow yazmamızdaki maksat h2 içinde v-rainbow manasında yazılabilmesi içindir  camelCase ile yazılınca küçük harf ile büyük harf arasında tre olacak şejkilde vue anlıyor
    mounted: (el) => {// objem mounted olduğu zmanda  rainbow elelemntin styleinerenk olarka rastgele sayı ver  string içinde göster slice ile 6 hanesini alarak
        el.style.color = '#' + Math.random().toString().slice(2, 8)
    }
}
</script>

<template>
    <div id="single-blog"> 
        <h2 v-rainbow>{{ $filters.buyutFilters(blog.title) }}</h2>
        <p>{{ blog.body }}</p>
    </div>
</template>

<script>
import mixinsss from '../mixins'

export default {
    data() {
        return {
            id: this.$route.params.id, // routedeki paramtrelerdeki idyi buna eşitle
            blog: {}

        }
    },
    created() { // henüz işlem created olmadan önce işlemi yapmak için  get işleminde  fetch'i burda kullanyoruz

        self = this;
        fetch("https://jsonplaceholder.typicode.com/posts/" + self.id, { // self.id yaparak yukarıdaki yakaladığım id ile link devamında onu ekleyeceğim
            method: 'GET',
            header: { // genelde kimlik doğrulama için yollanır
                'Content-Type': 'content/type'
            },
            // urleden veriyi getitir
            }).then((res) => res.json()) // ilk then gelen veriyi json formatına çevirir
            //.then((json) => (data.value = json)) // 2. then artık verilere doğrudan erişebiliyorum istersek bunu fn method ile yazaabiliriz şimdi bbunu yorum satırına alarak altta öyle yapalım
            .then(function (json) {
                console.log(json);
                self.blog = json;  
                //.catch((err) => (error.value = err)) // hataları gösterdiğimiz bölüm fn olarak alttaki gibide kullanabilriz
            }).catch(function (err) {
                console.log(err);
                self.blog = json;

            });
    },
    mixins: [mixinsss],

}
</script>

<style></style>
