<script setup>

</script>

<template>
  <div style="background-color: #242424">
    <a class="me" href="#">
      <img src="../assets/my-avatar.jpg" alt="">
      <span> Luo Chengxi </span>
    </a>
  </div>

  <div class="nav-box">
    <nav>
      <ul class="text-link-list">
        <li>
          <router-link class="text-link"  to="/partner">
            合作伙伴
          </router-link>
        </li>
        <li>
          <router-link class="text-link" to="/sponsor">
            赞助
          </router-link>
        </li>
        <li>
          <router-link class="text-link" to="/contact-me">
            联系我
          </router-link>
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
          <a class="logo-link" href="https://github.com/luo-cheng-xi/luo-cheng-xi-web-front">
            <i class="fi fi-brands-github"></i>
          </a>
        </li>
      </ul>

    </nav>
  </div>



</template>

<style scoped lang="less">
@import "/node_modules/@flaticon/flaticon-uicons/css/all/all.css";

.nav-box {
  width: auto;
  border-top: 1px solid #464646;
  border-bottom: 1px solid #484848;
}
nav {
  width: 1200px;
  margin: auto;
  height: 60px;
  font-size: 24px;
  line-height: 60px;
}
.me {
  display: flex;
  align-items: center;
  margin: auto;
  height: 130px;
  width: 300px;
  line-height: 130px;
  img {
    float: left;
    height: 74px;
    border-radius: 50%;
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
    padding: 24px 10px;
    margin-right: 20px;
  }
}
.logo-link-list {
  margin-top: 7px;
  float: right;
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
  display: flex;
  align-items: center;
  img {
    float: left;
    height: 40px;
    border-radius: 50%;
  }

  span {
    vertical-align: middle;
    margin-left: 20px;
  }
}

</style>