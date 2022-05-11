<template>
  <section v-if="!hidePlan" :class="`free-plan ${clearFixed && 'clear-fixed'}`">
    <div class="container">
      <img class="img" src="@/static/img12.png" alt="">
      <div class="free-get-plan" @click="showForm = true">免费获取方案</div>
      <img @click="hidePlan = true" class="img-close" src="@/static/close.png" alt="">
    </div>
    <div v-if="showForm" class="form-dialog">
      <div class="form-dialog-main">
        <img @click="showForm = false" class="form-dialog-close" src="@/static/close.png" alt="" />
        <img class="b-img" src="@/static/img11.png" alt="" />
        <div class="plan-form">
          <div class="mobile-top">
            <h4>这些企业都已免费获得定制会员方案</h4>
            <ul>
              <li>
                <img src="@/static/kh1.png" alt="" />省呗
              </li>
              <li>
                <img src="@/static/kh2.png" alt="" />小赢卡贷
              </li>
              <li>
                <img src="@/static/kh3.png" alt="" />keep
              </li>
              <li>
                <img src="@/static/kh4.png" alt="" />榕树贷款
              </li>
              <li>
                <img src="@/static/kh5.png" alt="" />新橙优品
              </li>
            </ul>
          </div>
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
            <div class="text">公司名称：</div>
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
            <div class="input-error">{{ code_error }}</div>
            <div class="get-code" v-if="!codeText" @click="getCode">获取验证码</div>
            <div class="get-code code-disable" v-else>{{ codeText }}</div>
          </div>
          <div class="plan-btn" @click="getPlan">免费获取方案</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { register, officialWebsite } from '../../utils/api'
