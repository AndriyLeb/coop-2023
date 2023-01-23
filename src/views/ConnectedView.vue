<script setup>
import { inject } from 'vue';


const router = inject('router');
const session = inject('session');

console.log(session.data.member.id)

function signout(){
    api.delete(`members/signout?token=${session.data.token}`).then(() => {
        session.resetSession();
        router.push('/');
    })
}

</script>


<template>
        
</template>