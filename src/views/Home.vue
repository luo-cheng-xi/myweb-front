<script setup>

import HomeComponentsLeaderButton from "../components/buttons/SquareLeaderButton.vue";
</script>

<template>
  <div class="background">
    <div class="introduction">
      <p style="font-size: 64px">🙌你好，</p>
      <p style="font-size: 44px">我是luo-cheng-xi😋</p>
      <p style="font-size: 30px;margin-top: 10px">这是我闲着无聊做的网站。</p>
      <p style="font-size: 40px;margin-top: 10px"> 我想聪明如您肯定会发现这玩意做得稀烂(悲😭</p>
    </div>
    <router-link style="margin-top: 80px" to="/Square">
      <HomeComponentsLeaderButton text="看看我做的小玩意" color="#41b682"/>
    </router-link>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
/* 作用于router-link，因为router-link会创建一个a标签  */
a {
  text-decoration: none;
}
.background {
  display: block;
  overflow: hidden;
  color: white;
  height: 900px;
  width: 1200px;
  margin: auto;
  background-color: #242424;
}
HomeComponentsLeaderButton {
  display: block;
  border-radius: 200px;
}
.introduction {
  margin-top:80px
}
</style>