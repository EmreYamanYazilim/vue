<template>
    <div>
        <h2>{{ deneme }}</h2>
        <p>{{ deneme2 }}</p>
    </div>
</template>

<script>
export default {
    props:['deneme','deneme2'],  // bind edilen değişkenler burada tanımlanarak yukarıda kullanılmaya olanak tanır 
data() {
    return {
        
    }
},
}
</script>

<style>

</style>