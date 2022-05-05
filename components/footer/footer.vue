<template>
  <footer class="footer">
    <div class="container">
      <div class="left">
        <img src="@/static/logo2.png" alt="" />
        <p>合作电话：400-150-9669</p>
        <p>业务合作：marketing@oakblack.com</p>
        <p>媒体合作：media@oakblack.com</p>
      </div>
      <div class="r-nav">
        <div class="item">
          <h2>产品服务</h2>
          <ul>
            <li><nuxt-link to="/saas">会员SAAS服务</nuxt-link></li>
            <li><nuxt-link to="/operation">精细化运营服务</nuxt-link></li>
          </ul>
        </div>
        <div class="item">
          <h2>关于我们</h2>
          <ul>
            <li><nuxt-link to="/about">公司介绍</nuxt-link></li>
            <li><nuxt-link to="/contact">联系我们</nuxt-link></li>
          </ul>
        </div>
        <div class="item">
          <h2>加入我们</h2>
          <ul>
            <li><nuxt-link to="/join">招聘职位</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      <a href="https://beian.miit.gov.cn/">粤ICP备18120172号</a> Copyright ©
      2018 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM
    </div>
    <div class="suspend">
      <div class="item">
        <img src="@/static/suspend1.png" alt="">
        <div class="text">在线咨询</div>
        <div class="online-consult">
          <div class="online-consult-main">
            <h3>亲爱的用户</h3>
            <p>为了更好的帮您解决问题，请选择您要咨询的会员类型</p>
            <ul>
              <li><img src="@/static/kh1.png" alt="">省呗</li>
              <li><img src="@/static/kh2.png" alt="">小赢卡贷</li>
              <li><img src="@/static/kh3.png" alt="">keep</li>
              <li><img src="@/static/kh4.png" alt="">榕树贷款</li>
              <li><img src="@/static/kh5.png" alt="">新橙优品</li>
              <li><img src="@/static/kh6.png" alt=""></li>
            </ul>
            <p>如您需要商务合作请联络邮箱：marketing@oakblack.com</p>
            <p>电话：400-150-9669</p>
          </div>
        </div>
      </div>
      <div class="item item2">
        <img src="@/static/suspend2.png" alt="">
        <div class="text">
          电话咨询
          <p>400-150-9669</p>
        </div>
      </div>
      <div class="item">
        <img src="@/static/suspend3.png" alt="">
        <div class="text">
          返回顶部
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.footer {
  background-color: #333;
  padding: 72px 0;
}
.footer .container {
  display: flex;
  justify-content: space-between;
}
.footer .left {
  font-size: 14px;
  color: #fff;
}
.footer .left p {
  margin-top: 24px;
}
.r-nav {
  display: flex;
  color: #fff;
}
.r-nav .item {
  margin-left: 170px;
}
.r-nav .item h2 {
  font-size: 20px;
}
.r-nav .item ul li {
  margin-top: 22px;
  font-size: 14px;
}
.r-nav .item ul li a {
  color: #fff;
  transition: all 0.3s linear;
}
.r-nav .item ul li:hover a {
  opacity: 0.8;
}
.copyright {
  text-align: center;
  margin-top: 72px;
  color: #999;
}
.copyright a {
  color: #999;
}
.suspend{
  position: fixed;
  width: 62px;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
}
.suspend .item{
  width: 100%;
  height: 80px;
  background: linear-gradient(173deg, #FF8133 0%, #FF6C29 100%);
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  position: relative;
}
.suspend .item .text{
  transform: translateY(-10px);
}
.suspend .item.item2{
  height: 90px;
}
.online-consult{
  position: absolute;
  right: 60px;
  top: -20px;
  border-radius: 5px;
}
.online-consult-main{
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  width: 418px;
  margin-right: 12px;
  padding: 24px 28px;
  text-align: left;
  color: #333;
  font-size: 14px;
}
.online-consult-main ul{
  display: flex;
}
.online-consult-main ul li{
  text-align: center;
}
</style>