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
import getContentsFetch from '@/composables/getContentFetch';
import { useRoute,useRouter } from "vue-router";

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        console.log("route", route);
        console.log( "router",router);
        



        const { contents, err, getContents } = getContentsFetch();
        getContents();
        return { contents, err }
    }

}
</script>

<style></style>