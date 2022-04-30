<template>
  <section :class="`free-plan ${clearFixed && 'clear-fixed'}`">
    <div class="container">
      <ul>
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
      </ul>
      <div class="free-get-plan" @click="getPlan">免费获取方案</div>
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
    };
  },
  mounted() {
    const timer = setTimeout(() => {
      const documentHeight = document.body.scrollHeight;
      document.addEventListener("scroll", () => {
        const scroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        let top = scroll + window.innerHeight + 130;
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
<style>
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
.free-plan {
  box-sizing: border-box;
  padding-top: 1px;
  height: 270px;
  background: url("../../static/bg.png") no-repeat center;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 50;
}
.free-plan ul {
  padding: 2px 30px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.free-plan ul li {
  margin-top: 30px;
  width: 464px;
  border-radius: 4px;
  height: 50px;
  position: relative;
}
.free-plan ul li.li2 {
  display: flex;
}
.free-plan ul li.li2 input {
  width: 285px;
}
.free-plan ul li input {
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
.free-plan ul li .input-error {
  left: 0;
}
.free-get-plan {
  background-color: #333;
  width: 246px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  margin: 28px auto 0;
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
  color: #ff0000;
  font-size: 14px;
}
.clear-fixed {
  position: relative;
}
</style>