<template>
  <div class="content">
    <div class="first_page">
      <div class="maskLayer"></div>
      <div class="maskTop">
        <div class="logo_mune">
          <div class="logo"><span>Chop</span><span>cafe</span></div>
          <div>
            <span v-for="(item,index) in muneHeaderData" :key="index">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message:
        "世人慌慌张张，不过图碎银几两，而这碎银几两，可解这世间万种慌张，保老人晚年安康，儿女入得学堂，柴米油盐五谷粮。",
      muneHeaderData: ["Home1", "Home2", "Home3", "Home4"],
      layoutTF: false,
    };
  },
  created() {
    this.$store.state.muneHeaderData = this.muneHeaderData;
    this.$store.state.layoutTF = this.layoutTF;
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 1440px;
  margin: 0 auto;
  padding: 0;
  background-color: #ffffff;
  .first_page {
    height: 550px;
    width: 1440px;
    background-image: url("../assets/home/food_background.png");
    background-size: 100% 100%;
    position: relative;
    .maskLayer,
    .maskTop {
      position: absolute;
      top: 0;
      left: 0;
      height: 550px;
      width: 1440px;
    }
    .maskLayer {
      background-color: #000000;
      opacity: 0.7;
      z-index: 100;
    }
    .maskTop {
      color: #ffffff;
      z-index: 101;
      .logo_mune{
        width: 100%;
        height: 86px;
        .logo{
          font-family: 'Arial Narrow Bold';
        }
      }
    }
  }
}
</style>