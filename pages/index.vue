<template>
  <div ref="index" v-show="pageShow">
    <oakHeader :current="0" />
    <main>
      <section class="banner"></section>
      <section class="why-select-oak">
        <div class="container">
          <div class="common-title">
            <div class="en">WHY</div>
            <div class="name">为什么选择橡树黑卡</div>
            <div class="desc">
              专业团队根据合作方与用户诉求，设计定制产品，并提供专业运营支持服务
            </div>
          </div>
          <div class="wrap">
            <div class="capacity">
              <div
                v-for="(item, index) in list"
                :key="item"
                :class="`item ${current === index && 'active'}`"
                @mouseenter="current = index"
              >
                <img :src="require(`@/static/icon${index + 1}.png`)" alt="" />
                <div v-html="item"></div>
              </div>
              <div
                v-for="(item, index) in list2"
                :key="item"
                :class="`item mobile-item ${current === index && 'active'}`"
                @mouseenter="current = index"
              >
                <img :src="require(`@/static/icon${index + 1}.png`)" alt="" />
                <div v-html="item"></div>
              </div>
            </div>
            <div v-show="current === 0" class="capacity-content1">
              <div class="text">
                <div class="top">
                  <h4>一站式权益</h4>
                  <span>Equity one stop</span>
                  <h5>低成本 高价值</h5>
                </div>
                <p>
                  <span> - 整合食住行用等全流程权益，</span>
                  覆盖类目广，满足用户大部分生活需求。
                </p>
                <p>
                  <span> - 权益具有高频、强流量、高价值属性，</span>
                  利于吸引新用户，提升用户忠诚度。
                </p>
                <p>- 权益成本更低。</p>
              </div>
              <img src="@/static/benefit.png" alt="" />
              <img
                class="mobile-img"
                src="@/static/mobile/benefit.png"
                alt=""
              />
            </div>
            <div
              v-show="current === 1"
              class="capacity-content1 capacity-content2"
            >
              <div class="text">
                <div class="top">
                  <h4>独家权益</h4>
                  <span>Flexible customization</span>
                  <h5>权益保障 出行无忧</h5>
                </div>
                <p>
                  <span>
                    -
                    与多家酒店集团、贵宾出行服务商合作，可为用户提供高级酒</span
                  >
                  <span
                    >店会籍匹配，及全球贵宾休息室、快速安检等高端服务。</span
                  >
                </p>
                <p>
                  <span>
                    -
                    与航空公司合作，支持积分兑换里程、充话费送里程等权益。</span
                  >
                </p>
              </div>
              <img src="@/static/img14.png" alt="" />
              <img class="mobile-img" src="@/static/mobile/img1.png" alt="" />
            </div>
            <div
              v-show="current === 2"
              class="capacity-content1 capacity-content3"
            >
              <div class="text">
                <div class="top">
                  <h4>灵活定制</h4>
                  <span>Flexible customized</span>
                  <h5>专业服务 一键接入</h5>
                </div>
                <p>
                  <span> - 拥有多家银行服务专业经验，无仓储，无物</span>
                  <span>流，交付快，成本低。</span>
                </p>
                <p>
                  <span> - 产品介入支持多种H5/API、兑换码等方</span>
                  <span>式，可一键接入，权益可灵活配置。</span>
                </p>
              </div>
              <img src="@/static/img13.png" alt="" />
              <img class="mobile-img" src="@/static/mobile/img2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="plan">
        <div class="container">
          <img src="@/static/img11.png" alt="" />
          <div class="mobile-top">
            <h4>这些企业都已免费获得定制会员方案</h4>
            <ul>
              <li><img src="@/static/kh1.png" alt="" />省呗</li>
              <li><img src="@/static/kh5.png" alt="" />我来数科</li>
              <li><img src="@/static/kh3.png" alt="" />keep</li>
              <li><img src="@/static/kh4.png" alt="" />榕树贷款</li>
              <li><img src="@/static/kh7.png" alt="" />新橙优品</li>
            </ul>
          </div>
          <div class="plan-form">
            <h2>完善信息后 48小时内会有专门的商务人员与您对接</h2>
            <div class="item">
              <div class="text"><span>*</span>您的姓名：</div>
              <input
                type="text"
                maxlength="10"
                placeholder="请输入姓名"
                v-model="name"
                name=""
                id="name"
                autocomplete="off"
              />
              <div class="input-error">{{ name_error }}</div>
            </div>
            <div class="item">
              <div class="text"><span>*</span>公司名称：</div>
              <input
                type="text"
                placeholder="请输入公司名称"
                maxlength="100"
                v-model="company_name"
                name=""
                id="companyName"
                autocomplete="off"
              />
              <div class="input-error">{{ company_name_error }}</div>
            </div>
            <div class="item">
              <div class="text"><span>*</span>联系电话：</div>
              <input
                type="text"
                placeholder="请输入联系电话"
                maxlength="30"
                v-model="phone"
                name=""
                id="phone"
                autocomplete="off"
              />
              <div class="input-error">{{ phone_error }}</div>
            </div>
            <div class="item">
              <div class="text"><span>*</span>验证码：</div>
              <input
                type="text"
                placeholder="请输入验证码"
                v-model="code"
                name=""
                id="code"
                autocomplete="off"
              />
              <div class="get-code" v-if="!codeText" @click="getCode">
                获取验证码
              </div>
              <div class="get-code code-disable" v-else>{{ codeText }}</div>
              <div class="input-error">{{ code_error }}</div>
            </div>
            <div class="plan-btn" @click="getPlan">免费获取方案</div>
          </div>
        </div>
      </section>
      <section class="service-value">
        <div class="container">
          <div class="common-title">
            <div class="en">VALUE</div>
            <div class="name">服务价值</div>
            <div class="desc">
              助力企业满足用户对高品质服务的需求，提升拉新促活能力与品牌忠诚度
            </div>
          </div>
          <div class="list">
            <div
              v-for="(item, index) in service_value"
              :key="item.title"
              :class="{ item: true, active: service_value_current === index }"
              @mouseenter="service_value_current = index"
              @mouseleave="service_value_current = -1"
            >
              <img
                :src="
                  service_value_current === index
                    ? item.icon_selected
                    : item.icon
                "
                alt=""
              />
              <div class="name">{{ item.title }}</div>
              <div>
                <ul>
                  <li v-for="i in item.list" :key="i">
                    {{ i }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="client">
        <div class="container">
          <div class="common-title">
            <div class="en">CLIENT</div>
            <div class="name">我们服务的行业客户</div>
            <div class="desc">
              助力企业满足用户对高品质服务的需求，提升拉新促活能力与品牌忠诚度
            </div>
          </div>
          <img src="@/static/client.png" alt="" />
          <img class="mobile-kh" src="@/static/mobile/img3.png" alt="" />
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
import { register, officialWebsite } from "../utils/api";
import { Toast } from "vant";
import ans from "@/utils/ans";
export default {
  name: "IndexPage",
  components: {
    oakHeader,
    oakFooter,
    oakForm,
  },
  data() {
    return {
      pageShow: false,
      codeText: "",
      num: 60,
      name: "",
      name_error: "",
      company_name: "",
      company_name_error: "",
      phone: "",
      phone_error: "",
      code: "",
      code_error: "",
      list: [
        "<span>一站式权益</span> 低成本 高价值",
        "<span>独家稀缺权益</span> 提升产品竞争力",
        "<span>专业服务</span>   灵活定制",
      ],
      list2: [
        "<span style='display:block'>一站式权益</span> 低成本 高价值",
        "<span style='display:block'>独家稀缺权益</span> 提升产品竞争力",
        "<span style='display:block'>专业服务</span>   灵活定制",
      ],
      current: 0,
      service_value: [
        {
          icon: require("@/static/sv_icon0.png"),
          icon_selected: require("@/static/sv_icon0_selected.png"),
          title: "活跃",
          list: [
            "• 提升用户行为活跃",
            "• 提升用户交易活跃",
            "• 延长用户生命周期",
          ],
        },
        {
          icon: require("@/static/sv_icon1.png"),
          icon_selected: require("@/static/sv_icon1_selected.png"),
          title: "创收",
          list: ["• 获得会员费营收", "• 带动主营业务增收"],
        },
        {
          icon: require("@/static/sv_icon2.png"),
          icon_selected: require("@/static/sv_icon2_selected.png"),
          title: "客户关怀",
          list: [
            "• 通过会员礼，提升品牌价值",
            "• 提升用户尊贵感",
            "• 提升用户归属感",
          ],
        },
        {
          icon: require("@/static/sv_icon3.png"),
          icon_selected: require("@/static/sv_icon3_selected.png"),
          title: "用户画像",
          list: [
            "• 整合多平台消费者数据",
            "• 构建画像与标签体系",
            "• 数据驱动精细化会员运营",
          ],
        },
      ],
      service_value_current: -1,
      showDialog: false,
    };
  },
  head() {
    return {
      title: "橡树黑卡--值得信赖的会员权益平台",
      meta: [
        {
          hid: "index",
          name: "description",
          content:
            "橡树黑卡为金融、互联网、电商、零售等行业提供强大的用户运营全周期服务，提供积分体系运营、会员营销运营、游戏化运营等方案，400-150-9669。",
        },
        {
          name: "keywords",
          content:
            "橡树黑卡，会员权益，会员积分，视频会员，网站会员，app会员，用户运营，SaaS平台",
        },
      ],
    };
  },
  watch: {
    name: {
      handler: function () {
        if (this.name) {
          this.name_error = "";
        }
      },
      immediate: true,
    },
    phone: {
      handler: function () {
        if (this.phone) {
          this.phone_error = "";
        }
      },
      immediate: true,
    },
    code: {
      handler: function () {
        if (this.code) {
          this.code_error = "";
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.pageShow = true;
    ans.pageView("oak_page");
  },
  methods: {
    getCode() {
      //获取验证码
      if (!this.phone) {
        this.phone_error = "请填写您的联系电话";
        return;
      }
      if (!/^1([3-9])\d{9}$/.test(this.phone)) {
        this.phone_error = "请填写正确的联系电话";
        return;
      }
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      register(this.$axios, {
        phone_number: this.phone,
        app_name: "橡树黑卡",
      }).then((res) => {
        Toast.clear();
        this.session_code = res.session_code;
        this.timer();
      });
    },
    getPlan() {
      if (!this.name) {
        this.name_error = "请填写您的姓名";
        return;
      } else {
        this.name_error = "";
      }
      if (!this.company_name) {
        this.company_name_error = "请填写公司名称";
        return;
      } else {
        this.company_name_error = "";
      }
      if (!this.phone) {
        this.phone_error = "请填写您的联系电话";
        return;
      } else {
        if (!/^1([3-9])\d{9}$/.test(this.phone)) {
          this.phone_error = "请填写正确的联系电话";
          return;
        }
        this.phone_error = "";
      }
      if (!this.code) {
        this.code_error = "请填写验证码";
        return;
      } else {
        this.code_error = "";
      }
      if (!this.session_code) {
        Toast("请先获取验证码");
        return;
      }
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      officialWebsite(this.$axios, {
        name: this.name,
        phone_number: this.phone,
        company: this.company_name,
        otp: this.code,
        session_code: this.session_code,
      }).then(() => {
        Toast.clear();
        Toast("提交成功，稍后会有专门商务联络，谢谢！");
        this.phone = "";
        this.company_name = "";
        this.code = "";
        this.name = "";
        ans.track("business_click");
      });
    },
    timer() {
      let time = setInterval(() => {
        this.num--;
        this.codeText = `${this.num}s后重新获取`;
        if (this.num <= 0) {
          clearInterval(time);
          this.codeText = "";
          this.num = 60;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 420px;
  background: url("@/static/banner.png") no-repeat center center;
  background-size: auto 100%;
}
.why-select-oak {
  padding: 80px 0 72px 0;
}
.common-title {
  text-align: center;
  .name {
    font-size: 30px;
    color: #333;
    font-weight: bold;
  }
  .desc {
    font-size: 20px;
    color: #666;
    margin-top: 10px;
  }
}
.why-select-oak .wrap {
  margin-top: 72px;
}
.capacity {
  display: flex;
  justify-content: space-between;
  .item {
    box-sizing: border-box;
    width: 32%;
    border: 1px solid #ebecf1;
    border-radius: 4px;
    height: 225px;
    text-align: center;
    padding: 12px 20px 0;
    font-size: 24px;
    color: #333;
    font-weight: bold;
    transition: all 0.3s linear;
    img {
      margin-bottom: 23px;
    }
  }
  .active {
    border: 1px solid #ff5001;
    box-shadow: 0px 0px 20px 0px rgba(153, 153, 153, 0.3);
    color: #ff5001;
  }
}
.capacity-content1 {
  margin-top: 32px;
  height: 400px;
  padding: 0 117px 0 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 558px;
  }
  .text {
    line-height: 30px;
    color: #666666;
    font-size: 16px;
    .top {
      font-size: 24px;
      color: #222;
      padding-bottom: 10px;
      span {
        font-size: 14px;
        color: #333;
        line-height: 1;
      }
      h5 {
        font-size: 18px;
        color: #ff5001;
      }
    }
    p {
      padding: 15px 0;
    }
    span {
      display: block;
    }
  }
}
.capacity-content2 {
  padding: 0 94px;
  img {
    width: 435px;
  }
}
.show-list {
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
}
.show-list img {
  width: 32%;
}

.capacity-content3 {
  padding: 0 76px 0 94px;
  img {
    width: 640px;
  }
}
.plan {
  background-color: #fbfbfb;
}
.plan .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.plan img {
  width: 40%;
}
.service-value {
  padding: 72px 0;
  .list {
    display: flex;
    justify-content: space-between;
    margin-top: 72px;
    .item {
      width: 21.6%;
      height: 320px;
      border: 1px solid #333333;
      border-radius: 5px;
      text-align: center;
      transition: all 0.3s linear;
      img {
        display: block;
        width: 62px;
        height: 62px;
        margin: 33px auto 0;
      }
      .name {
        font-size: 24px;
        color: #ff5001;
        font-weight: bold;
        display: inline-block;
        border-bottom: 1px solid #ff5001;
        margin-top: 32px;
      }
      ul {
        display: inline-block;
        text-align: left;
        line-height: 30px;
        color: #666666;
        font-size: 15px;
        margin-top: 27px;
      }
    }
    .active {
      border: 1px solid #ff5001;
    }
  }
}
.client {
  padding: 72px 0;
  background-color: #fbfbfb;
  .common-title {
    .desc {
      display: none;
    }
  }
}
.client img {
  margin-top: 72px;
  width: 100%;
}
.mobile-img,
.mobile-top,
.mobile-kh,
.mobile-item {
  display: none;
}
@media screen and (max-width: 1200px) {
  .banner {
    height: 400px;
  }
  .service-value .list .item {
    width: 23%;
  }
  .capacity .item {
    font-size: 18px;
  }
  .capacity-content1 {
    padding: 0 70px;
  }
}

@media screen and (max-width: 1024px) {
  .banner {
    height: 300px;
  }
  .plan img {
    display: none;
  }
  .plan .container {
    justify-content: center;
    padding-bottom: 1rem;
  }
  .why-select-oak {
    padding: 50px 0 72px 0;
  }
  .common-title .name {
    font-size: 26px;
  }
  .common-title .desc {
    font-size: 18px;
  }
  .capacity-content1 {
    padding: 0 30px;
  }
  .capacity-content1 > img {
    width: 50%;
  }
  .service-value .list {
    flex-wrap: wrap;
  }
  .service-value .list .item {
    width: 48%;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 640px) {
  .banner {
    height: 200px;
    background: url("@/static/mobile/banner.png") no-repeat center center;
    background-size: auto 100%;
  }
  .why-select-oak {
    padding: 30px 0 40px;
    .wrap {
      margin-top: 16px;
    }
  }
  .common-title {
    text-align: left;
    .name {
      font-size: 16px;
    }
    .desc {
      font-size: 12px;
      margin-top: 8px;
    }
  }
  .capacity {
    .item {
      height: 160px;
      padding: 20px 0 0;
      font-size: 12px;
      font-weight: normal;
      display: none;
      span {
        font-size: 32px;
        display: block;
      }
      img {
        width: 65px;
        margin-bottom: 22px;
      }
    }
    .mobile-item {
      display: block;
    }
    .active {
      color: #333;
    }
  }
  .capacity-content1 {
    flex-wrap: wrap-reverse;
    padding: 16px 15px 10px;
    border: 1px solid #ebecf1;
    margin-top: 8px;
    height: 250px;
    img {
      display: none;
    }
    .mobile-img {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
    .text {
      font-size: 12px;
      color: #666;
      .top {
        display: none;
      }
      p {
        line-height: 20px;
        padding: 4px 0;
        span {
          display: inline;
        }
      }
    }
  }
  .plan .container {
    flex-wrap: wrap;
  }
  .mobile-top {
    padding-top: 24px;
    display: block;
    width: 100%;
    h4 {
      font-size: 16px;
      color: #333;
    }
    ul {
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
      li {
        font-size: 12px;
        color: #999;
        text-align: center;
        img {
          display: block;
          width: 44px;
          height: 44px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .service-value {
    padding-bottom: 30px;
    .list {
      margin-top: 15px;
      .item {
        width: 49%;
        height: 200px;
        border: 1px solid #999;
        overflow: hidden;
        margin-bottom: 8px;
        img {
          width: 48px;
          height: 48px;
          margin-top: 24px;
        }
        .name {
          margin-top: 20px;
          font-size: 16px;
          border-bottom: none;
        }
        ul {
          margin-top: 10px;
          color: #333;
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
  .client {
    background-color: #fff;
    padding: 30px 0;
    .common-title {
      .desc {
        display: block;
      }
    }
    img {
      display: none;
    }
    .mobile-kh {
      display: block;
      margin-top: 16px;
    }
  }
}
</style>