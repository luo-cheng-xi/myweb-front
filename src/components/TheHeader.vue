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
      <a class="user" href="#">
        <img src="../assets/default-avatar.jpg" alt="">
        <span> 用户名 </span>
      </a>
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
  vertical-align: center;
  li {
    list-style: none;
    float: right;
  }
  & .logo-link {
    font-size: 36px;
    color: white;
    text-decoration: none;
    margin-right: 44px;
  }
}
.user {
  float: right;
  color: white;
  text-decoration: none;
  img {
    margin-top: 7px;
    float: left;
    height: 60px;
    border-radius: 50%;
  }
  span {
    vertical-align: middle;
    margin-left: 20px;
  }
}

</style>