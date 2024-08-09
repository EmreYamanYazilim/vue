<template>
    <div id="kullanici">
        <ul>
            <li v-for="user in users" v-on:click="user.show = !user.show">
                <!-- linke tıkladığımız zamanda false ise true yapmasını söyledik -->
                <h2>{{ user.name }}</h2>
                <p v-show="user.show">{{ user.spec }}</p>
                <!-- user.show yani aktifse göstermesi için v-show kullandık -->
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    data() {
        return {
            users: [
                { name: "Muhammed S.A.V", spec: "Allemlere Rahmet <3", show: false },
                { name: "ahmet", spec: "üstat", show: false },
                { name: "muhiddin", spec: "alim", show: false },
                { name: "mahmut", spec: "mücedid", show: false },
                { name: "hasan sezai", spec: "pirim", show: false },
                { name: "emre", spec: "Geliştirici", show: false },
            ]
        }
    },
}

</script>

<style scoped>
#kullanici {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>