<script setup>
import { onMounted, reactive, ref } from 'vue';
import router from '../router';


let channels = ref([]);
const session = inject('session');



onMounted(() => {
    if (session.isValid()){
        console.log('Ready');

        console.log(session.data.token);

        api.get(`channels?token=${session.data.token}`).then(response => {
        channels.value = response
        console.log(response);
    })
    }
    else {
        router.push('/');
    }
})

</script>


<template>

    <div class="columns">   
            <div class="column is-6">
                <p class="title">Welcome to the Forum</p>
            </div>

            <div class="column is-6">
                <button class="button"><RouterLink to="/create_topic">Create new topic</RouterLink></button>
            </div>
    </div>

    <div>
    <ul>
        <li class="message is-medium" v-for="channel in channels">
        <RouterLink :to="{name:'topic', params:{id : channel.id}}"><h1 class="message-header">{{channel.label}}</h1></RouterLink>
        <p class="message-body">{{channel.topic}}</p>
    </li>
    </ul>
</div>

</template>