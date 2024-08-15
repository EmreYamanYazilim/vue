<script setup>
const vRainbow = { // vRainbow yazmamızdaki maksat h2 içinde v-rainbow manasında yazılabilmesi içindir  camelCase ile yazılınca küçük harf ile büyük harf arasında tre olacak şejkilde vue anlıyor
    mounted: (el) => {// objem mounted olduğu zmanda  rainbow elelemntin styleinerenk olarka rastgele sayı ver  string içinde göster slice ile 6 hanesini alarak
        el.style.color = '#'+Math.random().toString().slice(2,8)
    }
}
</script>

<template>
    <div id="show-blogs">
        <h1>Tüm blog Gönderileri</h1>
        <input type="text" placeholder="Bloglarda ara" v-model="keyword" >
        <div v-for="blog in filteredBlogs" class="single-blog">
             <h2 v-rainbow>{{ blog.id }} - {{ blog.title.toUpperCase() }}</h2> <!-- 1. yöntem olarak yaparak yazıları büyütebiliyirz -->
            <h2 v-rainbow>{{ blog.id }} - {{ buyut(blog.title) }}</h2> <!-- 2.yöntem olarak  methods içinde bir metod kllanarak yapabliriz ve blog.title'yi içinde gösteririz-->
            <h2 v-rainbow>{{ blog.id }} - {{ buyutComputed(blog.title) }}</h2> <!-- 3.yöntem  olarak computed içinde fn belireterek  retun dönerek dönücek olanı yakalamsı için title arrow vererek touppercase yapabiliriz   -->
            <router-link v-bind:to=" '/blog/' + blog.id"><h2  v-rainbow>{{ blog.id }} - {{  $filters.buyutFilters(blog.title) }}</h2></router-link>  <!-- 4. yöntem olarak global olarak main.js içiden config.globalProperties. yaparak dolar işareti ile bir obje belirledik ve bu obje içinde fn yaparak bunu return ettirek bu return sonucunda nye yapmak istediğimizi gösterdik  ve yanda parantez içinde return eden değişkenimizi yazarak  global olarak her yerde kullanabileceğimiz büyütme işlemini yapabiliriz  -->
            <!--  v-bind ile değişkenim olan blog.id yakalamak için verdim to zaten url alanıdır "" içinde  tek tırnak vererek ana alanı  +  ile değişkenimizi verdik böylelikle dinamik oldu
            linki tıklana bilir hale getirmek için vbind ve link haline getirebilmek için router-link kullnarak to dan url göstereceğim -->
            <p>{{ blog.body }}</p>
        </div>
    </div>
</template>

<script>
import mixinsss from '../mixins'

export default {
    data() {
        return {
            blogs: [],
            keyword:""

        }
    },
    methods: {
        buyut:function  (title) {
            return title.toUpperCase();
        }
    },
    computed: {
        buyutComputed(){
            return (title) => title.toUpperCase();
        }
    },
    created() { // henüz işlem created olmadan önce işlemi yapmak için  get işleminde  fetch'i burda kullanyoruz

        self = this;
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'get',
            header: { // genelde kimlik doğrulama için yollanır
                'Content-Type': 'content/type'
            },

        })// urleden veriyi getitir
            .then((res) => res.json()) // ilk then gelen veriyi json formatına çevirir
            //.then((json) => (data.value = json)) // 2. then artık verilere doğrudan erişebiliyorum istersek bunu fn method ile yazaabiliriz şimdi bbunu yorum satırına alarak altta öyle yapalım
            .then(function (json) {
                console.log(json);
                self.blogs = json.slice(0, 10);  // aslında disin içindeki blogs u jsona eşitle demiş olduk 
            })
            //.catch((err) => (error.value = err)) // hataları gösterdiğimiz bölüm fn olarak alttaki gibide kullanabilriz
            .catch(function (err) {
                console.log(err);
                self.blogs = json;

            });
    },
    mixins: [mixinsss],
    
}
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: antiquewhite;
}
</style>
