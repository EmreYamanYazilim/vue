<template>
    <div>
        {{ navBolumu }}
    </div>
    <ul>
        <li v-for="nav in navArray">
            {{ nav }}
        </li>
    </ul>
</template>

<script>

export default{
    data() {
        return {
            navBolumu:"Navbar Burada Yer alacak",
            navArray: ["menü1","menü2","menü3","menü4"]
        }
    },
}

</script>