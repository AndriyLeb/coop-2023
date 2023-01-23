<script setup>
import { onMounted, reactive, ref } from 'vue';
import router from '../router';
import {useRoute} from 'vue-router';
import { useSessionStore } from '@/stores/session';

const session = useSessionStore();

const route = useRoute();

let topic = ref([]);
let comments = ref([]);


let comment = reactive({
    message:""
})

onMounted(() => {
    if (session.isValid()){
        console.log('Ready');

        console.log(session.data.token);
        getChannel();

        getComments();

    } else {
        router.push('/forum');
    }
})


function getChannel(){
    api.get(`channels/${route.params.id}?token=${session.data.token}`).then(response => {
            topic.value = response
            console.log(response);
        })
}

function getComments(){
    api.get(`channels/${route.params.id}/posts?token=${session.data.token}`).then(response => {
            comments.value = response
        })
}

function postComment(){
    api.post(`channels/${route.params.id}/posts?token=${session.data.token}` , {
        body: comment
    }).then(response => {
        if(response.message){
            console.log(response.message)
            window.location.reload()
        }
    })
}

</script>

<template>

<h1 class="title">{{topic.label}}</h1>
<p>{{topic.topic}}</p>

<ul>
    <li v-for="comment in comments"> <p>{{comment.message}}</p> </li>
</ul>


<form class="box" @submit.prevent="postComment">
        
        <div class="field">
            <label class="label">Your comment: </label>
            <input class="input" placeholder="..." type="text" v-model="comment.message">
        </div>

        <div class="buttons">
            <button class="button">Post Comment</button>
        </div>
    </form>
</template>