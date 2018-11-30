/**
 *  utils.js
 *  Create By rehellinen
 *  Create On 2018/11/30 13:22
 */

export const findMax = (array, key) => {
  let res = -1
  array.forEach(item => {
    if (item[key] > res) res = item[key]
  })
  return res
}
