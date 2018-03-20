<template>
    <div class="pages-view">
        <header-bar @showTalion="open"></header-bar>
        <router-view>被子级路由的内容所替代</router-view>
        <talion-view class="talion-view" v-show="talion" @closeTalion="close"></talion-view>
    </div>
</template>


<script>
    import HeaderBar from '@/components/HeaderBar'
    import TalionView from '@/views/TalionView'

    export default {
        name: 'pages-view',
        components: {HeaderBar, TalionView},
        data() {
            return {
                talion: ''              
            }
        },
        computed: {

        },
        methods: {
            open: function() {
                this.talion = 'open';
            },
            close: function() {
                this.talion = '';
            }
        }
    }
</script>

// 独立样式
<style scoped>

</style>
