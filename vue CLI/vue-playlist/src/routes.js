 import { createRouter, createWebHistory } from "vue-router"; // yüklediğimiz yeri çağırıyoruz {} içindede 

 import showBlog from "./components/show-blog.vue"; // routelerini yayınlayacağımız yerleri import ediyoruz
 import addBlog from "./components/add-blog.vue";
 import singleBlog from "./components/single-blog.vue"
 import pratikBilgiler from "./components/pratik-bilgiler.vue"

 const router = createRouter({ // linklerini belirtmek için eklememizi yapıyoruz
     history: createWebHistory(),
     routes: [
         { path: "/", component: showBlog },
         { path: "/ekle", component: addBlog },
         { path: "/blog/:id", component: singleBlog },
         { path: "/pratik", component: pratikBilgiler }

     ]
 });

 export default router // bu tanımladıklarımızı göstermesi için routaları tanıtmak için bu kodu kullanıyoruz