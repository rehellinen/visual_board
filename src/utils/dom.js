/**
 *  dom.js
 *  Create By rehellinen
 *  Create On 2018/11/30 12:20
 */

import * as $ from 'jquery'

export const changeSizeByClass = (className, width, height) => {
  $(`.${className}`).width(width)
    .height(height)
}

export const changeTable = (title, content) => {
  let thead = ''
  let tbody = ''
  for (let i = 0; i < title.length; i++) {
    thead += `<th>${title[i]}</th>`
  }

  for (let i = 0; i < content.length; i++) {
    tbody += `<td>${content[i]}</td>`
  }

  $('thead').append(thead)
  $('tbody').append(tbody)
}
