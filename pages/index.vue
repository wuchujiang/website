<template>
  <div ref="index">
    <oakHeader :current="0" />
    <main>
      <section class="banner"></section>
      <section class="why-select-oak">
        <div class="container">
          <div class="common-title">
            <div class="name">为什么选择橡树省钱卡</div>
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
                <div>{{ item }}</div>
              </div>
            </div>
            <div v-show="current === 0" class="capacity-content1">
              <div class="text">
                <p>
                  <span>
                    <img
                      src="@/static/gou.png"
                      alt=""
                    />整合食住行用等全流程权益，</span
                  >
                  覆盖类目广，满足用户大部分生活需求。
                </p>

                <p>
                  <span>
                    <img
                      src="@/static/gou.png"
                      alt=""
                    />权益具有高频、强流量、高价值属性，</span
                  >
                  利于吸引新用户，提升用户忠诚度。
                </p>

                <p><img src="@/static/gou.png" alt="" />权益成本更低。</p>
              </div>
              <img src="@/static/benefit.png" alt="" />
            </div>
            <div v-show="current === 1" class="capacity-content2">
              <div class="text">
                <p>
                  <img
                    src="@/static/gou.png"
                    alt=""
                  />与多家酒店集团、贵宾出行服务商合作，可为用户提供高级酒店会籍匹配，及全球贵宾休息室、快速安检等高端服务。
                </p>
                <div class="show-list">
                  <img src="@/static/co1.png" alt="" />
                  <img src="@/static/co2.png" alt="" />
                  <img src="@/static/co3.png" alt="" />
                </div>
              </div>
              <div class="text">
                <p>
                  <img
                    src="@/static/gou.png"
                    alt=""
                  />与航空公司合作，支持积分兑换里程、充话费送里程等权益。
                </p>
                <div class="show-list">
                  <img src="@/static/co4.png" alt="" />
                  <img src="@/static/co5.png" alt="" />
                  <img src="@/static/co6.png" alt="" />
                </div>
              </div>
            </div>
            <div v-show="current === 2" class="capacity-content3">
              <div class="text">
                <p>
                  <img src="@/static/gou.png" alt="" />
                  拥有多家银行服务专业经验，无仓储，无物流，交付快，成本低。
                </p>
                <img class="cu1" src="@/static/cu1.png" alt="" />
              </div>
              <div class="text">
                <p>
                  <img
                    src="@/static/gou.png"
                    alt=""
                  />产品介入支持多种H5/API、兑换码等方式，可一键接入，权益可灵活配置。
                </p>
                <img class="cu2" src="@/static/cu2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="plan">
        <div class="container">
          <img src="@/static/img11.png" alt="" />
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
              />
              <div class="input-error">{{ name_error }}</div>
            </div>
            <div class="item">
              <div class="text">公司名称：</div>
              <input
                type="text"
                placeholder="请输入公司名称"
                maxlength="100"
                v-model="company_name"
                name=""
                id="companyName"
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
              />
              <div class="input-error">{{ phone_error }}</div>
            </div>
            <div class="item code">
              <div class="text"><span>*</span>验证码：</div>
              <input
                type="text"
                placeholder="请输入验证码"
                v-model="code"
                name=""
                id="code"
              />
              <div class="input-error">{{ code_error }}</div>
              <div class="get-code" @click="getCode">获取验证码</div>
            </div>
            <div class="plan-btn" @click="getPlan">免费获取方案</div>
          </div>
        </div>
      </section>
      <section class="service-value">
        <div class="container">
          <div class="common-title">
            <div class="name">服务价值</div>
            <div class="desc">
              助力企业满足用户对高品质服务的需求，提升拉新促活能力与品牌忠诚度
            </div>
          </div>
          <div class="list">
            <div
              v-for="(item, index) in service_value"
              :key="item.title"
              :class="`item ${service_value_current === index && 'active'}`"
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
            <div class="name">我们服务的行业客户</div>
          </div>
          <img src="@/static/client.png" alt="" />
        </div>
      </section>
      <oakForm />
    </main>
    <oakFooter />
    <div :class="`dialog ${showDialog && 'show-dialog'}`">
      <div class="dialog-bg"></div>
      <div class="dialog-container">
        提交成功，稍后会有专门商务联络，谢谢！
        <div class="close" @click="showDialog = false">✖</div>
      </div>
    </div>
  </div>
</template>

