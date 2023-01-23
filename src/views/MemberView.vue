<script setup>
import { onMounted, reactive, ref } from 'vue';
import router from '../router';
import {useRoute} from 'vue-router';
import { useSessionStore } from '@/stores/session';
import { getActivePinia } from 'pinia';
import MembersView from './MembersView.vue';

const session = useSessionStore();

const route = useRoute();

let current_member = ref([]);

onMounted(() => {
    api.get(`members?${session.data.token}`).then(response => {
        
        response.forEach(member => {
            if(member.id == route.params.id){
                current_member.value = member;
            }
        });

    })
})

</script>


<template>

<div>
    <img>

    <h1 class="title"></h1>
    <p>Name: {{ current_member.fullname }}</p>
    <p>info</p>
    <p>member since: {{ current_member.created_at }}</p>

</div>


</template>