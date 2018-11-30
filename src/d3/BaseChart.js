/**
 *  BaseChart.js
 *  Create By rehellinen
 *  Create On 2018/11/28 21:51
 */
import * as d3 from 'd3'
import {findMax} from "../utils/utils"

export class BaseChart {
  constructor(defaultConf, customConf) {
    this.processDefaultConf(defaultConf)
    this.processCustomConf(defaultConf, customConf)
  }

  processDefaultConf (defaultConf) {
    Object.keys(defaultConf).forEach(key => {
      this[key] = defaultConf[key]
    })
  }

  processCustomConf (defaultConf, customConf) {
    // 遍历用户自定义配置
    if (customConf) {
      Object.keys(defaultConf).forEach(key => {
        if (customConf.hasOwnProperty(key)) this[key] = customConf[key]
      })
    }
  }

  scaleX () {
    return d3.scaleLinear()
      .domain([0, this.data.length - 1])
      .range([0, this.g_width])
  }

  scaleY () {
    return d3.scaleLinear()
      .domain([0, findMax(this.data, 'y')])
      .range([this.g_height, 0])
  }
}
