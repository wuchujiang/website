<template>
  <section v-if="!hidePlan" :class="`free-plan ${clearFixed && 'clear-fixed'}`">
    <div class="container">
      <img class="img" src="@/static/img12.png" alt="">
      <!-- <ul>
        <li>
          <input v-model="name" placeholder="请输入您的姓名" type="text" />
          <div class="input-error">{{ name_error }}</div>
        </li>
        <li>
          <input
            v-model="company_name"
            placeholder="请输入您的联系电话"
            type="text"
          />
          <div class="input-error">{{ company_name_error }}</div>
        </li>
        <li>
          <input v-model="phone" placeholder="请输入您的公司名称" type="text" />
          <div class="input-error">{{ phone_error }}</div>
        </li>
        <li class="li2">
          <input v-model="code" placeholder="请输入验证码" type="text" />
          <div class="input-error">{{ code_error }}</div>
          <div class="get-code" @click="getCode">获取验证码</div>
        </li>
      </ul> -->
      <div class="free-get-plan" @click="showForm = true">免费获取方案</div>
      <img @click="hidePlan = true" class="img-close" src="@/static/close.png" alt="">
    </div>
    <div v-if="showForm" class="form-dialog">
      <div class="form-dialog-main">
        <img @click="showForm = false" class="form-dialog-close" src="@/static/close.png" alt="" />
        <img class="b-img" src="@/static/img11.png" alt="" />
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
          <div class="item">
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
    </div>
  </section>
</template>

<script>
export default {
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
      clearFixed: false,
      hidePlan: false,
      showForm: false
    };
  },
  mounted() {
    const timer = setTimeout(() => {
      const documentHeight = document.body.scrollHeight;
      document.addEventListener("scroll", () => {
        const scroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        let top = scroll + window.innerHeight + 290;
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
  methods: {
    getCode() {
      //获取验证码
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
      this.showDialog = true;
    },
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
  height: 480px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  padding: 0 30px 0 0;
  .b-img{
    width: 440px;
    height: 480px;
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
</style>