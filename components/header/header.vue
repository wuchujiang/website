<template>
  <header class="header" id="header">
    <div class="container">
      <h1 class="logo">
        <nuxt-link to="/"><img :src="project ? `${url}${project.en}_logo.png` : `${url}logo.png`" alt="" /></nuxt-link>
      </h1>
      <nav class="nav">
        <ul>
          <li
            v-for="(item, index) in nav"
            :key="item.name"
            :class="{ item: true, active: current === index }"
          >
            <nuxt-link :to="item.url" :class="{ down: item.second }">{{
              item.name
            }}</nuxt-link>
            <!-- 二级菜单 -->
            <div :class="`sec_nav ${item.type}`" v-if="item.second">
              <div class="sec_nav-main">
                <div
                  :class="[{item: true, sec_active: sec_current === i.type}, `${i.type}`]"
                  v-for="(i) in item.second"
                  :key="i.name"
                >
                  <nuxt-link :to="i.url"><span></span>{{ i.name }}</nuxt-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="heaedr-r">
        <div class="phone">400-150-9669</div>
        <div class="mobile-nav">
          <img @click="showNav = !showNav" src="@/static/nav.png" alt="" />
          <div class="nav-shadow" v-if="showNav" @click="showNav = false"></div>
          <ul v-if="showNav">
            <img @click="showNav = false" class="close2" src="@/static/close2.png" alt="">
            <li
              v-for="(item, index) in nav"
              :key="item.name"
              :class="{ item: true, active: current === index && !item.second}"
            >
              <nuxt-link :to="item.url" :class="{ down: item.second }">{{
                item.name
              }}</nuxt-link>
              <!-- 二级菜单 -->
              <div :class="`sec_nav ${item.type}`" v-if="item.second">
                <div class="sec_nav-main">
                  <div
                    :class="[{item: true, sec_active: sec_current === i.type}, `${i.type}`]"
                    v-for="(i) in item.second"
                    :key="i.name"
                  >
                    <nuxt-link :to="i.url"><span></span>{{ i.name }}</nuxt-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { url } from '../../utils/config'
export default {
  props: ["current", "sec_current"],
  data() {
    return {
      showNav: false,
      project: null,
      url,
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
              url: "/about",
            },
            {
              name: "联系我们",
              type: "nav_contact",
              url: "/contact",
            },
          ],
        },
        {
          name: "加入我们",
          type: "join",
          url: "/join",
        },
      ],
    };
  },
  mounted() {
    this.project = window.local;
    console.log(this.project);
  },
};
</script>

<style lang="scss" scoped>
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
  img {
    float: left;
  }
}
.nav {
  float: left;
  ul {
    display: flex;
    li {
      line-height: 67px;
      font-size: 16px;
      color: #666;
      padding: 0 50px;
      position: relative;
      display: flex;
      align-items: center;
      a {
        transition: all 0.3s linear;
      }
    }
  }
  .sec_nav {
    width: 240px;
    position: absolute;
    z-index: 9;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 20px 0;
    text-align: center;
    line-height: 1;
    display: none;
  }
  .sec_nav .item {
    display: inline-block;
    font-size: 14px;
    height: 50px;
    padding: 10px 0 10px 50px;
    transition: all 0.3s linear;
    cursor: pointer;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      width: 100%;
    }
    span {
      display: inline-block;
      width: 24px;
      height: 24px;
      background-size: 100% 100%;
      margin-right: 10px;
    }
  }
  .about .item {
    padding: 10px 0 10px 70px;
  }
  .sec_nav .item a {
    color: #333;
  }
  .sec_nav .item:hover a {
    color: #ff5001;
  }
  .nav_saas span {
    background: url("@/static/icon4.png") no-repeat left center;
  }
  .nav_service span {
    background: url("@/static/icon5.png") no-repeat left center;
  }
  .nav_about span {
    background: url("@/static/icon6.png") no-repeat left center;
  }
  .nav_contact span {
    background: url("@/static/icon7.png") no-repeat left center;
  }
  .nav_saas:hover span {
    background: url("@/static/icon4_selected.png") no-repeat left center;
  }
  .nav_service:hover span {
    background: url("@/static/icon5_selected.png") no-repeat left center;
  }
  .nav_about:hover span {
    background: url("@/static/icon6_selected.png") no-repeat left center;
  }
  .nav_contact:hover span {
    background: url("@/static/icon7_selected.png") no-repeat left center;
  }
  .sec_nav .sec_active > a {
    color: #ff5a27;
  }
  .nav_saas.sec_active span {
    background: url("@/static/icon4_selected.png") no-repeat left center;
  }
  .nav_service.sec_active span {
    background: url("@/static/icon5_selected.png") no-repeat left center;
  }
  .nav_about.sec_active span {
    background: url("@/static/icon6_selected.png") no-repeat left center;
  }
  .nav_contact.sec_active span {
    background: url("@/static/icon7_selected.png") no-repeat left center;
  }
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
.mobile-nav {
  display: none;
}

@media screen and (max-width: 1200px) {
  .nav ul li {
    padding: 0 30px;
  }
}
@media screen and (max-width: 1024px) {
  .nav {
    display: none;
  }
  .header .container {
    display: flex;
    justify-content: space-between;
  }
  .heaedr-r {
    display: flex;
    align-items: center;
  }
  .mobile-nav {
    display: block;
    float: right;
    margin-left: 10px;
    position: relative;
    ul{
      box-sizing: border-box;
      width: 170px;
      position: absolute;
      right: 0;
      top: 100%;
      background-color: #fff;
      padding: 16px 12px;
      font-size: 12px;
    }
  }
}
@media screen and (max-width: 640px) {
  .header{
    height: 42px;
    .container{
      height: 42px;
      padding: 0 12px;
    }
  }
  .logo{
    width: auto;
    height: 18px;
    margin-top: 12px;
    img{
      height: 18px;
    }
  }
  .phone{
    font-size: 12px;
  }
  .mobile-nav{
    width: 18px;
    position: relative;
    z-index: 59;
    ul {
      border: 1PX solid #EBECF1;
      border-radius: 4px;
      z-index: 56;
      li{
        border-bottom: 1PX solid #979797;
        font-weight: bold;
        padding: 11px 0;
        &:last-child{
          border-bottom: none;
        }
        a{
          display: block;
        }
      }
      .active > a {
        color: #ff5a27;
      }
    }
    .sec_nav{
      margin-top: 8px;
      font-weight: normal;
      .item{
        padding-left: 22px;
        position: relative;
        line-height: 24px;
        &::before{
          content: "·";
          position: absolute;
          left: 14px;
          top: 0;
          color: #666;
        }
        a{
          color: #666;
        }
      }
    }
    .sec_nav .sec_active > a {
      color: #ff5a27;
    }
  }
  .down{
    padding-right: 0;
    background: none;
  }
  .close2{
    position: absolute;
    right: 6px;
    top: 6px;
    width: 20px;
    height: 20px;
  }
  .nav-shadow{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 55;
  }
}
</style>