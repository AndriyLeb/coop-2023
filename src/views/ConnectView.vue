<script setup>
import { reactive, ref } from 'vue';


const router = inject('router');
const session = inject('session');


let member = reactive({
    email: 'Anriy@test.com',
    password: '12345'
})



function signin(){
    api.post('members/signin', {
        body: member
    }).then(response => {
        console.log(response)
        if (response.message){
            alert(response.message)
        } else {
            session.setSession(response.member, response.token);
                router.push("/");
        }
    })
}



</script>

<template>
    <div class="columns">
        <div class="column is-6 is-offset-3">
            
        <h1 class="title">Connect</h1>

        <form class="box" @submit.prevent="signin">

        <div class="field">
            <label class="label">Email</label>
            <input class="input" placeholder="Email" type="email" v-model="member.email">
        </div>

        <div class="field">
            <label class="label">Password</label>
            <input class="input" placeholder="password" type="password" v-model="member.password">
        </div>
        <div class="buttons">
            <button class="button">Connect</button>
            <button class="button"><RouterLink to="/">Cancel</RouterLink></button>
        </div>
        

        </form>
        </div>
</div>

</template>

