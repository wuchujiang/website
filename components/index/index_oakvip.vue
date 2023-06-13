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
    <div class="oak-title">
      <h4>为什么选择橡树省钱卡</h4>
      <p>专业团队根据合作方与用户诉求，设计定制产品，并提供专业运营支持服务</p>
    </div>
    <div class="container service">
      <div class="oak-title">
        <h4>产品服务</h4>
        <p>助力企业高效率、低成本搭建会员/权益体系，拓展产品服务与吸引力</p>
      </div>
      <ul>
        <li v-for="item in service" :key="item.name">
          <img :src="`${url}${item.img}.png`" alt="" />
          <div>
            <h5>{{ item.name }}</h5>
            <p>{{ item.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="advantage">
      <div class="container">
        <div class="oak-title">
          <h4>产品优势</h4>
        </div>
        <ul>
          <li v-for="item in advantage" :key="item.name">
            <img :src="`${url}${item.img}.png`" alt="" />
            <div>
              <p>{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { url } from "@/utils/config";
export default {
  data() {
    return {
      url,
      project: {},
      service: [
        {
          img: "service-icon1",
          name: "产品",
          desc: "从企业及用户特征出发，搭建会员体系和权益",
        },
        {
          img: "service-icon2",
          name: "运营",
          desc: "提供会员运营支持和数据决策，专业客服售后服务",
        },
        {
          img: "service-icon3",
          name: "技术",
          desc: "支持H5/API/兑换码等接入，支持灵活快速定制，安全保障",
        },
        {
          img: "service-icon4",
          name: "供应链",
          desc: "跨场景/独家的高价值、多类型权益资源，可按需定制和拓展资源",
        },
      ],
      advantage: [
        {
          img: "advantage-icon1",
          desc: "多权益、多行业、多场景",
        },
        {
          img: "advantage-icon2",
          desc: "橡树有成功的会员业务运营经验，助力合作伙伴高速发展会员业务，增加营收",
        },
        {
          img: "advantage-icon3",
          desc: "支持H5/API/兑换码等快速接入；专人对接，服务响应快",
        },
        {
          img: "advantage-icon4",
          desc: "企业无需自行搭建团队和权益，帮助企业降低成本和风险",
        },
      ],
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
  height: 600px;
}
.oak-title {
  text-align: center;
  margin-top: 50px;
  h4 {
    font-size: 30px;
    color: #333;
  }
  p {
    font-size: 20px;
    color: #666;
    margin-top: 10px;
  }
}
.service {
  margin-top: 104px;
  ul {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 82px;
    li {
      box-sizing: border-box;
      width: 48%;
      border: 1px solid #ebecf1;
      margin-bottom: 40px;
      border-radius: 5px;
      height: 160px;
      display: flex;
      align-items: center;
      padding: 0 40px 0 12px;
      transition: all linear 0.3s;
      img {
        width: 100px;
        margin-right: 20px;
      }
      h5 {
        font-size: 24px;
        color: #333;
      }
      p {
        font-size: 15px;
        color: #666;
        margin-top: 16px;
      }

      &:hover {
        border: 1px solid #ff5001;
      }
    }
  }
}
.advantage {
  background-color: #fbfbfb;
  padding-top: 30px;
  ul {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 82px;
    li {
      box-sizing: border-box;
      width: 48%;
      border: 1px solid #ebecf1;
      margin-bottom: 40px;
      border-radius: 5px;
      height: 160px;
      display: flex;
      align-items: center;
      padding: 0 40px 0 12px;
      transition: all linear 0.3s;
      background-color: #fff;
      img {
        width: 100px;
        margin-right: 20px;
      }
      p {
        font-size: 18px;
        color: #333;
        line-height: 30px;
      }

      &:hover {
        border: 1px solid #ff5001;
      }
    }
  }
}
</style>