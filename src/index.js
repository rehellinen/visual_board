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
  Dialog,
  Form,
  FormItem,
  Input,
  Table,
  TableColumn
} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)


new Vue({
  el: '#app',
  render: h => h(App)
})
