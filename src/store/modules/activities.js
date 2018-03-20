import request from 'superagent'
import jsonp from 'superagent-jsonp'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


const state = {
  events: [],
  temp: [],
  skip: 0,
  eventItem: {}
}

const mutations = {
  loadMore (state, payload) {
    console.log(payload.res)
    state.events = state.events.concat(payload.res)
  },
}

const actions = {
  /**
   * Loading more data
   * skip: 3 default
   * count: 3 default
   */
  loadMore ({commit, state}) {
    // Vue.axios.get("./static/list.json")
    //     .then((res) => {
    //         commit({
    //             type: 'loadMore',
    //             res: res.data
    //           })
    //     })
       
        /******************************************************************
         *                          非跨域请求 json                        *
        *******************************************************************/
        request
            .get('./static/list.json')
            .end((err, res) => {
                if (!err) {
                    commit({
                    type: 'loadMore',
                    res: JSON.parse(res.text)
                    })
                }
            })

        /******************************************************************
         *                          跨域请求 jsonp                         *
        *******************************************************************
        request
            .get('https://api.douban.com/v2/event/list?loc=108288&start=' +
            state.skip + '&count=3')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                    type: 'loadMore',
                    res: res.body.events
                    })
                }
            })
        *******************************************************************/
 
  }

}
export default {
  state,
  mutations,
  actions
}
