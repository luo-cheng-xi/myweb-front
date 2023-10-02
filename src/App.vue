<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <div class="background">
    <header>
      <TheHeader/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      footer
    </footer>

  </div>

</template>

<style scoped>

.background {
  color: white;
  min-width: 1200px;
  min-height: 1005px;
  background-color: #242424;
}

header, footer {
  background-color: #212121;
}

main {
  background-color: #242424;
}

</style>
