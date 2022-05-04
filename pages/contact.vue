<template>
  <div>
    <oakHeader :current="2" />
    <main>
      <section class="banner">
        <img src="@/static/about-banner.png" alt="" />
      </section>
      <section class="contact-main">
        <div class="container">
          <div class="item">
            <img src="@/static/icon11.png" alt="" />
            <h4>在线客服</h4>
            <p>周一到周五：9：00～20：00 (在线和电话)</p>
            <button>立即联系</button>
          </div>
          <div class="item">
            <img src="@/static/icon11.png" alt="" />
            <h4>电话咨询</h4>
            <p>周末或节假日：9：00～20：00 (电话)</p>
            <button class="btn">400-150-9669</button>
          </div>
          <div class="item">
            <img src="@/static/icon11.png" alt="" />
            <h4>商务合作邮箱</h4>
            <p>marketing@oakblack.com</p>
            <button>发送邮件</button>
          </div>
        </div>
      </section>
      <section class="contact-form">
        <div class="container">
          <img src="@/static/img11.png" alt="" />
          <div class="plan-form">
            <h2>完善信息后会有专门的商务人员与您对接</h2>
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
    </main>
    <oakFooter />
  </div>
</template>

<script>
import oakHeader from "../components/header/header";
import oakFooter from "../components/footer/footer";
export default {
  name: "contact",
  components: {
    oakHeader,
    oakFooter,
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
    };
  },
  head() {
    return {
      title: "橡树黑卡--联系我们",
      meta: [
        {
          hid: "about",
          name: "description",
          content:
            "完善您的信息后，橡树黑卡会有专门的商务人员与您对接，400-150-9669。",
        },
        {
          name: "keywords",
          content:
            "付费会员，会员权益，高新技术企业，提升活跃，带动营收，增加收入，客户关怀，用户画像，延长用户生命周期",
        },
      ],
    };
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
.contact-main {
  padding: 75px 0;
}
.contact-main .container {
  display: flex;
  justify-content: space-between;
}
.contact-main .item {
  box-sizing: border-box;
  padding-top: 35px;
  width: 30%;
  height: 283px;
  background-color: #333;
  border-radius: 4px;
  text-align: center;
  color: #fff;
}
.contact-main .item h4 {
  font-size: 16px;
  margin-top: 15px;
}
.contact-main .item p {
  font-size: 16px;
  margin-top: 18px;
}
.contact-main .item button {
  width: 154px;
  height: 42px;
  background: #ff5001;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  margin: 28px auto 0;
  border: none;
}
.contact-main .item button.btn {
  background-color: #fff;
  color: #ff5001;
}
.contact-form {
  background-color: #fbfbfb;
  margin-bottom: 72px;
}
.contact-form .container {
  display: flex;
  justify-content: space-between;
}
.plan-form h2 {
  text-align: center;
  font-size: 24px;
  color: #333;
  padding-top: 58px;
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
</style>