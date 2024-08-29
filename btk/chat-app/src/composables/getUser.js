import { ref } from 'vue'
import { projectAuth } from '@/firebase/config'

// user bilgisi 
const user = ref(projectAuth.currentUser)

//oturum bilgisi güncelleme değiştirme
projectAuth.onAuthStateChanged(_user => {
    console.log('user state changed', _user);
    user.value = _user
})

const getUser = () => {
    return { user }
}
export default getUser
