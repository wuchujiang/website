<template>
  <footer class="footer">
    <div class="container">
      <div class="left">
        <img src="@/static/logo2.png" alt="" />
        <p>合作电话：400-150-9669</p>
        <p>业务合作：marketing@oakblack.com</p>
        <p>媒体合作：media@oakblack.com</p>
        <a
          class="qqkf"
          target="_blank"
          href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes"
          >QQ咨询</a
        >
      </div>
      <div class="r-nav">
        <div class="item" v-for="item in nav" :key="item.name">
          <h2>{{ item.name }}</h2>
          <ul>
            <li v-for="i in item.sec_list" :key="i.name">
              <nuxt-link :to="i.url">{{ i.name }}</nuxt-link>
              <div class="shadow" @click="toTop" v-if="type === i.type"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span
        ><a href="https://beian.miit.gov.cn/" target="_blank"
          >粤ICP备18120172号</a
        >
        Copyright © 2018</span
      >
      深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM
    </div>
    <div class="suspend">
      <div class="item online-hover">
        <img src="@/static/suspend1.png" alt="" />
        <div class="online-consult">
          <div class="online-consult-main">
            <h3>亲爱的用户</h3>
            <p>为了更好的帮您解决问题，请选择您要咨询的会员类型</p>
            <ul>
              <li @click="toAns('sy')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433"
                  target="_blank"
                  ><img src="@/static/kh1.png" alt="" /><span>省呗</span></a
                >
              </li>
              <li @click="toAns('keep')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=30020"
                  target="_blank"
                  ><img src="@/static/kh3.png" alt="" /><span>keep</span></a
                >
              </li>
              <li @click="toAns('rongshu')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=29924"
                  target="_blank"
                  ><img src="@/static/kh4.png" alt="" /><span>榕树贷款</span></a
                >
              </li>
              <li @click="toAns('welab')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=29354"
                  target="_blank"
                  ><img src="@/static/kh5.png" alt="" /><span>我来数科</span></a
                >
              </li>
              <li @click="toAns('other')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=28877"
                  target="_blank"
                  ><img src="@/static/kh6.png" alt="" /><span>其他</span></a
                >
              </li>
            </ul>
            <p>
              如您需要商务合作请联络邮箱：<a
                href="mailto:marketing@oakblack.com"
                target="_blank"
                ><span>marketing@oakblack.com</span></a
              >
            </p>
            <p>电话：400-150-9669</p>
          </div>
        </div>
      </div>
      <div class="item item2">
        <img src="@/static/suspend2.png" alt="" />
        <div class="phone-consult">
          <div class="phone-consult-main">
            <h4>
              <a href="tel:400-150-9669">客服电话<span>400-150-9669</span></a>
            </h4>
            <h4>客服工作时间</h4>
            <p>周一到周五：9：00～20：00（在线和电话）</p>
            <p>周末或节假日：9：00～20：00（电话）</p>
          </div>
        </div>
      </div>
      <div v-if="showBackTop" class="item" @click="toTop">
        <img src="@/static/suspend3.png" alt="" />
      </div>
    </div>
    <div class="suspend mobile-suspend">
      <div class="item" @click="show2">
        <img src="@/static/suspend1.png" alt="" />
        <div class="online-consult show-online-consult" v-if="show_online">
          <div class="online-consult-main">
            <h3>亲爱的用户</h3>
            <p>为了更好的帮您解决问题，请选择您要咨询的会员类型</p>
            <ul>
              <li @click="toAns('sy')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433"
                  target="_blank"
                  ><img src="@/static/kh1.png" alt="" /><span>省呗</span></a
                >
              </li>
              <li @click="toAns('keep')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=30020"
                  target="_blank"
                  ><img src="@/static/kh3.png" alt="" /><span>keep</span></a
                >
              </li>
              <li @click="toAns('rongshu')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=29924"
                  target="_blank"
                  ><img src="@/static/kh4.png" alt="" /><span>榕树贷款</span></a
                >
              </li>
              <li @click="toAns('welab')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=29354"
                  target="_blank"
                  ><img src="@/static/kh5.png" alt="" /><span>我来数科</span></a
                >
              </li>
              <li @click="toAns('other')">
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=28877"
                  target="_blank"
                  ><img src="@/static/kh6.png" alt="" /><span>其他</span></a
                >
              </li>
            </ul>
            <p>
              如您需要商务合作请联络邮箱：<a
                href="mailto:marketing@oakblack.com"
                target="_blank"
                ><span>marketing@oakblack.com</span></a
              >
            </p>
            <p>电话：400-150-9669</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img @click="show1" src="@/static/suspend2.png" alt="" />
        <div class="phone-consult show-phone-consult" v-if="show_phone_consult">
          <div class="phone-consult-main">
            <h4>
              <a href="tel:400-150-9669">客服电话<span>400-150-9669</span></a>
            </h4>
            <h4>客服工作时间</h4>
            <p>周一到周五：9：00～20：00（在线和电话）</p>
            <p>周末或节假日：9：00～20：00（电话）</p>
          </div>
        </div>
      </div>
      <div v-if="showBackTop" class="item" @click="toTop">
        <img src="@/static/suspend3.png" alt="" />
      </div>
    </div>
    <div class="shadow" v-if="show_online" @click="show_online = false"></div>
    <div
      class="shadow2"
      v-if="show_phone_consult"
      @click="show_phone_consult = false"
    ></div>
  </footer>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      showBackTop: false,
      show_online: false,
      show_phone_consult: false,
      nav: [
        {
          name: "产品服务",
          sec_list: [
            { name: "会员SAAS服务", type: "saas", url: "/saas" },
            { name: "精细化运营服务", type: "operation", url: "/operation" },
          ],
        },
        {
          name: "关于我们",
          sec_list: [
            { name: "公司介绍", type: "about", url: "/about" },
            { name: "联系我们", type: "contact", url: "/contact" },
          ],
        },
        {
          name: "加入我们",
          sec_list: [{ name: "招聘职位", type: "join", url: "/join" }],
        },
      ],
    };
  },
  mounted() {
    document.addEventListener("scroll", () => {
      const scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll > 500 && !this.showBackTop) {
        this.showBackTop = true;
      } else if (scroll <= 500 && this.showBackTop) {
        this.showBackTop = false;
      }
    });
    !(function (x) {
      function w() {
        var v,
          u,
          t,
          tes,
          s = x.document,
          r = s.documentElement,
          a = r.getBoundingClientRect().width;
        if (!v && !u) {
          var n = !!x.navigator.appVersion.match(/AppleWebKit.*Mobile.*/);
          v = x.devicePixelRatio;
          tes = x.devicePixelRatio;
          (v = n ? v : 1), (u = 1 / v);
        }
        if (a >= 640) {
          r.style.fontSize = "23.4375px";
        } else {
          if (a <= 320) {
            r.style.fontSize = "23.4375px";
          } else {
            r.style.fontSize = (a / 320) * 20 + "px";
          }
        }
      }
      x.addEventListener("resize", function () {
        w();
      });
      w();
    })(window);
  },
  methods: {
    toTop() {
      let scrollToptimer = setInterval(function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var speed = top / 4;
        if (document.body.scrollTop != 0) {
          document.body.scrollTop -= speed;
        } else {
          document.documentElement.scrollTop -= speed;
        }
        if (top == 0) {
          clearInterval(scrollToptimer);
        }
      }, 30);
    },
    show1() {
      this.show_phone_consult = !this.show_phone_consult;
      this.show_online = false;
    },
    show2() {
      this.show_online = !this.show_online;
      this.show_phone_consult = false;
    },
    toAns(namespace) {
      ans.track("button_service_click", {namespace});
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  background-color: #333;
  padding: 72px 0;
  .container {
    display: flex;
    justify-content: space-between;
  }
  .left {
    font-size: 14px;
    color: #fff;
    img {
      width: 124px;
    }
    p {
      margin-top: 24px;
    }
  }
}
.r-nav {
  display: flex;
  color: #fff;
  .item {
    margin-left: 170px;
    h2 {
      font-size: 20px;
    }
    ul li {
      margin-top: 22px;
      font-size: 14px;
      position: relative;
      a {
        color: #fff;
        transition: all 0.3s linear;
      }
      &:hover a {
        opacity: 0.8;
      }
    }
  }
}
.copyright {
  text-align: center;
  margin-top: 72px;
  color: #999;
  font-size: 14px;
}
.copyright a {
  color: #999;
}
.suspend {
  position: fixed;
  width: 65px;
  right: 30px;
  top: 50%;
  background-color: #fff;
  border-radius: 65px;
  transform: translateY(-50%);
  z-index: 51;
  padding: 10px 0;
  box-shadow: 0px 2px 4px 2px rgba(80, 80, 80, 0.17);
  .item {
    width: 100%;
    border-radius: 5px;
    font-size: 12px;
    color: #fff;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    &:last-child {
      &::after {
        display: none;
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 39px;
      height: 1px;
      background-color: #ebecf1;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
    img {
      width: 45px;
      height: 45px;
    }
  }
}
.online-consult,
.phone-consult {
  position: absolute;
  right: 65px;
  top: -20px;
  border-radius: 5px;
  display: none;
}
.online-consult-main {
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  width: 418px;
  margin-right: 12px;
  padding: 24px 28px;
  text-align: left;
  color: #333;
  font-size: 10px;
  border-radius: 5px;
  ul {
    display: flex;
    margin-bottom: 22px;
    margin-top: 16px;
    li {
      text-align: center;
      width: 60px;
      a {
        color: #333;
      }
      img {
        width: 40px;
        height: 40px;
        display: block;
        margin: 0 auto 5px;
      }
    }
  }
}
.online-consult-main p {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
  span {
    color: #ff5001;
  }
}
.online-hover:hover .online-consult {
  display: block;
}
.phone-consult-main {
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  width: 310px;
  margin-right: 12px;
  padding: 18px 10px;
  color: #333;
  font-size: 14px;
  border-radius: 5px;
  h4 {
    margin-bottom: 10px;
    font-size: 18px;
    a {
      color: #333;
    }
    span {
      display: block;
      margin-top: 10px;
      color: #333;
      font-weight: normal;
    }
  }
  p {
    font-size: 14px;
    color: #333;
    margin-top: 10px;
  }
  span {
    font-size: 14px;
    color: #666;
  }
}
.qqkf {
  display: block;
  color: #fff;
  margin-top: 10px;
}

.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.mobile-suspend {
  display: none;
}

.item2:hover .phone-consult {
  display: block;
}
@media screen and (max-width: 1200px) {
  .r-nav .item {
    margin-left: 125px;
  }
}
@media screen and (max-width: 1024px) {
  .footer .container {
    flex-wrap: wrap;
  }
  .footer .left {
    width: 100%;
  }
  .r-nav {
    margin-top: 40px;
    width: 100%;
    justify-content: space-between;
  }
  .r-nav .item {
    margin-left: 0;
  }
}

@media screen and (max-width: 640px) {
  .footer {
    padding: 0;
    .container {
      flex-wrap: wrap-reverse;
    }
    .left {
      padding-top: 30px;
      img {
        width: 90px;
        margin-bottom: 16px;
      }
      p {
        line-height: 24px;
        margin-top: 0;
        font-size: 12px;
      }
    }
  }
  .r-nav {
    margin-top: 28px;
    padding-bottom: 30px;
    border-bottom: 1px solid #666;
    .item {
      h2 {
        font-size: 15px;
      }
      ul {
        margin-top: 10px;
        li {
          font-size: 12px;
          margin-top: 6px;
        }
      }
    }
  }
  .copyright {
    margin-top: 40px;
    padding-bottom: 44px;
    font-size: 12px;
    span {
      display: block;
    }
  }
  .suspend {
    right: 12px;
    width: 44px;
    top: 70%;
    .item {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .online-consult {
    right: 44px;
    width: 168px;
  }
  .online-consult-main {
    width: 158px;
    padding: 10px;
    h3 {
      font-size: 8px;
    }
    p {
      font-size: 8px;
    }
    ul {
      flex-wrap: wrap;
      margin: 10px 0;
      li {
        width: 33.33%;
        span {
          display: none;
        }
        img {
          width: 30px !important;
          height: 30px !important;
        }
      }
    }
  }
  .phone-consult {
    right: 44px;
  }
  .phone-consult-main {
    width: 138px;
    padding: 10px;
    h4 {
      font-size: 12px;
      margin-bottom: 6px;
      span {
        font-size: 12px;
        margin-top: 0;
      }
    }
    p {
      font-size: 10px;
      margin-top: 5px;
    }
  }
  .suspend {
    display: none;
  }
  .mobile-suspend {
    display: block;
    .shadow {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 50;
    }
  }
  .shadow2 {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 50;
  }
  .show-online-consult,
  .show-phone-consult {
    display: block;
  }
}
</style>