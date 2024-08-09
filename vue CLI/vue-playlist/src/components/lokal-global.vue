<template>
    <div>
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
    },
}
</script>

