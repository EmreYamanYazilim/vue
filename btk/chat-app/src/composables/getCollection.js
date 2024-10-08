import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');
    collectionRef.onSnapshot((snap) => { // anlık verileri alıyoruz
        let result = [];
        snap.docs.forEach(doc => {
            doc.data().createdAt && result.push({ ...doc.data(), id: doc.id })
        })
        documents.value = result
        error.value = null
    },
        (err) => {
            console.log(err.message);
            documents.value = null;
            error.value = "Veri gönderilemedi"
        })

    return { documents, error }
}
export default getCollection