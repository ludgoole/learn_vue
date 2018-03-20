<template>
  <div id="app">
    <router-view class="view one">被子级路由的内容所替代</router-view>
    <router-view class="view two" name="subject">被子级路由的内容所替代</router-view>
    <router-view class="view three" name="search">被子级路由的内容所替代</router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
// 公共样式
<style>
  html {
    font-size: 62.5%;
  }

  #app {
    max-width: 41.2rem;
    margin: 0 auto;
  }

  .has-header {
    margin-top: 4.8rem;
  }

  h2 {
    font-size: 1.68rem;
    font-weight: normal;
    color: #111;
  }

  ul, li, a, h2 {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    display: block;
  }

  .header-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 998;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
    max-width: 41.2rem;
    height: 4.8rem;
    background: #fff;
    border-bottom: 0.1rem solid #f3f3f3;
  }
</style>
