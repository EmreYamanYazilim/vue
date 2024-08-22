<template>
    <div>
        <div v-for="icerikler in iceriklerim" :key="icerikler.id">
            <p>Baslık : {{ icerikler.title }}</p>
            <p>Detay : {{ icerikler.details }}</p>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    props: ["iceriklerim"],
    setup(props) {
        console.log(props.iceriklerim); // konsolda görmek için props.iceriklerim olarak yaklayabiliriz
    }

}
</script>

<style></style>