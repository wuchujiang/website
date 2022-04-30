<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <nuxt-link to="/"><img src="@/static/logo.png" alt="" /></nuxt-link>
      </h1>
      <nav class="nav">
        <ul>
          <li
            v-for="(item, index) in nav"
            :key="item.name"
            :class="current === index && 'active'"
          >
            <nuxt-link :to="item.url" :class="item.second && 'down'">{{
              item.name
            }}</nuxt-link>
            <!-- 二级菜单 -->
            <div :class="`sec_nav ${item.type}`" v-if="item.second">
              <div class="sec_nav-main">
                <div
                  :class="`item ${i.type}`"
                  v-for="i in item.second"
                  :key="i.name"
                >
                  <nuxt-link :to="i.url">{{ i.name }}</nuxt-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="phone">
        <img src="@/static/server.png" alt="" />400-150-9669
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["current"],
  data() {
    return {
      nav: [
        {
          name: "首页",
          type: "index",
          url: "/",
        },
        {
          name: "产品服务",
          type: "product",
          url: "",
          second: [
            {
              name: "会员SaaS服务",
              type: "nav_saas",
              url: "/saas",
            },
            {
              name: "精细化运营服务",
              type: "nav_service",
              url: "/operation",
            },
          ],
        },
        {
          name: "关于我们",
          type: "about",
          url: "",
          second: [
            {
              name: "公司介绍",
              type: "nav_about",
              url:
                process.env.NODE_ENV === "production"
                  ? "/about.html"
                  : "/about",
            },
            {
              name: "联系我们",
              type: "nav_contact",
              url:
                process.env.NODE_ENV === "production"
                  ? "/contact.html"
                  : "/contact",
            },
          ],
        },
        {
          name: "加入我们",
          type: "join",
          url: process.env.NODE_ENV === "production" ? "/join.html" : "/join",
        },
      ],
      url: "/about",
    };
  },
};
</script>

<style>
.header {
  height: 67px;
  background-color: #fff;
}
.logo {
  width: 153px;
  height: 30px;
  margin-top: 20px;
  display: flex;
  margin-right: 94px;
  float: left;
  cursor: pointer;
  overflow: hidden;
}
.logo img {
  float: left;
}
.nav {
  float: left;
}
.nav ul {
  display: flex;
}
.nav ul li {
  line-height: 67px;
  font-size: 16px;
  color: #666;
  padding: 0 50px;
  position: relative;
  display: flex;
  align-items: center;
}
.nav ul li a {
  transition: all 0.3s linear;
}
.down {
  padding-right: 14px;
  background: url("@/static/down.png") no-repeat right center;
}
.nav ul li.active > a {
  color: #ff5a27;
}
.nav ul li.active > a.down {
  background: url("@/static/down2.png") no-repeat right center;
}
.nav ul li:hover > a {
  color: #ff5a27;
}
.nav ul li:hover .sec_nav {
  display: block;
}
.nav ul li:hover a.down {
  background: url("@/static/down2.png") no-repeat right center;
}
.phone {
  height: 67px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  float: right;
}
.phone img {
  margin-right: 10px;
}
.sec_nav {
  position: absolute;
  z-index: 9;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 5px;
  display: none;
}
.sec_nav-main {
  background-color: #fff;
  border-radius: 4px;
  padding: 9px 0 16px;
}
.sec_nav .item {
  margin-left: 25px;
  font-size: 14px;
  padding-left: 32px;
  line-height: 24px;
  margin-top: 10px;
  transition: all 0.3s linear;
  cursor: pointer;
}
.sec_nav .item a {
  color: #333;
}
.sec_nav .item:hover a {
  color: #ff5001;
}
.product {
  width: 182px;
}
.about {
  width: 140px;
}
.nav_saas {
  background: url("@/static/icon4.png") no-repeat left center;
}
.nav_service {
  background: url("@/static/icon5.png") no-repeat left center;
}
.nav_about {
  background: url("@/static/icon6.png") no-repeat left center;
}
.nav_contact {
  background: url("@/static/icon7.png") no-repeat left center;
}
.nav_saas:hover {
  background: url("@/static/icon4_selected.png") no-repeat left center;
}
.nav_service:hover {
  background: url("@/static/icon5_selected.png") no-repeat left center;
}
.nav_about:hover {
  background: url("@/static/icon6_selected.png") no-repeat left center;
}
.nav_contact:hover {
  background: url("@/static/icon7_selected.png") no-repeat left center;
}
</style>