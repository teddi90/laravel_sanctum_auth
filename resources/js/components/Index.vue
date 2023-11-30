<template>
    <div class="container">
        <div class="py-3">
            <router-link  class="btn btn-outline-primary mx-2" :to="{name:'get.index'}">Get</router-link>
            <router-link v-if="!token" class="btn btn-outline-primary mx-2" :to="{name:'user.login'}">Login</router-link>
            <router-link v-if="!token" class="btn btn-outline-primary mx-2" :to="{name:'user.registration'}">Registration</router-link>
            <router-link v-if="token" class="btn btn-outline-primary mx-2" :to="{name:'user.personal'}">Personal</router-link>
            <a href="#" v-if="token" class="btn btn-primary" @click.prevent="logout">Logout</a>
        </div>
        <router-view></router-view>
    </div>
</template>
<script setup>

import {useRouter} from "vue-router";
import {onMounted, onUpdated, ref} from "vue";

const router=useRouter();
const token=ref(null);

function logout(){
    axios.post('/logout')
        .then(res=>{
            localStorage.removeItem('x_xsrf_token')
            router.push({name:'user.login'});
        })
}
function getToken(){
    token.value=localStorage.getItem('x_xsrf_token');

}
onMounted(()=>{
    getToken();
})
onUpdated(()=>{
    getToken();
})

</script>
