/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/11/28 10:24
 */
import index from './template/index.pug'
import reset from './assets/css/reset.css'
import base from './assets/sass/index.sass'

const app = document.getElementById('app')
app.innerHTML = index
