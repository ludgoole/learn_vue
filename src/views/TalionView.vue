<template>
  <div class="talion-view">
        <div class="header-bar">
            <span class="close-talion" @click="closeTalion">关闭</span>
            <form class="search" onsubmit="return false">
                <input 
                    type="search"
                    name="query"
                    v-model.trim.lazy="queryStr"
                    @keyup.enter="goSearch()"
                >
            </form>
        </div>
        <ul class="nav">
            <li>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(35, 132, 232);">电影</h2>
                    <p>影院热映</p>
                </a>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(230, 70, 126);">同城</h2>
                    <p>周末活动</p>
                </a>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(159, 120, 96);">阅读</h2>
                    <p>电子书</p>
                </a>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(225, 100, 77);">东西</h2>
                    <p>心爱之物</p>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(122, 106, 219);">电视</h2>
                    <p>正在热播</p>
                </a>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(42, 184, 204);">小组</h2>
                    <p>志趣相投</p>
                </a>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(87, 116, 197);">游戏</h2>
                    <p>虚拟世界</p>
                </a>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(64, 207, 169);">FM</h2>
                    <p>红心歌单</p>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(159, 120, 96);">图书</h2>
                    <p>畅销排行</p>
                </a>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(244, 143, 46);">音乐</h2>
                    <p>新碟榜</p>
                </a>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(89, 108, 221);">应用</h2>
                    <p>玩手机</p>
                </a>
                <a href="#" target="_blank">
                    <h2 style="color: rgb(66, 189, 86);">市集</h2>
                    <p>购买原创</p>
                </a>
            </li>
        </ul>
  </div>
</template>


<script>
    export default {
        name: 'talion-view',
        component: {},
        data() {
            return {
                queryStr: ''
            }
        },
        methods: {
            closeTalion: function() {
                this.$emit('closeTalion');
            },
            goSearch: function() {
                this.$emit('closeTalion');
                this.router.push({
                    name: 'SearchView',
                    params: {
                        q: this.queryStr,
                    }
                })
            }
        }
    }
</script>


<style lang="scss" scoped>
    .talion-view {
        position: fixed;
        top: 0;
        z-index: 999;
        width: 62.5%;
        height: 100%;
        background-color: #f8f8f8;
        text-align: center;
        .header-bar {
            position: static;
            padding-top: 1rem;
            background-color: #f8f8f8;
            span {
                float: left;
                font-size: 2rem;
            }
            input {
                outline: 0;
                border: 0;
                border-radius: 0.5rem;
                margin-left: 2rem;
                width: 26rem;
                height: 2rem;
                background: #d7d7d7;
                font-size: 1.6rem;
            }
        }
        .nav {
            li {
                display: flex;
                justify-content: space-around;
                padding: 2rem 5rem 0;
            }
        }
    }

</style>
