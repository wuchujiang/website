<template>
  <footer class="footer">
    <div class="container">
      <div class="left">
        <img src="@/static/logo2.png" alt="">
        <p>合作电话：400-150-9669</p>
        <p>业务合作：marketing@oakblack.com</p>
        <p>媒体合作：media@oakblack.com</p>
      </div>
      <div class="r-nav">
        <div class="item">
          <h2>产品服务</h2>
          <ul>
            <li><nuxt-link :to="saas">会员SAAS服务</nuxt-link></li>
            <li><nuxt-link :to="operation">精细化运营服务</nuxt-link></li>
          </ul>
        </div>
        <div class="item">
          <h2>关于我们</h2>
          <ul>
            <li><nuxt-link :to="about">公司介绍</nuxt-link></li>
            <li><nuxt-link :to="contact">联系我们</nuxt-link></li>
          </ul>
        </div>
        <div class="item">
          <h2>加入我们</h2>
          <ul>
            <li><nuxt-link :to="join">招聘职位</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright"><a href="https://beian.miit.gov.cn/">粤ICP备18120172号</a>    Copyright © 2018 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      saas: process.env.NODE_ENV === 'production' ? '/saas.html' : '/saas',
      operation: process.env.NODE_ENV === 'production' ? '/operation.html' : '/operation',
      about: process.env.NODE_ENV === 'production' ? '/about.html' : '/about',
      contact: process.env.NODE_ENV === 'production' ? '/contact.html' : '/contact',
      join: process.env.NODE_ENV === 'production' ? '/join.html' : '/join',
    }
  },
}
</script>
<style>
.footer{
  background-color: #333;
  padding: 72px 0;
}
.footer .container{
  display: flex;
  justify-content: space-between;
}
.footer .left{
  font-size: 14px;
  color: #fff;
}
.footer .left p{
  margin-top: 24px;
}
.r-nav{
  display: flex;
  color: #fff;
}
.r-nav .item{
  margin-left: 170px;
}
.r-nav .item h2{
  font-size: 20px;
}
.r-nav .item ul li{
  margin-top: 22px;
  font-size: 14px;
}
.r-nav .item ul li a{
  color: #fff;
  transition: all .3s linear;
}
.r-nav .item ul li:hover a{
  opacity: .8;
}
.copyright{
  text-align: center;
  margin-top: 72px;
  color: #999;
}
.copyright a{
  color: #999;
}
</style>