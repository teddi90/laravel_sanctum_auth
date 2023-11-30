<template>
    <div class="w-50">
        <input v-model="userEmail" type="email" placeholder="email" class="form-control mb-3">
        <input v-model="userPassword" type="password" placeholder="password" class="form-control mb-3">
        <input @click.prevent="login" type="submit" value="Login" class="btn btn-primary">
    </div>
</template>
<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router= useRouter();
const userEmail = ref(null);
const userPassword = ref(null);

function login() {
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', {
            email: userEmail.value,
            password: userPassword.value,
        }).then(res=>{
          localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
            router.push({name:'user.personal'});
        }).catch(error=>{
            console.log(error.response)
        });
    });
}

</script>

