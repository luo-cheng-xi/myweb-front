<script setup>
</script>

<template>

  <div class="header-box">
    <a class="me" href="#">
      <img src="../assets/my-avatar.jpg" alt="">
      <span> Luo Chengxi </span>
    </a>
    <nav>
      <ul class="text-link-list">
        <li>
          <a class="text-link" href="#">
            合作伙伴
          </a>
        </li>
        <li>
          <a class="text-link" href="#">
            v-me-50
          </a>
        </li>
        <li>
          <a class="text-link" href="#">
            联系我
          </a>
        </li>
      </ul>
      <ul class="logo-link-list">
        <li>
          <a class="logo-link" href="#">
            <i class="fi fi-rr-search"></i>
          </a>
        </li>
        <li>
          <a class="logo-link" href="#">
            <i class="fi fi-rs-bell"></i>
          </a>
        </li>
        <li>
          <a class="logo-link" href="#">
            <i class="fi fi-brands-github"></i>
          </a>
        </li>
      </ul>
      <a class="user">
        <div class="user-avatar"></div>
      </a>
    </nav>
  </div>

</template>

<style scoped lang="less">
@import "/node_modules/@flaticon/flaticon-uicons/css/all/all.css";
.header-box {
  width: 100%;
  height: 74px;
  font-size: 24px;
  line-height: 74px;
}
.me {
  float: left;
  margin-right: 72px;
  height: 74px;
  line-height: 74px;

  img {
    float: left;
    height: 100%;
    border-radius: 50%;
    margin-right: 24px;
  }

  span {
    float: left;
    font-size: 30px;
    color: white;
  }
}
.text-link-list {
  float: left;
  li {
    float: left;
    list-style: none;
  }
  .text-link {
    color: white;
    text-decoration: none;
    padding: 24px 35px;
  }
}
.logo-link-list {
  float: right;
  li {
    list-style: none;
    float: right;
  }
  & .logo-link {
    color: white;
    text-decoration: none;
    margin-right: 44px;
  }
}
.user {

}

</style>