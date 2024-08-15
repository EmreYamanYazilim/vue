
import { createApp } from 'vue'
import App from './App.vue'

import lokalGlobal from './components/lokal-global.vue'


const app = createApp(App)

app.component("lokal-global",lokalGlobal)

app.config.globalProperties.$filters={ // config içinden globpal preperti olarak  gösterip $filter değişkeni olarak obje olarka belirterek içinde yazılan  tüm Fn leri gösterebilmemiz için bize olanak sağlar
    buyutFilters(title){ // böylelikle $filters.buyutFilters() diyerek parantez içine yazdıklarımızı büyütecek
        return title.toUpperCase();
    }
}

app.mount('#app');