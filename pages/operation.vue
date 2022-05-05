<template>
  <div ref="operation">
    <oakHeader :current="1" />
    <main>
      <section class="operation-banner"></section>
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
        <div class="common-title">
          <div class="name">全方位会员体系制定</div>
          <div class="desc">
            根据客户需求和产品属性，可针对性地定制输出多种会员体系方案
          </div>
        </div>
        <div class="operation-list container">
          <div class="item">
            <img src="@/static/img5.png" alt="" />
            <p>会员成长体系<br />帮助平台累积忠诚用户</p>
          </div>
          <div class="item">
            <img src="@/static/img6.png" alt="" />
            <p>会员积分体系<br />帮助平台提高留存及活跃</p>
          </div>
          <div class="item">
            <img src="@/static/img7.png" alt="" />
            <p>会员权益体系<br />帮助客户增收变现</p>
          </div>
        </div>
      </section>
      <section class="section2 period" ref="section2">
        <div class="common-title">
          <div class="name">用户生命周期管理</div>
        </div>
        <div class="container">
          <div class="text">
            <p>
              针对性地输出客户权益套餐，满足用户在不同生活场景下的需求，高频使用产品，增加用户黏性，提高用户留存率，进而提升LTV。
            </p>
            <p></p>
            <p>
              针对客户需要，可以制定的分级式套餐组合，拉动向上销售，提高购买率，从而实现ARPU值提升。
            </p>
          </div>
          <img src="@/static/img8.png" alt="" />
        </div>
      </section>
      <section class="formulate" ref="section3">
        <div class="common-title">
          <div class="name">用户分层及策略制定</div>
          <div class="desc">
            多平台整合的销售数据和专业的运营团队，可帮助客户构建用户画像，结合用户标签和消费场景，对用户进行科学化、系统化的分层并制定相应策略。
          </div>
        </div>
        <div class="container">
          <img class="formulate-img" src="@/static/img9.png" alt="" />
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
  name: "operation",
  components: {
    oakHeader,
    oakFooter,
    oakForm,
  },
  data() {
    return {
      tab: ["全方位会员体系制定", "用户生命周期管理", "用户分层及策略制定"],
      current: 0,
    };
  },
  head() {
    return {
      title: "橡树黑卡--精细化运营服务",
      meta: [
        {
          hid: "about",
          name: "description",
          content:
            "橡树黑卡根据客户需求和产品属性，可针对性地定制输出多种会员体系方案。会员成长体系帮助平台累积忠诚用户，会员积分体系帮助平台提高留存及活跃，会员权益体系帮助客户增收变现，400-150-9669。",
        },
        {
          name: "keywords",
          content:
            "橡树黑卡，会员体系，会员成长，会员权益，留存率，促活，用户生命周期管理，用户分层，用户画像",
        },
      ],
    };
  },
  mounted() {
    this.$refs.operation.scrollIntoView();
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
.operation-banner{
  width: 100%;
  height: 430px;
  background: url("@/static/operation-banner.png") no-repeat center center;
  background-size: auto 100%;
}
.banner img {
  float: left;
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
.operation-list {
  box-sizing: border-box;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
}
.operation-list .item {
  width: 362px;
  text-align: center;
}
.operation-list .item p {
  font-size: 16px;
  color: #333;
  margin-top: 20px;
  line-height: 24px;
}
.period {
  background-color: #fbfbfb;
}
.period .container {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  padding-top: 72px;
}
.period .text {
  width: 467px;
  font-size: 16px;
  color: #333;
  line-height: 30px;
  padding-top: 120px;
}
.period .text p {
  min-height: 60px;
}
.formulate {
  padding: 54px 0 100px;
  background-color: #fff;
}
.formulate .common-title .desc {
  width: 660px;
  margin: 12px auto 0;
}
.formulate-img {
  display: block;
  margin: 72px auto 0;
}
</style>