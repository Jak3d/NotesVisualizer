
<script>
export default {
  name: "Navigator",
  components: {

  },
  data() {
    return {
      modalOnAlgoritmi: false,
    }
  },




}

</script>
<template>
  <!--modal-->
  <div id="modalAlgoritmi" v-if="modalOnAlgoritmi" class="modal is-active">
    <div @click="this.modalOnAlgoritmi = false" class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <!--Card-->
        <div class="card">

          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-2">Algoritmi</p>
                <p class="subtitle is-6">Algoritmi e Strutture di Dati</p>
                <p class="subtitle is-7">aa. 2022/2023</p>
              </div>
            </div>

            <div class="content">
              Appunti delle lezioni di Algoritmi e Strutture di dati, sia di Teoria che di Laboratorio a cura di Leonardo Marro e Linda Primicino.
              <br><strong>Gli appunti sono ancora in produzione.</strong>
              <br>
              <br>
              <router-link to="/algoritmi"><button class="button is-success"> Entra </button> </router-link>
              <br>
              <br>
              Last Update: <!-- Cercare modo per ottenere date of change da github per il relativo pdf-->
              <span class="tag is-info"><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></span>
            </div>
          </div>
          <!--Card end-->
        </div>
      </div>
    </div>
    <button @click="this.modalOnAlgoritmi = false" class="modal-close is-large" aria-label="close"></button>
    <!--Modal end-->
  </div>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Home" width="112" height="28">
      </router-link>
    </div>
  </nav>
  <div class="columns">
    <div class="column is-one-fourth">
      <!-- Sostituire con qualcosa di carino-->
      <div class="card">
        <div class="card-content">
          <div class="content">
            <button @click="this.modalOnAlgoritmi = true"> Algoritmi </button>
          </div>
        </div>
      </div>
      

    </div>
    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <button @click="this.modalOnAlgoritmi = true"> DataBase </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <button @click="this.modalOnAlgoritmi = true"> EGI </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <button @click="this.modalOnAlgoritmi = true"> Fisica </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>