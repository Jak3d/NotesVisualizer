<script>
export default {
    name: "Home",
    components: {},
    data() {
        return {
            macOsVisibility: true,
            inHome: true,
        }
    },
    created() {

        //this.$router.push(`/${this.activePage}`) 
    },
    methods: {
        closeMac(){
            this.macOsVisibility=false;
        },
        exitHome(){
            this.inHome=false;
            this.macOsVisibility=false;
        }
    },
}
</script>

<template>
    
    <div v-if="macOsVisibility" class="notification is-warning">
        <!-- implementare Do Not Show Again-->
        Si avvisa che l'applicativo non dispone di aggiornamento automatico per i sistemi MacOs.
        <button @click="closeMac()" class="delete"></button>

    </div>
    <div id="homeBox" v-if="inHome" class="box">
        <div class="container">
            <div class="title is-1">
                Notes Deployer
                <div class="subtitle is-5">
                    By Leonardo Marro
                </div>
            </div>
            <div class="buttons is-centered">
                <router-link to="/navigator"><button @click="exitHome()" class="button is-primary">Enter</button></router-link>
                

            </div>
        </div>
    </div>
    <router-view />
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
