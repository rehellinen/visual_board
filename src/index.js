/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/11/28 10:24
 */
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Row,
  Col,
  Card,
  Dialog
} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Dialog)


new Vue({
  el: '#app',
  render: h => h(App)
})
