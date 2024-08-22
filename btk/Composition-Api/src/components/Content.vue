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
export default {
    setup() {
        const { contents, err, getContents } = getContentsFetch();
        getContents();
        return { contents, err }
    }

}
</script>

<style></style>