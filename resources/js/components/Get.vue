<template>
    Get
</template>
<script setup>
import {onMounted} from "vue";

function getData(){
    axios.get('/api/get')
        .then(res=>{
            console.log(res)
        })
}
onMounted(()=>{
    getData();
})
</script>

