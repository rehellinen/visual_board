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
