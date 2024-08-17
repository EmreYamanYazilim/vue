<template>
  <div>
    <h1>Öğrenciler</h1>
    <div v-for="student in students" :key="student.id">
        <router-link :to="{path:`/studentx/${student.id}`}">{{ student.name }}</router-link>
        <!-- idsi ile yakalayabilmek için index.js içinden path: '/studentx/:id'  olarak verdiğimizi for içindeki student id ile yakalyarak yazıyoruz -->
    </div>
  </div>
</template>

<script>
export default {
    
    data() {
        return {
            students:[
                {id:1, name:"emre",not:60},
                {id:2, name:"mehmet",not:99},
                {id:3, name:"mahmud",not:100},
            ],
        }
    },
}
</script>

<style>

</style>