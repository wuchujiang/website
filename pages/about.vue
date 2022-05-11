<template>
  <div ref="about" v-show="pageShow">
    <oakHeader :current="2" sec_current="nav_about" />
    <main>
      <section class="about-banner"></section>
      <section class="mobile-second-nav">
        <ul>
          <li v-for="item in sec_list" :key="item.title" :class="{active: item.type === 'about'}"><nuxt-link :to="item.url">{{ item.title }}</nuxt-link></li>
        </ul>
      </section>
      <section class="about-section1">
        <div class="container">
          <div class="common-title">
          <div class="en">about </div>
            <div class="name">关于我们</div>
            <div class="desc">助力企业构建会员体系实现活跃与创收</div>
          </div>
          <div class="about-text">
            <p>橡树黑卡成立于2018年，</p>
            <p>
              是国内领先的付费会员制权益SaaS服务平台，是国家高新技术企业、“双软企业”
              。
            </p>
            <p></p>
            <p>
              合作伙伴包括华润集团、微众银行、工商银行、浦发银行、招商银行、腾讯理财通、微信、滴滴出行、龙腾出行，创维，TCL等知名企业。
            </p>
            <p></p>
            <p>
              创始团队来自于腾讯、平安、乐信等，在会员服务领域拥有丰富的权益供应链整合、会员体系搭建运营成功经验，致力于打造领先的权益服务平台。
            </p>
            <p></p>
            <p>
              目前公司业务正处于高速发展中，求才若渴，有广阔的成长和发展空间，我们迫切的需要优秀的你来加入，与公司共同成长进步！
            </p>
            <img src="@/static/img10.png" alt="" />
            <img class="mobile-img" src="@/static/mobile/img13.png" alt="" />
          </div>
        </div>
      </section>
      <section class="course">
        <div class="container">
          <div class="common-title">
          <div class="en">history </div>
            <div class="name">公司历程</div>
            <div class="desc">针对性地输出客户权益套餐，满足用户在不同生活场景下的需求，高频使用产品，增加用户黏性，提高用户留存率，进而提升LTV。</div>
          </div>
        </div>
        <div class="course-main container">
          <div class="list">
            <div class="item">
              <div class="date">
                <span>2018.11</span>
                <span>【橡树黑卡小程序】</span>
              </div>
              <p>
                与龙腾出行、海南航空、希尔顿、洲际、凯悦、雅高、滴滴出行、易安保险等企业达成合作，整合权益资源，搭建会员系统，奠基ToB能力
              </p>
              <b></b>
            </div>
            <div class="item">
              <div class="date">
                <span>2019.09</span>
                <span>【全面展开企业付费会员合作】</span>
              </div>
              <p>
                面向银行、商业地产、金融科技、智慧屏等行业机构提供专业方案定制和跨场景权益务，助力企业业务拉新与促活
              </p>
              <b></b>
            </div>
            <div class="item">
              <div class="date">
                <span>2020.09</span>
                <span>【华润通享卡】</span>
              </div>
              <p>
                华润集团以”引领商业进步，共创美好生活”为使命。华润通为其线上美好生活的载体，通卡打造行业标杆
              </p>
              <b></b>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div class="date">
                <span>2018.08</span>
                <span>【公司成立】</span>
              </div>
              <p>
                来自腾讯、携程、平安、乐信的初始团队成员，拥有百万级付费会员平台的操盘经验
              </p>
              <b></b>
            </div>
            <div class="item">
              <div class="date">
                <span>2019.03</span>
                <span>【腾讯理财通、滴滴出行】</span>
              </div>
              <p>与腾讯理财通、滴滴出行等达成会员权益输出合作，夯实服务能力</p>
              <b></b>
            </div>
            <div class="item">
              <div class="date">
                <span>2020.06</span>
                <span>【全新推出橡树生活权益平台】</span>
              </div>
              <p>
                橡树生活权益平台，涵盖娱乐视听类、生活服务类、旅游出行、车主福利、阅读学习、医护健康等300余项权益服务
              </p>
              <b></b>
            </div>
          </div>
        </div>
        <div class="mobile-course-main">
          <img src="@/static/mobile/img14.png" alt="" />
        </div>
      </section>
      <oakForm />
    </main>
    <oakFooter type="about" />
  </div>
</template>

