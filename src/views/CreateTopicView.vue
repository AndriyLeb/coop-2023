<script setup>
import { getActivePinia } from 'pinia';
import { reactive } from 'vue';

const session = inject('session');
const router = inject('router');

let conversation = reactive({
    label: '',
    topic: ''
})


function validateForm(){
    api.post(`channels?token=${session.data.token}`, {
        body: conversation
    }).then(response => {
        if (response.message){
            alert(response.message)
        } else {
            router.push('/forum');
        }
    })
}

</script>


<template>
    <div class="columns">
        <div class="column is-6 is-offset-3">
   <h1 class="title">Create New Topic</h1>

    <form class="box" @submit.prevent="validateForm">
        
        <div class="field">
        <label class="label">Name of the Topic</label>
        <input class="input" placeholder="Name" type="text" v-model="conversation.label">
        </div>

        <div class="field">
        <label class="label">Topic</label>
        <textarea placeholder="..." class="textarea"  type="text" v-model="conversation.topic"></textarea>
        </div>

        <div class="buttons">
            <button class="button">Create Topic</button>
            <button class="button"><RouterLink to="/">Cancel</RouterLink></button>
        </div>
    </form>
        </div>
    </div>
</template>