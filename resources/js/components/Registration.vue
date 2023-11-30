<template>
    <div class="w-50">
        <input v-model="userName" type="text" placeholder="name" class="form-control mb-3">
        <input v-model="userEmail" type="email" placeholder="email" class="form-control mb-3">
        <input v-model="userPassword" type="password" placeholder="password" class="form-control mb-3">
        <input v-model="userPasswordConfirmation" type="password" placeholder="password" class="form-control mb-3">
        <input @click.prevent="registration" type="submit" value="Registration" class="btn btn-primary">
    </div>
</template>
<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router=useRouter();
const userName = ref(null);
const userEmail = ref(null);
const userPassword = ref(null);
const userPasswordConfirmation = ref(null);

function registration() {
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/register', {
            email: userEmail.value,
            name: userName.value,
            password: userPassword.value,
            password_confirmation: userPasswordConfirmation.value,
        }).then(res=>{
            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
            router.push({name:'user.personal'});
            console.log(res);
        })
    });
}
</script>

