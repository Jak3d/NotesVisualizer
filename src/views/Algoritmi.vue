<script>
import PDFViewer from 'pdf-viewer-vue'
export default {
    name: "Algoritmi",
    components: {
        PDFViewer,
    },
    data() {
        return {
            url: 'https://raw.githubusercontent.com/Jak3d/NotesDeployer/main/Algoritmi.pdf',
        }
    },




}

</script>
<template>
    <nav class="navbar " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/navigator" class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Home" width="112" height="28">
      </router-link>
    </div>
  </nav>
    <PDFViewer :source="url" style="height: 90vh; width: 90vw" @download="handleDownload" />
</template>