<template>
  <div ref="operation" v-show="pageShow">
    <oakHeader :current="1" sec_current="nav_service" />
    <main>
      <section class="operation-banner"></section>
      <section class="saas-tab">
        <div class="container">
          <div
            :class="`item ${current === index && 'active'}`"
            v-for="(item, index) in tab"
            :key="item"
            @click="scrollView(index)"
          >
            {{ item }}
          </div>
        </div>
      </section>
      <section class="mobile-second-nav">
        <ul>
          <li
            v-for="item in sec_list"
            :key="item.title"
            :class="{ active: item.type === 'operation' }"
          >
            <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </section>
      <section class="section1" ref="section1">
        <div class="common-title">
          <div class="en">system</div>
          <div class="name">全方位会员体系制定</div>
          <div class="desc">
            根据客户需求和产品属性，可针对性地定制输出多种会员体系方案
          </div>
        </div>
        <div class="operation-list container">
          <div class="item">
            <img src="@/static/img5.png" alt="" />
            <p>会员成长体系<br />帮助平台累积忠诚用户</p>
          </div>
          <div class="item">
            <img src="@/static/img6.png" alt="" />
            <p>会员积分体系<br />帮助平台提高留存及活跃</p>
          </div>
          <div class="item">
            <img src="@/static/img7.png" alt="" />
            <p>会员权益体系<br />帮助客户增收变现</p>
          </div>
        </div>
        <div class="mobile-operation-list">
          <img src="@/static/mobile/img8.png" alt="" />
        </div>
      </section>
      <section class="section2 period" ref="section2">
        <div class="common-title">
          <div class="en">life cycle</div>
          <div class="name">用户生命周期管理</div>
          <div class="desc">
            针对性地输出客户权益套餐，满足用户在不同生活场景下的需求，高频使用产品，增加用户黏性，提高用户留存率，进而提升LTV。
          </div>
        </div>
        <div class="container">
          <div class="text">
            <p>
              针对性地输出客户权益套餐，满足用户在不同生活场景下的需求，高频使用产品，增加用户黏性，提高用户留存率，进而提升LTV。
            </p>
            <p></p>
            <p>
              针对客户需要，可以制定的分级式套餐组合，拉动向上销售，提高购买率，从而实现ARPU值提升。
            </p>
          </div>
          <img src="@/static/img8.png" alt="" />
        </div>
        <div class="mobile-section2-main">
          <img src="@/static/mobile/img11.png" alt="" />
          <p>
            针对客户需要，可以制定的分级式套餐组合，拉动向上销售，提高购买率，从而实现ARPU值提升。
          </p>
        </div>
      </section>
      <section class="formulate" ref="section3">
        <div class="common-title">
          <div class="en">Technical</div>
          <div class="name">用户分层及策略制定</div>
          <div class="desc">
            多平台整合的销售数据和专业的运营团队，可帮助客户构建用户画像，结合用户标签和消费场景，对用户进行科学化、系统化的分层并制定相应策略。
          </div>
        </div>
        <div class="container">
          <img class="formulate-img" src="@/static/img9.png" alt="" />
          <img
            class="mobile-formulate-img"
            src="@/static/mobile/img12.png"
            alt=""
          />
        </div>
      </section>
      <oakForm />
    </main>
    <oakFooter type="operation" />
  </div>
</template>

