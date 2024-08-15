export default {
    computed: {
        // filteredBlogs() {  // 1. yontem en temiz yöntem  yukarıdaki blogs arrayını this ile yakala filtrele takma isim olarak blog ver
        //     return this.blogs.filter((blog) => {
        //         return blog.title.match(this.keyword);  // blog.title.match ile getir neyi getir parantez içindeji this.keyword yaparaka ordaki yazdılarımızı getirerek onları getir dedik ve searchımızı yaptık 
        //     })
        // }
        filteredBlogs() { // 2. yöntem kısa yöntem aynı mantık filter içinde blog diye isimlendirerek return ile dödürerek blog.title.match yani  blog title içindekini bul (this.keyword içindekiyle) dedik
            return this.blogs.filter(blog => blog.title.match(this.keyword)); // yukarıdaki blogs arrayı içindekini filtrele
        }
    }
}
