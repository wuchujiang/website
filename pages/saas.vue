<template>
  <div ref="saas">
    <oakHeader :current="1" />
    <main>
      <section class="saas-banner"></section>
      <section class="saas-tab">
        <div class="container">
          <div
            :class="`item ${current === index && 'active'}`"
            v-for="(item, index) in tab"
            :key="item"
            @click="scrollView(index)"
          >
            {{ item }}
          </div>
        </div>
      </section>
      <section class="section1" ref="section1">
        <div class="container">
          <div class="common-title">
            <div class="name">数字化会员产品设计</div>
          </div>
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
            <img src="@/static/img1.png" alt="" />
          </div>
        </div>
      </section>
      <div class="section1-2">
        <div class="container">
          <img src="@/static/img2.png" alt="" />
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
            <div class="name">会员管理后台</div>
          </div>
          <img src="@/static/img3.png" alt="" />
        </div>
      </section>
      <section class="section3" ref="section3">
        <div class="container">
          <div class="common-title">
            <div class="name">敏捷高效的技术能力</div>
          </div>
          <div class="section3-main">
            <img src="@/static/img4.png" alt="" />
            <div class="right">
              <ul>
                <li>快速上线</li>
                <li>持续迭代</li>
              </ul>
              <div class="item">
                开发图案经验丰富，累计开发上线50+项目，近一年上线20+项目
              </div>
              <div class="item">
                项目采用敏捷开发流程，每周迭代发版次数达1-2次，，近一年累计发版次数100+
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
    <oakFooter />
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
    this.$refs.saas.scrollIntoView();
  },
  methods: {
    scrollView(index) {
      this.current = index;
      this.$refs[`section${index + 1}`].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style>
.saas-banner{
  width: 100%;
  height: 430px;
  background: url("@/static/saas-banner.png") no-repeat center center;
  background-size: auto 100%;
}
.saas-tab {
  background-color: #fbfbfb;
}
.saas-tab .container {
  display: flex;
  justify-content: center;
}
.saas-tab .item {
  width: 257px;
  height: 60px;
  background: #333333;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  margin: 0 40px;
  cursor: pointer;
  transition: all 0.3s linear;
}
.saas-tab .item.active {
  background: linear-gradient(180deg, #ff8802 0%, #ff5001 100%);
}
.common-title {
  text-align: center;
}
.common-title .name {
  font-size: 30px;
  color: #333;
  font-weight: bold;
}
.section1-main {
  display: flex;
  padding: 88px 80px 0;
  justify-content: space-between;
}
.section1-main .left p {
  font-size: 30px;
  color: #666;
  font-weight: bold;
}
.section1-main .left ul {
  display: flex;
  margin-top: 40px;
}
.section1-main .left ul li {
  margin-right: 68px;
  text-align: center;
  font-size: 16px;
  color: #333;
}
.section1-main .left ul li img {
  display: block;
  margin: 0 auto;
}
.section1-2 {
  background-color: #fbfbfb;
  padding: 114px;
}
.section1-2 .container {
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
}
.section1-2 .text {
  width: 467px;
  font-size: 16px;
  color: #333;
  line-height: 30px;
}
.section1-2 .text p {
  min-height: 60px;
}
.section2 {
  padding: 72px 0;
}
.section2 img {
  margin-top: 40px;
}
.section3 {
  padding: 54px 0 100px;
  background-color: #fbfbfb;
}
.section3-main {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  padding: 0 70px;
}
.section3-main .right {
  width: 500px;
}
.section3-main ul {
  display: flex;
  justify-content: space-between;
}
.section3-main ul li {
  width: 202px;
  height: 51px;
  background: #ffa733;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section3-main .right .item {
  font-size: 16px;
  color: #333;
  position: relative;
  margin-top: 56px;
  line-height: 30px;
}
.section3-main .right .item::before {
  content: "";
  position: absolute;
  width: 33px;
  height: 2px;
  background-color: #ffa733;
  left: 0;
  top: -10px;
}
</style>