<script>
import oakHeader from "../components/header/header";
import oakFooter from "../components/footer/footer";
import oakForm from "../components/form/form";
export default {
  name: "about",
  components: {
    oakHeader,
    oakFooter,
    oakForm,
  },
  data() {
    return {
      pageShow: false,
      sec_list: [
        {title: '公司介绍', url: "/about", type: 'about'},
        {title: '联系我们', url: "/contact", type: 'contact'}
      ]
    };
  },
  head() {
    return {
      title: "橡树黑卡--公司介绍",
      meta: [
        {
          hid: "about",
          name: "description",
          content:
            "橡树黑卡成立于2018年，是国内领先的付费会员制权益SaaS服务平台，是国家高新技术企业、“双软企业” 。客户包含华润集团，微众银行，工商银行，浦发银行，招商银行，腾讯理财通、微信、滴滴出行、龙腾出行，创维，TCL等知名企业，400-150-9669。",
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
  },
};
</script>
<style lang="scss" scoped>
.about-banner{
  width: 100%;
  height: 430px;
  background: url("@/static/about-banner.png") no-repeat center center;
  background-size: auto 100%;
}
.common-title {
  text-align: center;
  .name {
    font-size: 30px;
    color: #333;
    font-weight: bold;
  }
}
.about-section1 {
  padding: 72px 0;
}
.about-section1 p {
  font-size: 16px;
  color: #333;
  line-height: 30px;
  min-height: 30px;
  max-width: 710px;
  margin: 0 auto;
}
.about-text {
  margin-top: 72px;
}
.about-text img {
  display: block;
  margin: 20px auto 0;
}
.course {
  padding: 72px 0;
  background-color: #fbfbfb;
}
.course-main {
  height: 522px;
  position: relative;
  margin-top: 52px;
  padding: 0 80px;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
}
.course-main::before {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  border-bottom: 1px dashed #ff5001;
  z-index: 1;
}
.course-main .list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.course-main .list:last-child .item::after {
  content: "";
  position: absolute;
  width: 26px;
  height: 86px;
  background-color: #fff;
  border-radius: 26px;
  left: 0;
  top: -63px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.04);
  z-index: 8;
}
.course-main .list:last-child .item::before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: #ff5001;
  border-radius: 18px;
  left: 4px;
  top: -55px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.04);
  z-index: 9;
}
.course-main .list:last-child .item b {
  position: absolute;
  width: 30px;
  height: 50px;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 9;
}
.course-main .item {
  box-sizing: border-box;
  width: 288px;
  padding: 10px 20px 0;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.04);
  height: 215px;
  position: relative;
  background-color: #fff;
}
.course-main .item .date {
  font-size: 16px;
  color: #ff5001;
  position: relative;
  z-index: 11;
}
.course-main .item .date span {
  display: block;
  font-weight: bold;
  line-height: 30px;
}
.course-main .item .date span:last-child {
  transform: translateX(-7px);
}
.course-main .item p {
  font-size: 16px;
  color: #333;
  line-height: 30px;
  margin-top: 5px;
}
.course-main .list:first-child .item::after {
  content: "";
  position: absolute;
  width: 26px;
  height: 86px;
  background-color: #fff;
  border-radius: 26px;
  right: 0;
  bottom: -63px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.04);
  z-index: 8;
}
.course-main .list:first-child .item::before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: #ff5001;
  border-radius: 18px;
  right: 4px;
  bottom: -55px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.04);
  z-index: 9;
}
.course-main .list:first-child .item b {
  position: absolute;
  width: 30px;
  height: 50px;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 9;
}
.course-main .list:first-child .item .date {
  position: absolute;
  right: 26px;
  bottom: 10px;
  text-align: right;
}
.course-main .list:first-child .item .date span:last-child {
  transform: translateX(7px);
}
.about-text img.mobile-img, .mobile-course-main{
  display: none;
}
.course{
  .common-title{
    .desc{
      display: none;
    }
  }
}
.mobile-second-nav{
  display: none;
}
@media screen and (max-width:1024px){
  .about-banner{
    height: 300px;
  }
  .about-text img{
    width: 100%;
  }
  .course-main{
    padding: 0 26px;
  }
  .course-main .item{
    width: 244px;
  }
  .course-main .item p{
    font-size: 14px;
    line-height: 22px;
  }
  .course-main .list:first-child .item .date{
    font-size: 14px;
  }
}

@media screen and (max-width:640px){
  .about-banner{
    display: none;
  }
  .common-title {
    text-align: left;
    .name {
      font-size: 16px;
      color: #333;
    }
    .desc {
      display: block;
      font-size: 12px;
      margin-top: 8px;
      color: #666;
    }
  }
  .about-section1{
    padding-top: 48px;
    padding-bottom: 50px;
    .about-text{
      margin-top: 14px;
    }
    p{
      font-size: 12px;
      color: #333;
      line-height: 24px;
      min-height: 0;
    }
    img{
      display: none;
    }
  }
  .about-text img.mobile-img{
      display: block;
    }
  .course{
    padding-top: 35px;
    padding-bottom: 30px;
    .common-title{
      .desc{
        display: block;
      }
    }
    .course-main{
      margin-top: 24px;
    }
  }
  .course-main{
    display: none;
  }
  .mobile-course-main{
    display: block;
    margin: 10px 0 0 10px;
  }
  .mobile-second-nav{
    display: block;
  }
}
</style>