<template>
  <main>
    <section
      class="banner"
      :style="{
        background: project.en
          ? `url(${url}banner-${project.en}.png) center center / auto 100% no-repeat`
          : `url(${url}banner.png) center center / auto 100% no-repeat`,
      }"
    ></section>
    <section>
      <div class="container">
        <div class="title">
          <p>服务价值</p>
          <span>Srevise value</span>
        </div>
        <img class="service-value" :src="`${url}service-value.png`" alt="" />
      </div>
    </section>
    <section class="container product-advantages">
      <div class="title">
        <p>产品优势</p>
        <span>Product advantages</span>
      </div>
      <ul>
        <li><img :src="`${url}ad1.png`" alt="" /></li>
        <li><img :src="`${url}ad2.png`" alt="" /></li>
        <li><img :src="`${url}ad3.png`" alt="" /></li>
      </ul>
    </section>
    <section class="container cooperation-model">
      <div class="title">
        <p>合作模式</p>
        <span>Cooperation model</span>
      </div>
      <div class="desc">结合平台用户特征，帮助客户搭建付费会员制体系</div>
      <ul>
        <li>
          <img :src="`${url}model-icon1.png`" alt="" />
          <p>整套定制方案输出</p>
        </li>
        <li>
          <img :src="`${url}model-icon2.png`" alt="" />
          <p>底层技术服务</p>
        </li>
        <li>
          <img :src="`${url}model-icon3.png`" alt="" />
          <p>后端运营维护</p>
        </li>
      </ul>
      <img class="model-icon" :src="`${url}model-icon4.png`" alt="" />
      <div class="model-text">整合客户现有会员体系，提供差异化会员权益内容</div>
    </section>
    <section class="container official-cooperation">
      <div class="title">
        <p>官方合作</p>
        <span>Official cooperation</span>
      </div>
      <div class="desc">合作服务商</div>
      <img class="partner1" :src="`${url}partner1.png`" alt="" />
      <div class="desc">合作标杆案例</div>
      <img class="partner2" :src="`${url}partner2.png`" alt="" />
    </section>
  </main>
</template>

<script>
import { url } from "@/utils/config";
export default {
  data() {
    return {
      url,
      project: {},
    };
  },
  mounted() {
    this.project = this.$store.state.project;
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 500px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.title {
  text-align: center;
  margin-top: 60px;
  p {
    color: #202437;
    font-size: 30px;
  }
  span {
    color: #e1e2e6;
    font-size: 20px;
  }
}
.service-value {
  display: block;
  width: 775px;
  margin: 86px auto 0;
}
.product-advantages {
  margin-top: 146px;
  ul {
    overflow: hidden;
    li {
      margin-top: 117px;
      width: 1030px;
      float: right;
      &:nth-child(2n) {
        float: left;
      }
    }
  }
}
.cooperation-model {
  margin-top: 146px;
  .desc {
    text-align: center;
    color: #202437;
    font-size: 20px;
    margin-top: 89px;
    font-weight: bold;
  }
  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 74px;
    padding: 0 50px;
    li {
      width: 142px;
      text-align: center;
      color: #202437;
      font-size: 15px;
      p {
        line-height: 60px;
      }
    }
  }
}
.model-icon {
  display: block;
  width: 663px;
  margin: 113px auto 0;
}
.model-text {
  text-align: center;
  color: #202437;
  font-size: 20px;
  margin-top: 52px;
  font-weight: bold;
}
.official-cooperation {
  margin: 146px auto 226px;
  .desc {
    color: #202437;
    font-size: 20px;
    text-align: center;
    margin: 70px 0 42px;
  }
  .partner1 {
    width: 100%;
  }
  .partner2 {
    width: 1000px;
    display: block;
    margin: 0 auto;
  }
}
</style>