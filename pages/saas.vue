<template>
  <div ref="saas" v-show="pageShow">
    <oakHeader :current="1" sec_current="nav_saas" />
    <main>
      <section class="saas-banner"></section>
      <section class="saas-tab">
        <div class="container">
          <div
            :class="{'item': true, 'active': current === index}"
            v-for="(item, index) in tab"
            :key="item"
            @click="scrollView(index)"
          >
            {{ item }}
          </div>
        </div>
      </section>
      <section class="mobile-second-nav">
        <ul>
          <li v-for="item in sec_list" :key="item.title" :class="{active: item.type === 'saas'}"><nuxt-link :to="item.url">{{ item.title }}</nuxt-link></li>
        </ul>
      </section>
      <section class="section1" ref="section1">
        <div class="container">
          <div class="common-title">
            <div class="en">digitization</div>
            <div class="name">数字化会员产品设计</div>
            <div class="desc">橡树支持对会员设计，及全链路的各项核心数据监控</div>
          </div>
          <section class="mobile-section1-main">
            <img src="@/static/mobile/img4.png" alt="">
            <h4>丰富的权益资源</h4>
            <p>橡树整合内外部资源，拥有多平台数千个虚拟服务产品的权益资源。</p>
            <img src="@/static/mobile/img5.png" alt="">
            <p>通过SasS运营赋能的方式快速、定制化输出，可广泛应用于用户生活的不同场景，发挥成本和规模交易的优势，助力客户促活，提升交易量。</p>
          </section>
          <div class="section1-main">
            <div class="left">
              <p>橡树支持对会员设计</p>
              <p>及全链路的各项核心数据监控</p>
              <ul>
                <li><img src="@/static/icon8.png" alt="" />交易数据</li>
                <li><img src="@/static/icon9.png" alt="" />权益使用数据</li>
                <li><img src="@/static/icon10.png" alt="" />用户生命周期</li>
              </ul>
            </div>
            <img class="img1" src="@/static/img1.png" alt="" />
          </div>
        </div>
      </section>
      <div class="section1-2">
        <div class="container">
          <img class="img2" src="@/static/img2.png" alt="" />
          <div class="text">
            <p>
              橡树整合内外部资源，拥有包括通信服务、娱乐充值、电商购物卡、网络工具、美食卡券、休闲生活、交通出行、车主服务等多平台数千个虚拟服务产品的权益资源。
            </p>
            <p></p>
            <p>
              通过SasS运营赋能的方式快速、定制化输出，可广泛应用于用户生活的不同场景，发挥成本和规模交易的优势，助力客户促活，提升交易量。
            </p>
          </div>
        </div>
      </div>
      <section class="section2" ref="section2">
        <div class="container">
          <div class="common-title">
            <div class="en">backstage</div>
            <div class="name">会员管理后台</div>
            <div class="desc">橡树支持对会员设计，及全链路的各项核心数据监控</div>
          </div>
          <div class="section2-main">
            <ul>
              <li>· 支持快速配置会员上线</li>
              <li>· 支持批量权益SKU管理</li>
              <li>· 支持会员卡和权益管理</li>
              <li>· 支持常见活动快速配置上线</li>
              <li>· 支持支付方式灵活配置</li>
            </ul>
            <img src="@/static/img3.png" alt="" />
          </div>
          <div class="mobile-section2-main">
            <img src="@/static/mobile/img6.png" alt="">
          </div>
        </div>
      </section>
      <section class="section3" ref="section3">
        <div class="container">
          <div class="common-title">
            <div class="en">Technical </div>
            <div class="name">敏捷高效的技术能力</div>
            <div class="desc">持续迭代  快速上线</div>
          </div>
          <div class="section3-main">
            <img src="@/static/img4.png" alt="" />
            <img class="mobile-img" src="@/static/mobile/img7.png" alt="" />
            <div class="right">
              <ul>
                <li>快速上线</li>
                <li>持续迭代</li>
              </ul>
              <div class="jishu">
                <div>3384次提交</div>     <div>306个分支</div>    <div>148个标签</div>
              </div>
              <div class="item">
                开发图案经验丰富，累计开发上线50+项目，近一年上线20+项目
              </div>
              <div class="item">
                项目采用敏捷开发流程，每周迭代发版次数达1-2次，近一年累计发版次数100+
              </div>
              <div class="item">
                系统模块可复用性强，采用微服务模式+中台模式开发
              </div>
            </div>
          </div>
        </div>
      </section>
      <oakForm />
    </main>
    <oakFooter type="saas" />
  </div>
</template>

