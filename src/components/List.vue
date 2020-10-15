<template>
  <div class="content_list">
    <div class="list_one" v-if="id_type == 1">
      <div class="photo">
        <img src="../assets/purpleHome/photo.png" alt="" srcset="" />
      </div>
      <div class="detail">
        <h4>{{ data.title }}</h4>
        <p>{{ data.author }}</p>
        <p class="date_time">
          <span class="dateY"
            ><a-icon type="calendar" class="icon_date" />{{ data.dateY }}</span
          >
          <span class="dateH"
            ><a-icon type="history" class="icon_date" />{{ data.dateH }}</span
          >
        </p>
      </div>
      <div class="right_operation">
        <a-icon class="ER right_active" type="check-circle" />
        <a-icon class="ER error_active" type="close-circle" />
        <!-- <a-icon type="check-circle" />
        <a-icon type="close-circle" /> -->
      </div>
    </div>
    <div class="list_two" v-if="id_type == 2">
      <div class="detail">
        <h4>{{ data.title }}</h4>
        <p>{{ data.detail }}</p>
      </div>
      <div class="right_operation">
        <a-icon type="right" />
      </div>
    </div>
    <div class="list_three" v-if="id_type == 3">
      <div class="detail"><span class="dot"></span>{{ data.title }}</div>
      <div class="right_operation">{{ data.author }}</div>
    </div>
    <div class="list_four" v-if="id_type == 4">
      <span class="dot"></span>
      <div class="detail">
        <h4>{{ data.title }}</h4>
        <p>{{ data.detail }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: ["id_type", "data"],
  data() {
    return {
      message: "list",
    };
  },
};
</script>
<style lang="less" scoped>
// .detail1{

// }
.content_list {
  h4,
  p {
    margin: 0;
    width: 100%;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  text-align: left;
  padding: 0 24px;
  .list_one {
    width: 100%;
    // margin-bottom: 10px;
    div {
      display: inline-block;
      height: 60px;
      p,
      h4 {
        line-height: 20px;
        margin: 0;
        padding: 0;
      }
    }
    .photo {
      float: left;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    .detail {
      margin-left: 24px;
      h4 {
        color: #000034;
        font-size: 15px;
      }
      p {
        font-size: 12px;
      }
      p:nth-child(1) {
        color: #aaa8be;
      }
      p:nth-child(2) {
        color: #7978b2;
      }
      .dateY {
        margin-right: 3px;
      }
      .icon_date {
        margin-right: 2px;
        color: #768dff;
      }
    }
    .right_operation {
      float: right;
      font-size: 35px;
      .ER {
        cursor: pointer;
      }
      .right_active {
        color: #748bfd;
      }
      .error_active {
        color: #f30f44;
      }
    }
  }

  .list_two {
    height: 60px;
    .detail {
      float: left;
      font-size: 14px;
      h4,
      p {
        width: 200px;
      }
      p {
        color: #a5a3b8;
        margin: 0px;
        padding: 0;
        line-height: 16px;
      }
    }
    .right_operation {
      float: right;
      font-size: 25px;
      cursor: pointer;
      color: #bab9c7;
    }
  }
  .list_three {
    height: 30px;
    width: 100%;
    .detail {
      display: inline-block;
      line-height: 30px;
      span.dot {
        float: left;
        width: 5px;
        height: 5px;
        background-color: coral;
        border-radius: 50%;
        margin: 12px 15px 0 0;
      }
    }
    .right_operation {
      float: right;
      cursor: pointer;
      color: #bab9c7;
    }
  }
  .list_four {
    height: 56px;
    width: 100%;
    span.dot {
      float: left;
      width: 26px;
      height: 26px;
      box-shadow: 0 0 10px #8587ec;
      background-color: #8587ec;
      border-radius: 50%;
      margin: 15px 4px 0 0;
    }
    .detail {
      display: inline-block;
      float: right;
      line-height: 30px;
      h4,
      p {
        width: 200px;
      }
    }
  }
}
</style>