<script>
import oakHeader from "../components/header/header";
import oakFooter from "../components/footer/footer";
import oakForm from "../components/form/form";
export default {
  name: "IndexPage",
  components: {
    oakHeader,
    oakFooter,
    oakForm,
  },
  data() {
    return {
      name: "",
      name_error: "",
      company_name: "",
      company_name_error: "",
      phone: "",
      phone_error: "",
      code: "",
      code_error: "",
      list: [
        "一站式权益 低成本 高价值",
        "独家稀缺权益 提升产品竞争力",
        "专业服务   灵活定制",
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
            "• 延长用户生命周",
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
  mounted() {
    this.$refs.index.scrollIntoView();
  },
  methods: {
    getCode() {
      //获取验证码
    },
    getPlan() {
      this.showDialog = true;
      if (!this.name) {
        this.name_error = "请填写您的姓名";
        return;
      } else {
        this.name_error = "";
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
    },
  },
};
</script>

<style>
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
}
.common-title .name {
  font-size: 30px;
  color: #333;
  font-weight: bold;
}
.common-title .desc {
  font-size: 20px;
  color: #666;
  margin-top: 10px;
}
.why-select-oak .wrap {
  margin-top: 72px;
}
.capacity {
  display: flex;
  justify-content: space-between;
}
.capacity .item {
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
}
.capacity .item img {
  margin-bottom: 23px;
}
.capacity .item.active {
  border: 1px solid #ff5001;
  box-shadow: 0px 0px 20px 0px rgba(153, 153, 153, 0.3);
  color: #ff5001;
}
.capacity-content1 {
  margin-top: 32px;
  background-color: #fbfbfb;
  height: 400px;
  padding: 0 137px 0 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.capacity-content1 .text {
  line-height: 30px;
  color: #666666;
  font-size: 16px;
}
.capacity-content1 .text p {
  padding: 15px 0;
}
.capacity-content1 .text span {
  display: block;
}
.capacity-content1 .text img {
  transform: translate(-4px, 2px);
}
.capacity-content2 {
  margin-top: 32px;
  background-color: #fbfbfb;
  height: 400px;
  padding: 0 34px 0 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.capacity-content2 .text {
  width: 47%;
}
.capacity-content2 .text p {
  height: 60px;
  line-height: 30px;
  color: #666666;
  font-size: 16px;
}
.capacity-content2 .text p img {
  transform: translate(-4px, 2px);
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
  margin-top: 32px;
  background-color: #fbfbfb;
  height: 400px;
  padding: 0 76px 0 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.capacity-content3 .text {
  width: 45%;
}
.capacity-content3 .text p {
  line-height: 30px;
  color: #666666;
  font-size: 16px;
}
.capacity-content3 .text p img {
  transform: translate(-4px, 2px);
}
.capacity-content3 .text .cu1 {
  margin: 30px auto 0;
  display: block;
}
.capacity-content3 .text .cu2 {
  margin: 44px auto 0;
  display: block;
}
.plan {
  background-color: #fbfbfb;
}
.plan .container {
  display: flex;
  justify-content: space-between;
}
.plan img {
  width: 40%;
}
.plan-form{
  padding-top: 50px;
}
.plan-form h2{
  font-size: 24px;
  color: #333;
}
.plan-form .item {
  margin-top: 30px;
  display: flex;
  position: relative;
}
.plan-form .item .text {
  width: 88px;
  text-align: right;
  line-height: 50px;
  font-size: 16px;
  color: #333;
}
.plan-form .item .text span {
  color: #ff5001;
}
.plan-form .item input {
  width: 520px;
  height: 50px;
  background-color: #eee;
  border: none;
  text-indent: 10px;
  font-size: 16px;
  outline: none;
}
.plan-form .item.code input {
  width: 285px;
}
.get-code {
  width: 117px;
  height: 40px;
  background-color: #333;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  margin: 5px 0 0 26px;
  cursor: pointer;
  transition: all 0.3s linear;
}
.get-code:hover {
  opacity: 0.8;
}
.plan-btn {
  width: 190px;
  height: 50px;
  background-color: #333;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  margin: 40px 0 0 232px;
  cursor: pointer;
  transition: all 0.3s linear;
}
.plan-btn:hover {
  opacity: 0.8;
}
.service-value {
  padding: 72px 0;
}
.service-value .list {
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
}
.service-value .list .item {
  width: 21.6%;
  height: 320px;
  border: 1px solid #333333;
  border-radius: 5px;
  text-align: center;
  transition: all 0.3s linear;
}
.service-value .list .item img {
  display: block;
  width: 62px;
  height: 62px;
  margin: 33px auto 0;
}
.service-value .list .item .name {
  font-size: 24px;
  color: #ff5001;
  font-weight: bold;
  display: inline-block;
  border-bottom: 2px solid #ff5001;
  margin-top: 32px;
}
.service-value .list .item ul {
  display: inline-block;
  text-align: left;
  line-height: 30px;
  color: #666666;
  font-size: 15px;
  margin-top: 27px;
}
.service-value .list .item.active {
  background-color: #333;
}
.service-value .list .item.active .name {
  color: #fff;
}
.service-value .list .item.active ul {
  color: #fff;
}
.client {
  padding: 72px 0;
  background-color: #fbfbfb;
}
.client img {
  margin-top: 72px;
}
.input-error {
  position: absolute;
  left: 88px;
  top: 50px;
  color: #ff5001;
  font-size: 14px;
}
.dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  left: 0;
  top: 0;
  display: none;
}
.dialog-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.dialog-container {
  background-color: #fff;
  width: 520px;
  height: 321px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #333;
  border-radius: 4px;
}
.dialog-container .close {
  position: absolute;
  font-size: 20px;
  color: #999;
  right: 10px;
  top: 10px;
  line-height: 1;
  cursor: pointer;
}
.show-dialog {
  display: block;
}
@media screen and (max-width:1200px){
  .banner{
    height: 450px;
  }
  .service-value .list .item{
    width: 23%;
  }
  .capacity .item{
    font-size: 20px;
  }
  .capacity-content1{
    padding: 0 70px;
  }
}
</style>