export default {
  data() {
    return {
      codeText: '',
      num: 60,
      name: "",
      name_error: "",
      company_name: "",
      company_name_error: "",
      phone: "",
      phone_error: "",
      code: "",
      code_error: "",
      clearFixed: false,
      hidePlan: false,
      showForm: false
    };
  },
  mounted() {
    let footer_height = 290;
    if(window.innerWidth < 641) {
      footer_height = 400;
    }
    const timer = setTimeout(() => {
      const documentHeight = document.body.scrollHeight;
      document.addEventListener("scroll", () => {
        const scroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        let top = scroll + window.innerHeight + footer_height;
        if (top >= documentHeight && !this.clearFixed) {
          this.clearFixed = true;
        }
        if (top < documentHeight && this.clearFixed) {
          this.clearFixed = false;
        }
      });
      clearTimeout(timer);
    }, 2000);
  },
  watch: {
    name: {
      handler: function () {
        if(this.name){
          this.name_error = '';
        }
      },
      immediate: true,
    },
    phone: {
      handler: function () {
        if(this.phone){
          this.phone_error = '';
        }
      },
      immediate: true,
    },
    code: {
      handler: function () {
        if(this.code){
          this.code_error = '';
        }
      },
      immediate: true,
    }
  },
  methods: {
    getCode() {
      //获取验证码
      if(!this.phone){
        this.phone_error = "请填写您的联系电话";
        return;
      }
      if (!/^1([3-9])\d{9}$/.test(this.phone)) {
        this.phone_error = "请填写正确的联系电话";
        return;
      }
      register(this.$axios, {
        phone_number: this.phone,
        app_name: "橡树黑卡",
      }).then(res => {
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
      officialWebsite(this.$axios, {
        name: this.name,
        phone_number: this.phone,
        company: this.company_name,
        otp: this.code,
        session_code: this.session_code
      }).then(() => {
        this.showDialog = true;
        this.phone = '';
        this.company_name = '';
        this.code = '';
        this.name = '';
      })
    },
    timer() {
      let time = setInterval(() => {
        this.num--;
        this.codeText = `${this.num}s后重新获取`
        if(this.num <= 0){
          clearInterval(time);
          this.codeText = '';
          this.num = 60;
        }
      }, 1000)
    }
  },
};
</script>
<style lang="scss" scoped>
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
.free-plan {
  box-sizing: border-box;
  padding-top: 1px;
  height: 115px;
  background: rgb(255, 220, 203);
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 50;
  .container{
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .img{
      width: 469px;
      transform: translateY(7px);
    }
  }
  ul {
    padding: 2px 30px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      margin-top: 30px;
      width: 464px;
      border-radius: 4px;
      height: 50px;
      position: relative;
      input {
        width: 100%;
        text-indent: 13px;
        height: 50px;
        font-size: 16px;
        color: #333;
        border: none;
        border-radius: 4px;
        background-color: #fff;
        outline: none;
      }
      .input-error {
        left: 0;
      }
    }
    .li2 {
      display: flex;
      input {
        width: 285px;
      }
    }
  }
}
.free-get-plan {
  background-color: #FF5001;
  width: 246px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  margin: 28px 100px 0 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s linear;
}
.free-get-plan:hover {
  opacity: 0.8;
}
.input-error {
  position: absolute;
  left: 88px;
  top: 50px;
  color: #FF5001;
  font-size: 14px;
}
.clear-fixed {
  position: relative;
}
.img-close{
  width: 44px;
  position: absolute;
  top: 0;
  right: 100px;
  cursor: pointer;
}
.form-dialog{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 52;
  background-color: rgba(0,0,0,.5);
}
.form-dialog-main{
  box-sizing: border-box;
  position: absolute;
  width: 1000px;
  height: 515px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  padding: 0 30px 0 0;
  border-radius: 5px;
  .b-img{
    width: 427px;
    height: 515px;
  }
  .plan-form{
    padding-top: 30px;
    h2{
      padding-top: 0;
      font-size: 22px;
      text-align: left;
    }
    .item input{
      width: 420px;
    }
    .plan-btn{
      margin: 25px auto 0;
    }
  }
}
.form-dialog-close{
  position: absolute;
  width: 43px;
  height: 43px;
  right: 0;
  top: 0;
  cursor: pointer;
}
.form-dialog-main .plan-form .item.code input{
  width: 250px;
}
.mobile-top{
  display: none;
}
@media screen and (max-width:1200px){
  .free-plan ul li{
    width: 430px;
  }
  .free-get-plan{
    width: 180px;
  }
}
@media screen and (max-width:1024px){
  .free-plan .container{
    padding: 0 40px;
    height: 115px;
    align-items: center;
  }
  .free-plan .img{
    width: 300px;
  }
  .free-get-plan{
    margin-top: 0;
  }
  .img-close{
    right: 40px
  }
}
@media screen and (max-width:640px){
  .free-plan{
    height: 66px;
    .container{
      padding: 0 12px;
      height: 66px;
      img{
        width: 200px !important;
        transform: translateY(0) !important;
      }
      .img-close{
        width: 30px !important;
        height: 30px;
        right: 0;
      }
    }
  }
  .free-get-plan{
    width: 108px;
    height: 26px;
    margin-right: 24px;
    font-size: 12px;
  }
  .form-dialog-main{
    width: 360px;
    height: 530px;
    padding: 0 12px;
    background-color: #FBFBFB;
    .b-img{
      display: none;
    }
    .plan-form{
      h2{
        font-size: 14px;
        margin-top: 24px;
      }
      .item{
        margin-top: 24px;
        .text{
          width: 130px;
          font-size: 14px;
        }
        .input-error{
          font-size: 12px;
          left: 80px;
          top: 42px;
        }
      }
      .mobile-top{
        display: block;
        width: 100%;
        h4{
          font-size: 16px;
          color: #333;
        }
        ul{
          display: flex;
          justify-content: space-between;
          margin-top: 24px;
          padding: 0;
          li{
            font-size: 12px;
            color: #999;
            text-align: center;
            margin-top: 0;
            width: 20%;
            height: auto;
            img{
              display: block;
              width: 44px;
              height: 44px;
              margin: 0 auto 10px;
            }
          }
        }
      }
    }
  }
}
</style>