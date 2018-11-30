/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/11/28 10:24
 */
import index from './template/index.pug'
import './assets/css/reset.css'
import './assets/sass/index.sass'
import './d3/index'

const app = document.getElementById('app')
app.innerHTML = index
import './utils/draw'
