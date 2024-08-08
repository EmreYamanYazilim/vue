
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



import { createApp } from 'vue'
import App from './App.vue'
import Header from './header.vue'; 
// import yanındaki ilk yazıdan adını Header olarak belirledim
//  header.vueyi gösterebilmek için import ettik 

const app = createApp(App)
// artık olaylarımızı bu arada yaparak global olarak işlemlerimizi yapacağız 
// headervue importttan sonra app olarak component olarak göstermeliyoz
app.component("app-header",Header) 
// importaki ismi virgül sağına Header olarak virgülün solunda ilk belirttğimiz yerde header.vuede  app-header tagımız olacak 

app.mount('#app')
