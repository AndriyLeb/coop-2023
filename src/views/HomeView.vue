<script setup>
import { inject } from 'vue';


const session = inject('session');
const router = inject('router');

if (session.isValid()){
  alert("ready");
}

if (session.data.token){
  router.push('connected');
}


</script>



<template>
<div class="columns">
  <div class="column is-10 is-offset-5">

   <h1 class="title">Welcome to Coop</h1>

  <div class="buttons">
      <button class="button"><RouterLink to="/create">CreateAccount</RouterLink></button>
      <button class="button"><RouterLink to="/connect">Connect</RouterLink></button>
</div>

  </div>
</div>

</template>
