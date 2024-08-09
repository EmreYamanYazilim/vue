<template>
    <div v-on:click="changeTitle">
        {{ lokal }}
    </div>
</template>

<script>
export default{
    // props:[  //1. yöntem
    //     'lokal'
    // ],
    props:{ //2. yöntem
        lokal:String,
        required:true
    },
    data() {
        return {

        }
    },methods: {
        changeTitle: function () {  
            this.$emit("basligiDegistir","alt bilesen tarafından değistirilen yazı")
        }
    },
}
</script>