<script>
import oakHeader from "../components/header/header";
import oakFooter from "../components/footer/footer";
import oakForm from "../components/form/form";
export default {
  name: "saas",
  components: {
    oakHeader,
    oakFooter,
    oakForm,
  },
  data() {
    return {
      tab: ["数字化会员产品设计", "会员管理后台", "敏捷高效的技术能力"],
      current: 0,
      pageShow: false,
      sec_list: [
        {title: '会员SaaS服务', url: "/saas", type: 'saas'},
        {title: '精细化运营服务', url: "/operation", type: 'operation'}
      ]
    };
  },
  head() {
    return {
      title: "橡树黑卡--会员SAAS服务",
      meta: [
        {
          hid: "about",
          name: "description",
          content:
            "橡树支持对会员设计，及全链路的各项核心数据（包括：交易数据、权益使用数据、用户生命周期等）监控，400-150-9669。",
        },
        {
          name: "keywords",
          content:
            "橡树黑卡，会员SAAS服务，会员设计，配置会员，权益SKU管理，会员卡和权益管理，活动快速配置，敏捷开发",
        },
      ],
    };
  },
  mounted() {
    this.pageShow = true;
  },
  methods: {
    scrollView(index) {
      this.current = index;
      this.$refs[`section${index + 1}`].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style lang="scss" scoped>
.saas-banner{
  width: 100%;
  height: 430px;
  background: url("@/static/saas-banner.png") no-repeat center center;
  background-size: auto 100%;
}
.common-title {
  text-align: center;
  .name {
    font-size: 30px;
    color: #333;
    font-weight: bold;
  }
  .desc{
    display: none;
  }
}
.section1{
  padding-bottom: 40px;
}
.section1-main {
  display: flex;
  padding: 0 40px 0 80px;
  justify-content: space-between;
  .left{
    padding-top: 88px;
    p {
      font-size: 30px;
      color: #333;
      font-weight: bold;
    }
    ul {
      display: flex;
      margin-top: 40px;
      justify-content: space-between;
      li {
        text-align: center;
        font-size: 16px;
        color: #333;
        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
  } 
  .img1{
    width: 612px;
  }
}
.section1-2 {
  background-color: #fbfbfb;
  padding: 20px 0 0 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 60px;
  }
  .text {
    width: 467px;
    font-size: 16px;
    color: #333;
    line-height: 30px;
    p {
      min-height: 60px;
    }
  }
  .img2{
    width: 644px;
  }
}
.section2 {
  padding: 72px 0;
  .section2-main{
    margin-top: 44px;
    display: flex;
    align-items: center;
    ul{
      width: 40%;
      padding-left: 200px;
      li{
        color: #333;
        font-size: 16px;
        line-height: 60px;
        font-weight: bold;
      }
    }
    img{
      width: 662px;
    }
  }
}
.section3 {
  padding: 54px 0 100px;
  background-color: #fbfbfb;
}
.section3-main {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .right {
    width: 500px;
    margin-top: 60px;
    .item {
      font-size: 16px;
      color: #333;
      position: relative;
      margin-top: 56px;
      line-height: 30px;
      &::before {
        content: "";
        position: absolute;
        width: 33px;
        height: 2px;
        background-color: #4A4A4A;
        left: 0;
        top: -10px;
      }
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 55px;
    li {
      height: 46px;
      border-radius: 4px;
      font-size: 18px;
      color: #666;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      position: relative;
      &::after{
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        height: 2px;
        background-color: #666;
      }
    }
  }
}
.mobile-section2-main, .mobile-section1-main, .mobile-img, .mobile-second-nav{
  display: none;
}

@media screen and (max-width:1024px){
  .saas-banner{
    height: 300px;
  }
  .saas-tab .item{
    margin: 0 15px;
  }
  .section1-main{
    padding: 50px 30px 0;
    justify-content: center;
  }
  .section1-main {
    .left{
      padding-top: 0;
      p{
        font-size: 24px;
      }
    }
    flex-wrap: wrap;
    .img1{
      width: 500px;
    }
  }
  .section1-2{
    padding: 30px;
  }
  .section1-2 .container{
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
  }
  .section1-2 .container > img{
    max-width: 100%;
  }
  .section1-2 .text{
    margin-top: 30px;
    width: auto;
    padding: 0 30px;
  }
  .section2{
    .section2-main{
      flex-wrap: wrap;
      ul{
        width: 100%;
      }
    }
  }
  .section3-main{
    padding: 0 30px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .section3-main .right{
    margin-top: 30px;
  }
}

@media screen and (max-width:640px){
  .saas-banner{
    display: none;
  }
  .section1{
    padding-top: 42px;
  }
  .common-title {
    text-align: left;
    .name {
      font-size: 16px;
      color: #333;
    }
    .desc {
      display: block;
      font-size: 12px;
      margin-top: 8px;
      color: #666;
    }
  }
  .section1-main, .section1-2{
    display: none;
  }
  .mobile-section1-main{
    color: #666;
    display: block;
    img{
      display: block;
      margin: 24px auto;
    }
    h4{
      font-size: 14px;
      padding: 0 14px 10px;
    }
    p{
      font-size: 12px;
      padding: 0 14px;
    }
  }
  .section2{
    background-color: #FBFBFB;
    padding: 35px 0 24px;
  }
  .section2 .section2-main{
    display: none;
  }
  .mobile-section2-main{
    display: block;
    margin-top: 20px;
  }
  .section3{
    padding-bottom: 44px;
  }
  .section3-main{
    padding: 0;
    margin-top: 16px;
    img{
      display: none;
    }
    .mobile-img{
      display: block;
      width: 292px;
      height: auto !important;
      margin: 0 auto;
    }
    .right{
      .item{
        font-size: 12px;
        color: #666;
        line-height: 24px;
        margin-top: 0;
        letter-spacing: 2px;
        text-indent: 1.2em;
        &::before{
          display: none;
        }
        &::after{
          content: "·";
          position: absolute;
          left: -10px;
          top: 0;
        }
      }
    }
    ul{
      display: none;
    }
  }
  .mobile-second-nav{
    display: block;
  }
  .jishu{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #FF5001;
    font-weight: bold;
    padding: 0 40px 20px;
  }
}
</style>