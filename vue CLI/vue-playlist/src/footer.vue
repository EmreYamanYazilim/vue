<template>
    <ul>
        <li v-for="foot in footerBolumu">
            {{ foot }}
        </li>
    </ul>
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