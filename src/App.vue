<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <header>
    <TheHeader/>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    footer
  </footer>
</template>

<style scoped>

  header,footer {
    background-color: #212121;
  }
  main {
    background-color: #242424;
  }a
  header {
    border-bottom: 1px solid #7f7f7f;
  }

</style>
