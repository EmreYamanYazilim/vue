<template>
    <footer>
    <ul>
        <li v-for="foot in footerBolumu">
            {{ foot }}
        </li>
    </ul>
</footer>
</template>

<script>

export default {
    data() {
        return {
            footerBolumu: ["sözleşmeler", "iletişim", "vizyonumuz"]
        }
    },
}
</script>

<style scoped>
footer {
    background: #000;
    padding: 6px;
    color: aliceblue;
    font-size: 20px;
}

ul li{
    list-style-type: none;
    display: inline-block;
    margin: 0 30px;
    text-align: center
    
}

</style>