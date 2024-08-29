// verileri Firebaseye aktarma
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

// daha önce methodu dışarıda yazarak composable js içine yollayarak yapmıştım bu sefer işlemleri burada yapacağım 
const  useCollections = (coll) => {
    const error = ref(null);
    const addDoc = async (doc) => {
        error.value = null;
        try {
            await projectFirestore.collection(coll).add(doc)
        } catch (err) {
            console.log(err.message);
            error.value = 'Mesaj gönderilemedi !';
        }
    }



    return {error,addDoc}
}

export default useCollections