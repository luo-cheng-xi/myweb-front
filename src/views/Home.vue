<script setup>

import HomeComponentsLeaderButton from "../components/buttons/HomeComponentsLeaderButton.vue";
</script>

<template>
  <div class="background">
    <div class="introduction">
      <p style="font-size: 64px">🙌你好，</p>
      <p style="font-size: 44px">我是luo-cheng-xi😋</p>
      <p style="font-size: 30px;margin-top: 10px">这是我闲着无聊做的网站。</p>
      <p style="font-size: 40px;margin-top: 10px"> 我想聪明如您肯定会发现这玩意做得稀烂(悲😭</p>
    </div>
    <div style="margin-top: 80px">
      <HomeComponentsLeaderButton text="看看我做的小玩意" color="#41b682"/>
    </div>
    </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

HomeComponentsLeaderButton {
  display: block;
  border-radius: 200px;
}
template {
  display: block;
}



.introduction {
  margin-top:80px
}

.background {
  overflow: hidden;
  color: white;
  height: 900px;
  width: 1200px;
  margin: auto;
  background-color: #242424;
}

</style>