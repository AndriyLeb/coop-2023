<script setup>
import { inject } from 'vue';


const router = inject('router');
const session = inject('session');

console.log(session.data.member.id)

function signout() {
    api.delete(`members/signout?token=${session.data.token}`).then(() => {
        session.resetSession();
        router.push('/');
    })
}


</script>

<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="">
                <p>LOGO</p>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <button class="button is-light">
                            <strong>
                                <RouterLink to="/forum">Forum</RouterLink>
                            </strong>
                        </button>
                        <button class="button is-light">
                            <strong>
                                <RouterLink to="/members">Members</RouterLink>
                            </strong>
                        </button>
                        <RouterLink :to="{ name: 'member', params: { id: session.data.member.id } }"
                            class="button is-light">
                            <strong>Profile</strong>
                        </RouterLink>
                        <button @click="signout" class="button is-light">
                            <strong>Disconnect</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>