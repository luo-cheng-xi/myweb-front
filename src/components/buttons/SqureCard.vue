<script setup>

</script>

<template>
  <div class="box">
    <img src="/public/mbti.png" alt=""/>
    <h1>MBTI</h1>
    <p>Detail of MBTI</p>
  </div>
</template>

<style scoped>
h1, p {
  margin: 10px 20px
}

h1 {
  border-bottom: 1px solid whitesmoke;
}

.box {
  display: block;
  width: 251px;
  height: 320px;
  overflow: hidden;
  text-decoration: none;
  color: whitesmoke;
  border: 1px solid whitesmoke;
  border-radius: 15px;
  background-color: rgb(36, 36, 36);
  box-shadow: none;
  & img {
    display: block;
    width: 251px;
    height: 140px;
  }
}
.box:hover {
  box-shadow: 0 0 5px whitesmoke;
}


</style>