<template>
  <div class="content">
    <div class="top">
      <div class="upcoming">
        <Topic topic="Upcoming appointments" />
        <ul>
          <li
            v-for="(item, index) in $store.state.purpleData.appointmentsData"
            :key="index"
          >
            <List v-if="index < 3" id_type="1" :data="item" />
          </li>
        </ul>
      </div>
      <div class="recent">
        <Topic topic="Recent results" />
        <ul>
          <li
            v-for="(item, index) in $store.state.purpleData.appointmentsData"
            :key="index"
          >
            <List v-if="index < 3" id_type="1" :data="item" />
          </li>
        </ul>
      </div>
    </div>
    <div class="below">
      <div class="news">
        <Topic topic="News" />
        <ul>
          <li
            v-for="(item, index) in $store.state.purpleData.newsData"
            :key="index"
          >
            <List v-if="index < 3" id_type="2" :data="item" />
          </li>
        </ul>
        <p>More...</p>
      </div>
      <div class="current">
        <div class="current_1">
          <Topic topic="Current prescription" />
          <ul>
            <li
              v-for="(item, index) in $store.state.purpleData.prescriptionData"
              :key="index"
            >
              <List v-if="index < 2" id_type="4" :data="item" />
            </li>
          </ul>
        </div>
        <div class="current_2">
          <Topic topic="Alert" />
          <ul>
            <li>Air pollution: 250% of norm.</li>
          </ul>
        </div>
      </div>
      <div class="notifitions">
        <Topic topic="Notifitions" />
        <ul>
          <li
            v-for="(item, index) in $store.state.purpleData.notifitionsData"
            :key="index"
          >
            <List v-if="index < 6" id_type="3" :data="item" />
          </li>
        </ul>
        <p>More...</p>
      </div>
    </div>
  </div>
</template>
<script>
import Topic from "../components/Topic";
import List from "../components/List";
export default {
  name: "PurpleHome",
  components: { Topic, List },
  data() {
    return {
      layoutTF: true,
    };
  },
  created() {
    this.$store.state.layoutTF = this.layoutTF;
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: #edf1fc;
  padding: 28px;
  height: calc(~"100vh - 64px");
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      text-decoration: none;
      margin: 15px 0;
      text-align: left;
    }
  }
  & > div {
    display: flex;
  }
  .top {
    // margin-bottom: 15px;
    & > div {
      display: inline-block;
      background-color: #fff;
      height: 325px;
    }
    .upcoming {
      width: 440px;
      margin-right: 30px;
    }
    .recent {
      width: 700px;
    }
  }
  .below {
    margin-top: 25px;
    margin-bottom: 45px;
    & > div {
      display: inline-block;
      background-color: #fff;
      height: 325px;
    }
    p {
      margin-top: -10px;
      padding: 0;
      line-height: 30px;
      color: #6f70e4;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
    }
    .news {
      width: 300px;
      margin-right: 30px;
    }
    .current {
      width: 290px;
      margin-right: 30px;
      background-color: #edf1fc;
      .current_1 {
        height: 200px;
        background-color: #fff;
      }
      .current_2 {
        background: linear-gradient(#6d6ee4, #8d90ed);
        width: 290px;
        height: 100px;
        margin-top: 15px;
        color: #fff;
        ul {
          padding: 0 24px;
        }
      }
    }
    .notifitions {
      width: 518px;
    }
  }
}
</style>b