<script>
import oakHeader from "../components/header/header";
import oakFooter from "../components/footer/footer";
import oakForm from "../components/form/form";
import ans from "@/utils/ans";
export default {
  name: "operation",
  components: {
    oakHeader,
    oakFooter,
    oakForm,
  },
  data() {
    return {
      tab: ["全方位会员体系制定", "用户生命周期管理", "用户分层及策略制定"],
      current: 0,
      pageShow: false,
      sec_list: [
        { title: "会员SaaS服务", url: "/saas", type: "saas" },
        { title: "精细化运营服务", url: "/operation", type: "operation" },
      ],
    };
  },
  head() {
    const local = this.$store.state.project;
    let title = "橡树黑卡--精细化运营服务";
    let description_content =
      "橡树黑卡根据客户需求和产品属性，可针对性地定制输出多种会员体系方案。会员成长体系帮助平台累积忠诚用户，会员积分体系帮助平台提高留存及活跃，会员权益体系帮助客户增收变现，400-150-9669。";
    let keywords_content =
      "橡树黑卡，会员体系，会员成长，会员权益，留存率，促活，用户生命周期管理，用户分层，用户画像";
    if (local) {
      title = `${local.name}--精细化运营服务`;
      description_content = `${local.name}为根据客户需求和产品属性，可针对性地定制输出多种会员体系方案。会员成长体系帮助平台累积忠诚用户，会员积分体系帮助平台提高留存及活跃，会员权益体系帮助客户增收变现，400-150-9669。`;
      keywords_content = `${local.name}，会员体系，会员成长，会员权益，留存率，促活，用户生命周期管理，用户分层，用户画像`;
    }
    return {
      title,
      meta: [
        {
          hid: "about",
          name: "description",
          content: description_content,
        },
        {
          name: "keywords",
          content: keywords_content,
        },
      ],
    };
  },
  mounted() {
    this.pageShow = true;
    ans.pageView("oak_operation_page");
  },
  methods: {
    scrollView(index) {
      this.current = index;
      this.$refs[`section${index + 1}`].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style lang="scss" scoped>
.operation-banner {
  width: 100%;
  height: 430px;
  background: url("@/static/operation-banner.png") no-repeat center center;
  background-size: auto 100%;
}
.banner img {
  float: left;
}
.common-title {
  text-align: center;
  .name {
    font-size: 30px;
    color: #333;
    font-weight: bold;
  }
  .des {
    font-size: 20px;
    color: #666;
    margin-top: 10px;
  }
}
.operation-list {
  box-sizing: border-box;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  .item {
    width: 362px;
    text-align: center;
    p {
      font-size: 16px;
      color: #333;
      margin-top: 20px;
      line-height: 24px;
    }
  }
}
.period {
  background-color: #fbfbfb;
  .container {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    padding-top: 72px;
    .text {
      width: 467px;
      font-size: 16px;
      color: #333;
      line-height: 30px;
      p {
        min-height: 60px;
      }
    }
    img {
      width: 640px;
    }
  }
}
.formulate {
  padding: 54px 0 100px;
  background-color: #fff;
  .common-title {
    .desc {
      width: 660px;
      margin: 12px auto 0;
    }
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 1028px;
  }
}
.formulate-img {
  display: block;
  margin: 72px auto 0;
}
.section2 {
  .common-title {
    .desc {
      display: none;
    }
  }
}
.mobile-formulate-img,
.mobile-second-nav,
.mobile-operation-list,
.mobile-section2-main {
  display: none;
}

@media screen and (max-width: 1024px) {
  .operation-banner {
    height: 300px;
  }
  .saas-tab .item {
    margin: 0 15px;
  }
  .common-title .name {
    font-size: 26px;
  }
  .operation-list .item {
    width: 32%;
  }
  .period .container {
    padding: 0 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .period .text {
    width: auto;
    padding: 30px 30px 0;
  }
}

@media screen and (max-width: 640px) {
  .operation-banner {
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
  .section1 {
    padding: 42px 12px;
  }
  .operation-list {
    display: none;
  }
  .mobile-operation-list {
    display: block;
    margin-top: 13px;
  }
  .section2 {
    padding: 35px 12px;
    background-color: #fbfbfb;
    .common-title {
      .desc {
        display: block;
      }
    }
    .container {
      display: none;
    }
    .mobile-section2-main {
      display: block;
      img {
        display: block;
        width: 188px;
        margin: 22px auto 0;
      }
      p {
        font-size: 12px;
        color: #666;
        line-height: 20px;
        margin-top: 18px;
      }
    }
  }
  .formulate {
    padding: 78px 12px 44px;
    .common-title {
      .desc {
        width: auto;
      }
    }
    .formulate-img {
      display: none;
    }
    .mobile-formulate-img {
      display: block;
      margin-top: 24px;
    }
  }
  .mobile-second-nav {
    display: block;
  }
}
</style>