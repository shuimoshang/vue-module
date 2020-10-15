<template>
  <div class="content_topic">
    <h3 v-if="topic !== 'Alert'">
      {{ topic }} <span><a-icon type="ellipsis" /></span>
    </h3>
    <h3 v-if="topic == 'Alert'" class="style_color">
      {{ topic }} <span><a-icon type="ellipsis" /></span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Topic",
  props: ["topic", "color"],
  data() {
    return {
      message: "topic",
    };
  },
};
</script>

<style lang="less" scoped>
.content_topic {
  width: 100%;
  height: 45px;
  line-height: 45px;
  margin-bottom: 0;
  margin-top: 10px;
  h3 {
    text-align: left;
    padding: 0 24px;
    color: #030037;
    font-weight: bold;
    span {
      float: right;
      color: #7c7998;
      font-size: 30px;
      cursor: pointer;
    }
  }
  h3.style_color {
    color: #ffffff;
    span {
      color: #ffffff;
    }
  }
}
</style>