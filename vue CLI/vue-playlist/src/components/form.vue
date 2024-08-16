<template>
    <div>
        <form action="#">
            <input type="text" v-model="student" @keypress="addStudend">
            <!-- v model ile 2 yönlü bağlanma v model ile aynı zamanda bind etmiş olyporuz ve değişkeni input içine yazdırabiliyoruz-->
            <div v-for="student in studetns" :key="student"> <!-- yazılanları  yazdır-->
                <span>{{student}}</span>
            </div>
        </form>
    </div>

</template>

<script>
export default {
    data() {
        return {
            student:'',
            studetns:[]
        }
    },
    methods: {
        addStudend(e){
            if(e.key == "." && this.student){  //  . basarak ekle
                if(!this.studetns.includes(this.student)){ // array  içinde bak student inputta yazdığımız yoksa işleme devam et
                    this.studetns.push(this.student) // yoksa  students array içine student inputu içindekini ekle
                }
                this.student="" // inputu sıfırla
            }
        }
    },
}
</script>

<style>

</style>