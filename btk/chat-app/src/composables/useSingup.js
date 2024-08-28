// Composable Fonksiyon (useSignup): Bileşenler arasında paylaşılan mantığı organize etmek için kullanılır.
// Asenkron Fonksiyon (signup): Kayıt işlemi gibi zaman alan bir işlemi gerçekleştirmek için kullanılır.
// Hata Yönetimi (error): İşlemler sırasında oluşabilecek hataları takip etmek ve kullanıcıya bildirmek için kullanılır.

import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null);
const signup = async (email, password, displayName) => {
    // kullanıcı kayıt işlemleri ile alakalı tüm işlemleri  burada toplayacağım
    error.value = null;
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password);
        if (!res) {
            throw new Error("Hata olustu");
        }
        await res.user.updateProfile({displayName});
        error.value = null;
        return res;
    } catch (err) {
        console.log(err.message);
        error.value = err.message;    
    }
};
const useSignup = () => {
    //useSignup, error ve signup fonksiyonlarını geri döndürür, böylece bu veriler ve fonksiyonlar Vue bileşenlerinde kullanılabilir hale gelir.
    // signup ve error'u   return ederek export default yaparak onları başka bir yere göndermek için işlem yapıyoruz
    return { error, signup }
};
export default useSignup;