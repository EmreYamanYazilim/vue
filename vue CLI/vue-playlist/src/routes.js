 import { createRouter, createWebHashHistory } from "vue-router"; // yüklediğimiz yeri çağırıyoruz {} içindede 

 import showBlog from "./components/show-blog.vue"; // routelerini yayınlayacağımız yerleri import ediyoruz
 import addBlog from "./components/add-blog.vue";

 const router = createRouter({ // linklerini belirtmek için eklememizi yapıyoruz
     history: createWebHashHistory(),
     routes: [
         { path: "/", component: showBlog },
         { path: "/ekle", component: addBlog }
     ]
 });

 export default router // bu tanımladıklarımızı göstermesi için routaları tanıtmak için bu kodu kullanıyoruz