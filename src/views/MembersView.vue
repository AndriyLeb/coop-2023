<script setup>
import { getActivePinia } from 'pinia';
import { onMounted, reactive, ref } from 'vue';


const router = inject('router');
const session = inject('session');

let members = ref([]);

onMounted(() => {
    if (session.isValid()){
        console.log("ready");


        api.get(`members?${session.data.token}`).then(response => {
            members.value = response
        })
    }
})

function deleteMember(mid){

    api.delete(`members/${mid}?token=${session.data.token}`)
    .then(response => {console.log(response.message), window.location.reload();})

}
</script>


<template>
<div class="columns">
    <div class="column is-12 is-offset-6">
        <h1 class="title is-2 mt-4 mb-3">All users</h1>
    </div>
</div>

<ul>

    <li class="box" v-for="member in members">

<nav class="navbar">
  <div class="navbar-brand">
    <p class="navbar-item title">{{member.fullname}}</p>

  </div>

  <div  class="navbar-menu">
  

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <RouterLink :to="{name: 'member', params: {id: member.id}}">
          <button class="button is-primary">
            <strong>View member</strong>
          </button>
        </RouterLink>
          <button @click="deleteMember(member.id)" class="button is-light">
            <strong>Delete</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
</li>
</ul>
</template>