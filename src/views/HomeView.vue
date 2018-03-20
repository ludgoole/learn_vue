<template>
  <div class="home-view">
    <list :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
    </infinite-loading>
  </div>
</template>

<script>
    import store from '@/store/index'
    import { mapState, mapActions } from 'vuex'

    import InfiniteLoading from 'vue-infinite-loading'
    import List from '../components/List'

    export default {
        name: 'home-view',
        store,
        components: {List, InfiniteLoading},
        data () {
        return {}
        },
        computed: {
            ...mapState({
                events: state => state.activities.events
            })
        },
        methods: {
            onInfinite () {
                setTimeout(() => {
                    this.loadMore()
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
                }, 1000)
            },

            ...mapActions([
                'loadMore'
            ])

        }
    }
</script>

<style lang="scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
