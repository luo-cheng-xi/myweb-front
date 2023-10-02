<script setup>

import SquareCard from "../components/buttons/SqureCard.vue";
</script>

<template>
  <div class="background">
    <ul class="card-link-list">
      <li class="card-link">
        <a href="#">
          <SquareCard/>
        </a>
      </li>
      <li class="card-link">
        <a href="#">
          <SquareCard/>
        </a>
      </li>
      <li class="card-link">
        <a href="#">
          <SquareCard/>
        </a>
      </li>
      <li class="card-link">
        <a href="#">
          <SquareCard/>
        </a>
      </li>
      <li class="card-link">
        <a href="#">
          <SquareCard/>
        </a>
      </li>
      <li class="card-link">
        <a href="#">
          <SquareCard/>
        </a>
      </li>
      <li class="card-link">
        <a href="#">
          <SquareCard/>
        </a>
      </li>
      <li class="card-link">
        <a href="#">
          <SquareCard/>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.card-link-list {
  display: block;
  margin-top: 40px;
}
.card-link-list .card-link:nth-child(4n + 4) {
  margin-right: 0;
}
.card-link {
  float: left;
  list-style: none;
  margin-right: 60px;
  & a {
    text-decoration: none;
  }
}

.background {
  overflow: hidden;
  margin: auto;
  color: white;
  height: auto;
  width: 1200px;
  background-color: #242424;
}
</style>