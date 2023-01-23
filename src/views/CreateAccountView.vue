<script setup>
import { reactive } from 'vue';

const router = inject('router');



let member = reactive({
    fullname: 'Andriy',
    email: 'Anriy@test.com',
    password: '12345'
})

function validateForm(){
    api.post('members', {
        body: member
    }).then(response => {
        if (response.message){
            alert(response.message)
        } else {
            console.log(member.fullname,member.email, member.password)
            if (confirm("Votre compte a été crée, voulez vous vous connecter")){
                router.push("/connect");
            }
        }
    })
}


</script>

<template>
    <div class="columns">
        <div class="column is-6 is-offset-3">
   <h1 class="title">Create Account</h1>

    <form class="box" @submit.prevent="validateForm">
        
        <div class="field">
        <label class="label">Name</label>
        <input class="input" placeholder="Name" type="text" v-model="member.fullname">
        </div>

        <div class="field">
        <label class="label">Email</label>
        <input class="input" placeholder="Email" type="email" v-model="member.email">
        </div>

        <div class="field">
            <label class="label">Password</label>
            <input class="input" placeholder="password" type="password" v-model="member.password">
        </div>

        <div class="buttons">
            <button class="button">Create account</button>
            <button class="button"><RouterLink to="/">Cancel</RouterLink></button>
        </div>
    </form>

        </div>
    </div>
</template>

