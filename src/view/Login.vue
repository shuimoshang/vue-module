<template>
  <div class="content">
    <div class="login">
      <div class="login_from">
        <h2>Log In</h2>
        <a-input placeholder="USERNAME" />
        <a-input placeholder="PASSWORD" type="password" />
         <router-link to="/home"><button onclick="">SIGN IN</button> </router-link>
        <p>
          <span style="color: #a7aaac">Creat new account</span>
          <span style="color: #444850">Forget Password?</span>
        </p>
      </div>
      <img
        class="login_right"
        src="../assets/login/login_right.png"
        alt=""
        srcset=""
      />
      <img
        class="login_left"
        src="../assets/login/login_left.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      message: "login page",
      layoutTF: false,
    };
  },
  created() {
    this.$store.state.layoutTF = this.layoutTF;
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: #f66428;
  width: 100%;
  padding: 120px 0;
  .login {
    width: 900px;
    height: 600px;
    background-color: #050c14;
    margin: 0 auto;
    box-shadow: 0px 0px 45px #050c14;
    position: relative;
    img.login_right {
      float: right;
      width: 300px;
      height: 600px;
      z-index: 1;
    }
    img.login_left {
      float: left;
      margin: 60px 0 0 60px;
      width: 540px;
      height: 480px;
      z-index: 1;
    }
    .login_from {
      position: absolute;
      top: 100px;
      left: 115px;
      width: 485px;
      height: 380px;
      background-color: #050c14;
      z-index: 100;
      padding: 40px;
      h2 {
        color: #ffffff;
        font-size: 45px;
        font-weight: bold;
        text-align: left;
      }
      input {
        border: 0;
        border-bottom: 1px solid #2c2e37;
        background-color: #050c14;
        margin-bottom: 28px;
        color: #ffffff;
        &::-webkit-input-placeholder {
          color: #31363c;
        }
      }
      button {
        width: 180px;
        height: 45px;
        border: 0;
        border-radius: 23px;
        text-align: center;
        background-color: #f66428;
        color: #ffffff;
        float: left;
        cursor: pointer;
        &::after {
          content: "";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
      }
      p {
        position: absolute;
        bottom: 20px;
        left: 40px;
        span {
          cursor: pointer;
          margin-right: 24px;
        }
      }
    }
  }
}
</style>