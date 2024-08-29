<template>
  <form>
    <textarea 
    v-model="message"
    @keypress.enter.prevent ="handleSubmit"
    placeholder="Enter'a basarak chat ekleyebilirsiniz"></textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";
export default {
    setup() {
        const {user} = getUser();
        const message = ref('');
        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp(),
            }
            console.log(chat);
            message.value = ""; 
            
        }


        return {message, user,handleSubmit}
    }

}
</script>

<style scoped>
form{
    margin: 10px;
}
form textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 10px;
    padding: 20px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}

</style>