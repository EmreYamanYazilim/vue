<template>
    <div id="add-blog"> <!-- idler sadece css için-->
        <h2>yeni blog post ekelem formu</h2>
        <form action="#">
            <label for="title">Blog baslıgı </label>
            <input type="text" v-model="title" required>
            <!-- vmodel tittle yazarak return içinde boş bıraktığımız  değişkeni altta tıranaklar içinde yazdırdırmamız için -->
            <label for="content">blog iceriği</label>
            <textarea v-model.lazy="content"></textarea>
            <!-- modellerin metodları var misal v-model.lazy yaparksak  ben inputtan cıktıktan sonra ekrana yazdırır -->


            <!-- checkboxlarımız -->
            <div id="checkboxes">
                <label for="pey">Pey hay</label>
                <input type="checkbox" value="peyhay" v-model="blog.categories">

                <label for="pey">pey önce</label>
                <input type="checkbox" value="peyon" v-model="blog.categories">

                <label for="pey">ilk vahiy</label>
                <input type="checkbox" value="vahiy" v-model="blog.categories">

                <label for="pey">mekke fethi</label>
                <input type="checkbox" value="fetih" v-model="blog.categories">
            </div>
            <ul>
                <li v-for="category in blog.categories">
                    {{ category }}
                </li>
            </ul>

            <!-- select bölümü -->
            <h2>yazarlar</h2>
            <select v-model="blog.yazar">
                <option value="">Lütfen yazar seçin</option>
                <option v-for="yazar in authors" v-bind:value="yazar">
                    {{ yazar }}
                </option>
            </select>
            <p>yazar : {{  blog.yazar }} </p>



        </form>
        <div id="preview">
            <h3>blog ön izleme</h3>
            <p>blog baslığı : {{ title }}</p>
            <!-- retunrda değişken olarak belirtik içini boş bıraktık v-model yaparak yazılan veriyi direk ekranra yazdırmasını isteyeceğiz-->
            <p>blog içeriği : {{ content }}</p>
            <p>blog içeriği2 : {{ blog.title2 }}</p>
        </div>

    </div>
</template>


<script>

export default {
    data() {
        return {
            title: "",
            content: "",
            //  burdakileri tek bir blog halinde yapmaamız daha doğru olur alttaki gibi blog modeli oluşturuyoruz  icerisnde değişkenlerimizi veriririz
            blog: {
                title2: "",
                content2: "",
                // bunu yazdırabilmek için şekklli parantezler içinde önce blog sonra değşken şeklinde  blog.title  yazmamız gerek 
                // aynı şekilde {{ blog.title2 }}  ve  modal içindede direk title değil blog.title
                categories: [

                ],
            // normalde yazarlar ve authorsu blog içinde yapmamız daha güzel olurdu blog.yazarlar diyerek yaklayabilirdik
            yazar:"",// bu değişkeni selec ten seçilenleri getirmesi içine veri depolamak için oluşturoyurum v-bind:value="" den verdiğim değeri  select içinde v-model ile yakalayarak  alıyorum
            },
            authors: [
                "muhammed", "ahmet", "mehmed", "geylani", "muhiddin", "mahmud", "emre"
            ], // yazarların databaseden gelen verisi olmadığı için veriyi burdan kendimiz oluşturuyoruz sonra bunuda v-model yaparak valueden alduğumız veriyi  yukarıda blog içindeki yazar boş değişkene atıyoruz
        }
    },
}



</script>

<style scoped>
#add-blog * {
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"],
textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

#preview {
    padding: 10px 20px;
    bottom: 1px dotted #ccc;
    margin: 30px 0;
}

h3 {
    margin-top: 10px;
}


#checkboxes {
    display: inline-block;

}

#checkboxes label {
    display: inline-block;
}

#checkboxes input {
    margin-right: 25px;
}
</style>