<template>
  <footer class="footer">
    <div class="container">
      <div class="left">
        <img src="@/static/logo2.png" alt="" />
        <p>合作电话：400-150-9669</p>
        <p>业务合作：marketing@oakblack.com</p>
        <p>媒体合作：media@oakblack.com</p>
      </div>
      <div class="r-nav">
        <div class="item">
          <h2>产品服务</h2>
          <ul>
            <li><nuxt-link to="/saas">会员SAAS服务</nuxt-link></li>
            <li><nuxt-link to="/operation">精细化运营服务</nuxt-link></li>
          </ul>
        </div>
        <div class="item">
          <h2>关于我们</h2>
          <ul>
            <li><nuxt-link to="/about">公司介绍</nuxt-link></li>
            <li><nuxt-link to="/contact">联系我们</nuxt-link></li>
          </ul>
        </div>
        <div class="item">
          <h2>加入我们</h2>
          <ul>
            <li><nuxt-link to="/join">招聘职位</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备18120172号</a>
      Copyright © 2018 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM
    </div>
    <div class="suspend">
      <div class="item online-hover">
        <img src="@/static/suspend1.png" alt="" />
        <div class="online-consult">
          <div class="online-consult-main">
            <h3>亲爱的用户</h3>
            <p>为了更好的帮您解决问题，请选择您要咨询的会员类型</p>
            <ul>
              <li>
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433"
                  target="_blank"
                  ><img src="@/static/kh1.png" alt="" />省呗</a
                >
              </li>
              <li>
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433"
                  target="_blank"
                  ><img src="@/static/kh2.png" alt="" />小赢卡贷</a
                >
              </li>
              <li>
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433"
                  target="_blank"
                  ><img src="@/static/kh3.png" alt="" />keep</a
                >
              </li>
              <li>
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433"
                  target="_blank"
                  ><img src="@/static/kh4.png" alt="" />榕树贷款</a
                >
              </li>
              <li>
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433"
                  target="_blank"
                  ><img src="@/static/kh5.png" alt="" />新橙优品</a
                >
              </li>
              <li>
                <a
                  href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433"
                  target="_blank"
                  ><img src="@/static/kh6.png" alt="" />其他</a
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
            <h4>客服电话<span>400-150-9669</span></h4>
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
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showBackTop: false,
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
  font-size: 14px;
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
</style>