<template>
  <div v-show="pageShow">
    <oakHeader :current="2" sec_current="nav_contact" />
    <main>
      <section class="contact-banner"></section>
      <section class="mobile-second-nav">
        <ul>
          <li
            v-for="item in sec_list"
            :key="item.title"
            :class="{ active: item.type === 'contact' }"
          >
            <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </section>
      <section class="contact-main">
        <div class="common-title">
          <div class="en">contact</div>
          <div class="name">联系方式</div>
          <div class="desc">您可以通过以下方式联系我们</div>
        </div>
        <div class="container">
          <div class="item">
            <a
              href="https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=28877"
              target="_blank"
            >
              <img src="@/static/icon11.png" alt="" />
              <h4>在线客服</h4>
              <p>周一到周五：<span>9：00～20：00</span> (在线和电话)</p>
              <button @click="toAns('service')">立即联系</button>
            </a>
          </div>
          <div class="item">
            <a href="tel:400-150-9669">
              <img src="@/static/icon12.png" alt="" />
              <h4>电话咨询</h4>
              <p>周末或节假日：<span>9：00～20：00</span> (电话)</p>
              <button @click="toAns('phone')" class="btn">400-150-9669</button>
            </a>
          </div>
          <div class="item">
            <a href="mailto:marketing@oakblack.com" target="_blank">
              <img src="@/static/icon13.png" alt="" />
              <h4>商务合作邮箱</h4>
              <p class="color">marketing<span>@oakblack.com</span></p>
              <button>发送邮件</button>
            </a>
          </div>
        </div>
      </section>
      <section class="contact-form">
        <div class="container">
          <img :src="project ? `${url}${project.en}_img11.png` : `${url}img11.png`" alt="" />
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
            <div class="item code">
              <div class="text"><span>*</span>验证码：</div>
              <input
                type="text"
                placeholder="请输入验证码"
                v-model="code"
                name=""
                id="code"
                autocomplete="off"
              />
              <div class="input-error">{{ code_error }}</div>
              <div class="get-code" v-if="!codeText" @click="getCode">
                获取验证码
              </div>
              <div class="get-code code-disable" v-else>{{ codeText }}</div>
            </div>
            <div class="plan-btn" @click="getPlan">免费获取方案</div>
          </div>
        </div>
      </section>
    </main>
    <oakFooter type="contact" />
  </div>
</template>

<script>
import oakHeader from "../components/header/header";
import oakFooter from "../components/footer/footer";
import { register, officialWebsite } from "../utils/api";
import { Toast } from "vant";
import ans from "@/utils/ans";
import { url } from '../utils/config'
export default {
  name: "contact",
  components: {
    oakHeader,
    oakFooter,
  },
  data() {
    return {
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
      pageShow: false,
      sec_list: [
        { title: "公司介绍", url: "/about", type: "about" },
        { title: "联系我们", url: "/contact", type: "contact" },
      ],
      url,
      project: null,
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
  mounted() {
    this.pageShow = true;
    this.project = window.local;
    ans.pageView("oak_connect_page");
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
    toAns(type) {
      if(type === 'service') {
        ans.track("button_service_click", {type: 'contact'});
      };
      if(type === 'phone') {
        ans.track("button_phone_click");
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.contact-banner {
  width: 100%;
  height: 430px;
  background: url("@/static/contact-banner.png") no-repeat center center;
  background-size: auto 100%;
}
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
  a {
    color: #fff;
  }
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
  cursor: pointer;
}
.contact-main .item button a {
  color: #fff;
  display: block;
  width: 154px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-main .item button.btn {
  background-color: #fff;
  color: #ff5001;
}
.contact-form {
  background-color: #fbfbfb;
  margin-bottom: 72px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 467px;
    }
  }
}
.mobile-top,
.common-title,
.mobile-second-nav {
  display: none;
}

@media screen and (max-width: 1024px) {
  .contact-banner {
    height: 300px;
  }
  .contact-main .container {
    flex-wrap: wrap;
  }
  .contact-main .item {
    width: 60%;
    margin-bottom: 20px;
  }
  .contact-form .container {
    justify-content: center;
  }
  .contact-form img {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .contact-banner {
    display: none;
  }
  .contact-form {
    .container {
      flex-wrap: wrap;
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
    }
  }
  .contact-main {
    padding: 60px 12px 40px;
    .container {
      padding: 0;
      margin-top: 14px;
      .item {
        width: 32%;
        justify-content: space-between;
        background-color: #fff;
        color: #333;
        border: 1px solid #666;
        border-radius: 6px;
        height: 160px;
        padding: 0;
        margin-bottom: 0;
        a {
          color: #333;
        }
        button {
          display: none;
        }
        img {
          width: 30px;
          height: 30px;
          margin: 18px auto 0;
        }
        h4 {
          font-size: 12px;
          margin-top: 6px;
        }
        p {
          font-size: 12px;
          padding: 0 12px;
          span {
            display: block;
          }
        }
        .color {
          color: #ff5001;
        }
      }
    }
  }
  .common-title {
    display: block;
    text-align: left;
    .name {
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }
    .desc {
      display: block;
      font-size: 12px;
      margin-top: 8px;
      color: #666;
    }
  }
  .contact-form {
    padding: 1px 12px 0;
    margin-bottom: 40px;
  }
  .mobile-second-nav {
    display: block;
  }
}
</style>