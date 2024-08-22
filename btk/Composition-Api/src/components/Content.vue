<template>
    <div>
        <div v-for="content in contents" :key="content.id">
            <p>Baslık : {{ content.title }}</p>
            <p>Detay : {{ content.body }}</p>
            <br>
        </div>
        <div v-if="err">
            {{ err }}
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const contents = ref([]);
        const err = ref(null);
        const getContents = async () => {
            try {
                let data = await fetch("https://jsonplaceholder.typicode.com/posts")
                contents.value = await data.json();

                if (!data.ok) {
                    throw new Error("Bir hata olustu");
                }
            } catch (error) {
                err.value = error.message;
            }
        }
        getContents();
        return { contents, err }
    }

}
</script>

<style></style>