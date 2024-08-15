<template>
    <div id="show-blogs">
        <h1>Tüm blog Gönderileri</h1>
        <div v-for="blog in blogs" class="single-blog">
            <h2>{{ blog.id }} - {{ blog.title }}</h2>
            <p>{{ blog.body }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],

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
