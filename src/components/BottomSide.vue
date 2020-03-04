<template>
  <div class="box">
    <span>400-664-6698</span>
    <ul>
      <li>
        <a href="##">首页</a>
      </li>
      <li>
        <a href="##">客户端</a>
      </li>
      <li>
        <a href="##">登录</a>
      </li>
      <li>
        <a href="##">注册</a>
      </li>
    </ul>
    <span>浙IPC备16004860号-1</span>
  </div>
</template>
<style lang="scss" scoped>
.box {
  span,
  ul {
    display: block;
    text-align: center;
  }
  ul {

    width:80%;
    margin: 30px auto;
    display: flex;
    li {
      flex: 1;
      position: relative;
      a:after{
          content: "|";
          position: absolute;
          right:0;
      }
    }
  }
}
</style>
